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

                    <div className={styles.linksContainer}>
                        <div className={styles.topLinksRow}>
                            <a href="https://drive.google.com/file/d/10rUaDwe-tZVg-zesRPwlynswdodx2i3o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
                                Resume
                            </a>
                        </div>
                        <div className={styles.bottomLinksRow}>
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
                            <a href="https://x.com/theghost_001" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                                <span>X</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Suhaib Khan MN</p>
                </div>
            </div>
        </footer>
    );
}
