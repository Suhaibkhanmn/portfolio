"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.left}>
                        <h2 className={styles.heading}>Let's build something.</h2>
                        <p className={styles.subtext}>
                            Feel free to reach out if you wanna work on something or just want to discuss about life once ai takes your job.                        </p>
                    </div>

                    <div className={styles.links}>
                        <a href="mailto:mnsuhaibkhan@gmail.com" className={styles.link}>
                            <Mail className={styles.icon} size={20} />
                            <span>Email</span>
                        </a>
                        <a href="https://github.com/suhaibkhanmn" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Github className={styles.icon} size={20} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/suhaibkhanmn/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Linkedin className={styles.icon} size={20} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </motion.div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Suhaib Khan MN</p>
                </div>
            </div>
        </footer>
    );
}
