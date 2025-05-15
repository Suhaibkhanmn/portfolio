import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Github, Mail, Linkedin, Terminal, Code, Briefcase, User, FileText } from 'lucide-react';

function App() {
  const [scanlineEffect, setScanlineEffect] = useState(true);
  const [glowEffect, setGlowEffect] = useState(true);
  const [flickerEffect, setFlickerEffect] = useState(true);

  useEffect(() => {
    document.title = "Suhaib Khan | Portfolio";
  }, []);

  return (
    <div className={`min-h-screen bg-black text-green-500 font-mono relative ${flickerEffect ? 'animate-flicker' : ''}`}>
      {/* CRT Scanlines */}
      {scanlineEffect && (
        <div className="scanlines"></div>
      )}

      {/* Vignette effect */}
      <div className="vignette"></div>

      <div className={`container mx-auto px-4 py-12 relative z-10 ${glowEffect ? 'text-glow' : ''}`}>
        <header className="mb-12 border-b border-green-500 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="terminal-header flex items-center">
              <Terminal className="mr-2" />
              <h1 className="text-xl md:text-2xl font-bold">suhaib@portfolio:~$</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setScanlineEffect(!scanlineEffect)}
                className="px-2 py-1 border border-green-500 hover:bg-green-900 transition-colors"
              >
                Scanlines
              </button>
              <button
                onClick={() => setGlowEffect(!glowEffect)}
                className="px-2 py-1 border border-green-500 hover:bg-green-900 transition-colors"
              >
                Glow
              </button>
              <button
                onClick={() => setFlickerEffect(!flickerEffect)}
                className="px-2 py-1 border border-green-500 hover:bg-green-900 transition-colors"
              >
                Flicker
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="mb-16">
            <div className="terminal-prompt mb-4">
              <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white">whoami</span>
            </div>
            <div className="pl-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <Typewriter
                  options={{
                    strings: ['Suhaib Khan', 'Frontend Developer', 'Blockchain Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </h2>
              <p className="text-lg mb-6">
                I'm a passionate developer specializing in blockchain technology, frontend development, and aspiring ml engineer.
                Building secure smart contracts and creating modern web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Suhaibkhanmn" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github className="inline mr-1" size={18} /> GitHub
                </a>
                <a href="mailto:contact@example.com" className="social-link">
                  <Mail className="inline mr-1" size={18} /> Email
                </a>
                <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin className="inline mr-1" size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="terminal-prompt mb-4">
              <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white">ls -la ./skills</span>
            </div>
            <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="skill-card">
                <h3 className="text-xl font-bold mb-2">Blockchain Development</h3>
                <ul className="list-disc list-inside">
                  <li>Solidity</li>
                  <li>Smart Contracts</li>
                  <li>Web3.js/Ethers.js</li>
                  <li>DApp Development</li>
                  <li>Token Standards</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <ul className="list-disc list-inside">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Web3 Integration</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="terminal-prompt mb-4">
              <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white">cat ./projects.json</span>
            </div>
            <div className="pl-4">
              <div className="project-card">
                <h3 className="text-xl font-bold mb-2">Decentralized Freelancer Escrow Platform</h3>
                <p className="mb-2">Developed a full-stack DApp ensuring secure transactions using conditional smart contracts. Integrated MetaMask for authentication and Node.js/Express.js for backend services.</p>
                <p className="text-sm text-green-300 mb-2">Solidity, Foundry, React.js, Next.js, Express.js, MetaMask</p>
              </div>
              <div className="project-card mt-8">
                <h3 className="text-xl font-bold mb-2">NFT Ticketing System</h3>
                <p className="mb-2">Built a blockchain-based ticketing platform using ERC-721 NFTs. Designed smart contracts for ticket minting/transfer and integrated MetaMask for user interactions.</p>
                <p className="text-sm text-green-300 mb-2">Solidity, Foundry, Express.js, React.js, Next.js, MetaMask</p>
              </div>
              <div className="project-card mt-8">
                <h3 className="text-xl font-bold mb-2">DAO Based Governance System</h3>
                <p className="mb-2">Created a decentralized governance model supporting token-based on-chain voting. Enabled users to create, vote, and track proposals securely.</p>
                <p className="text-sm text-green-300 mb-2"> Solidity, Foundry, React.js, Next.js, ethers.js</p>
              </div>
              <div className="project-card mt-8">
                <h3 className="text-xl font-bold mb-2">Customer Complaint Response Generator</h3>
                <p className="mb-2">Automated customer complaint responses using Knowledge Base Embeddings and fine-tuned LLMs, reducing response times by 40% and improving accuracy by 20%.</p>
                <p className="text-sm text-green-300 mb-2">Deep Learning, Machine Learning, Data Science, RAG, Langchain</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="terminal-prompt mb-4">
              <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white">cat ./achievements.txt</span>
            </div>
            <div className="pl-4">
              <div className="project-card">
                <h3 className="text-xl font-bold mb-2">🏆 National Hackathon Champion</h3>
                <p className="mb-2">Won 3 national-level hackathons focused on Sustainable Development Goals (SDGs), demonstrating innovative problem-solving and social impact solutions.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="terminal-prompt mb-4">
              <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white">contact --send</span>
            </div>
            <div className="pl-4">
              <p className="mb-4">Feel free to reach out!</p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="mailto:contact@example.com" className="contact-button">
                  <Mail className="inline mr-2" /> Email Me
                </a>
                <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="contact-button">
                  <Linkedin className="inline mr-2" /> Connect on LinkedIn
                </a>
                <a href="https://github.com/Suhaibkhanmn" target="_blank" rel="noopener noreferrer" className="contact-button">
                  <Github className="inline mr-2" /> GitHub
                </a>
                <a href="/resume.pdf" target="_blank" className="contact-button">
                  <FileText className="inline mr-2" /> Download Resume
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-green-500 text-center">
          <p>© {new Date().getFullYear()} Suhaib Khan. All rights reserved.</p>
          <div className="terminal-prompt mt-4 inline-block">
            <span className="text-green-300">suhaib@portfolio:~$</span> <span className="text-white blink">_</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;