"use client";

import { motion } from "framer-motion";
import styles from "./Thinking.module.css";

export default function Thinking() {
    return (
        <section className={styles.thinkingSection} id="thinking">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    What I'm building
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.thinkingBlock}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >

                        <p className={styles.blockText}>
                            I’m into agentic AI, structured workflows, and systems that can move beyond simple text generation. Most of what I build revolves around making these systems practical, connecting models to real data, real constraints, and real outcomes.

                            I’m interested in how autonomous systems behave in production: how they reason, where they fail, and how they can be made more reliable. Lately, I’ve been building around orchestration layers, RAG pipelines, and decision-driven workflows that are meant to actually run.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
