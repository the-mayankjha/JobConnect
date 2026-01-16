import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>JobConnect</h2>
                        <p>Connecting talent with opportunity in the digital age.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Platform</h4>
                            <a href="#">Browse Jobs</a>
                            <a href="#">Companies</a>
                            <a href="#">Pricing</a>
                        </div>
                        <div className="link-column">
                            <h4>Resources</h4>
                            <a href="#">Blog</a>
                            <a href="#">Help Center</a>
                            <a href="#">Guidelines</a>
                        </div>
                        <div className="link-column">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} JobConnect Inc. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
