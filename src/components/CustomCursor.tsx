"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const minMatch = window.matchMedia("(min-width: 768px)");
        if (!minMatch.matches) return; // don't show custom cursor on mobile

        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // Hide on small devices by default using css class, or conditionally rendering empty
    return (
        <motion.div
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            className="custom-cursor"
            animate={{
                scale: isHovering ? 2 : 1,
                backgroundColor: isHovering ? "rgba(28, 35, 33, 0.1)" : "rgba(28, 35, 33, 1)",
                border: isHovering ? "1px solid rgba(28, 35, 33, 0.5)" : "none",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}
