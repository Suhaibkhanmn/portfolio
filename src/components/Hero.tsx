"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className={styles.mainHeading}>
                        Suhaib Khan
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.tagline}>
                        Software & AI Engineer specializing in agentic workflows,
                        RAG pipelines, and impactful machine learning systems.
                    </motion.p>
                </motion.div>

                <div className={styles.abstractGraphic}>
                    <Hero3D />
                </div>
            </div>
        </section>
    );
}
