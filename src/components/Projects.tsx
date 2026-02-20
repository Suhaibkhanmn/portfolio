"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [

    {
        title: "AGENTIC PAY",
        tagline: "Intelligent payment processing system combining deterministic policy rules with LLM-powered risk analysis.",
        description: "An intelligent payment processing system that uses Google Gemini to make autonomous payment decisions. Every payment flows through a three-layer decision pipeline: hard-coded business rules, 11 deterministic risk signals with correlation-aware scoring, and an AI reasoning layer. Low-risk payments auto-execute in seconds, suspicious ones get flagged for human review, and policy violations are blocked outright, with every decision traced in an immutable audit trail.",
        link: "https://github.com/Suhaibkhanmn/agentic-pay",
        tags: ["LLM Agents", "Gemini", "Payment Systems", "Python"]
    },
    {
        title: "AGENTIC SUPPLY CHAIN",
        tagline: "AI system that detects and responds to supply disruptions in real-time.",
        description: "Global supply chains lack autonomous, fast-response mechanisms for sudden multi-tier disruptions. This system implements multi-agent orchestration with transparent rationale tracking and human-in-the-loop validation, reducing response latency from days to seconds while maintaining verifiable decision graphs.",
        link: "https://github.com/Suhaibkhanmn/event-driven-supply-chain-disruption-response-agent",
        tags: ["LLM Orchestration", "Agentic Frameworks"]
    },
    {
        title: "SLA PREDICTION SYSTEM",
        tagline: "End-to-end early warning system for enterprise SLA breaches.",
        description: "Reactive incident management leads to expensive, avoidable enterprise contract violations. This project integrates XGBoost models into live data pipelines, structured for low-latency inference. This optimizes alert quality, achieving 92.4% precision in production environments.",
        link: "https://github.com/Suhaibkhanmn/SLA-prediction",
        tags: ["Applied ML", "XGBoost", "Data Pipelines"]
    },
    {
        title: "EARNINGS INTELLIGENCE ENGINE",
        tagline: "Production-ready system that ingests and analyzes earnings call data.",
        description: "An AI-powered intelligence engine that automates the ingestion and structural analysis of corporate earnings calls. It provides deep analytical capabilities over unstructured financial data, extracting key insights and sentiment from transcripts to accelerate financial research.",
        link: "https://github.com/Suhaibkhanmn/earnings-report-engine",
        tags: ["LLMs", "Data Pipelines", "Financial Analysis", "Python"]
    },
    {
        title: "DECENTRALIZED FREELANCE ESCROW",
        tagline: "Trustless smart contract escrow system for freelance work.",
        description: "A decentralized platform built on Ethereum using Foundry. It eliminates counterparty risk in freelance engagements by utilizing smart contracts to hold funds securely until mutually agreed milestones are met, ensuring fair and transparent compensation without reliance on traditional intermediaries.",
        link: "https://github.com/Suhaibkhanmn/Decentralized-Freelancer-Escrow-Platform",
        tags: ["Web3", "Solidity", "Foundry", "Smart Contracts"]
    }

];

export default function Projects() {
    return (
        <section className={styles.projectsSection} id="projects">
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>

                <div className={styles.projectGrid}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <ArrowUpRight className={styles.arrowIcon} size={24} />
                            </div>
                            <p className={styles.projectTagline}>{project.tagline}</p>

                            <p className={styles.projectDescription}>
                                {project.description}
                            </p>

                            <div className={styles.tags}>
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section >
    );
}
