import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, BarChart, DollarSign, Users, Cpu, ArrowRight } from 'lucide-react';
import './JobCategories.css';

const categories = [
    { icon: <Code />, name: 'Development', jobs: '120+ Jobs' },
    { icon: <PenTool />, name: 'Design', jobs: '85+ Jobs' },
    { icon: <BarChart />, name: 'Marketing', jobs: '40+ Jobs' },
    { icon: <DollarSign />, name: 'Finance', jobs: '25+ Jobs' },
    { icon: <Users />, name: 'Management', jobs: '30+ Jobs' },
    { icon: <Cpu />, name: 'Engineering', jobs: '90+ Jobs' },
];

const JobCategories: React.FC = () => {
    return (
        <section className="categories-section section-padding">
            <div className="container">
                <div className="section-header-row">
                    <h2 className="section-title">Explore by Category</h2>
                    <button className="view-all-btn">
                        View All <ArrowRight size={16} />
                    </button>
                </div>

                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="category-card glass-panel"
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        >
                            <div className="cat-icon">{cat.icon}</div>
                            <div className="cat-info">
                                <h3>{cat.name}</h3>
                                <span>{cat.jobs}</span>
                            </div>
                            <div className="cat-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobCategories;
