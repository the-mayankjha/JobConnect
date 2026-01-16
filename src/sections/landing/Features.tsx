import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Shield, TrendingUp } from 'lucide-react';
import './Features.css';

const Features: React.FC = () => {
    return (
        <section className="features-section section-padding">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Engineered for Excellence.</h2>
                    <p className="section-subtitle">
                        Tools that empower your career journey with precision and speed.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Feature 1: AI Matching (Large) */}
                    <motion.div
                        className="bento-card card-large glass-panel"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-content">
                            <div className="icon-wrapper glow-blue">
                                <Zap size={24} />
                            </div>
                            <h3>AI-Powered Matching</h3>
                            <p>Our algorithm connects you with jobs that truly fit your skills and aspirations.</p>
                        </div>
                        <div className="card-visual visual-ai"></div>
                    </motion.div>

                    {/* Feature 2: Instant Apply (Small) */}
                    <motion.div
                        className="bento-card card-small glass-panel"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-content">
                            <div className="icon-wrapper glow-purple">
                                <Briefcase size={24} />
                            </div>
                            <h3>1-Click Apply</h3>
                            <p>Apply to multiple listings in seconds.</p>
                        </div>
                    </motion.div>

                    {/* Feature 3: Analytics (Small) */}
                    <motion.div
                        className="bento-card card-small glass-panel"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-content">
                            <div className="icon-wrapper glow-green">
                                <TrendingUp size={24} />
                            </div>
                            <h3>Live Analytics</h3>
                            <p>Track your application status in real-time.</p>
                        </div>
                    </motion.div>

                    {/* Feature 4: Verified (Wide) */}
                    <motion.div
                        className="bento-card card-wide glass-panel"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-content horizontal">
                            <div className="icon-wrapper glow-gold">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h3>Verified Companies</h3>
                                <p>We partner only with legitimate, high-growth organizations.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
