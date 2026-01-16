import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Product Designer',
        quote: 'JobConnect helped me find my dream role at a top tech company in under 2 weeks. The interface is simply beautiful.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    },
    {
        name: 'David Chen',
        role: 'Senior Developer',
        quote: 'The AI matching is incredibly accurate. I stopped wasting time on irrelevant listings.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Marketing Lead',
        quote: 'Premium feel, premium results. Highly recommend for anyone serious about their career.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">Trusted by Professionals.</h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Quote className="quote-icon" size={24} />
                            <p className="quote-text">"{t.quote}"</p>
                            <div className="testimonial-footer">
                                <img src={t.avatar} alt={t.name} className="avatar" />
                                <div className="user-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
