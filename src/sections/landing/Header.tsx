import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 70) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setScrolled(currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${!isVisible ? 'header-hidden' : ''}`}>
            <div className="container header-container">
                <div className="logo">JobConnect</div>

                <nav className="desktop-nav">
                    <a href="#">Find Jobs</a>
                    <a href="#">Companies</a>
                    <a href="#">For Employers</a>
                    <a href="#">Resources</a>
                </nav>

                <div className="header-actions">
                    <button className="login-btn">Log In</button>
                    <button className="signup-btn">Sign Up</button>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu glass-panel">
                    <nav>
                        <a href="#">Find Jobs</a>
                        <a href="#">Companies</a>
                        <a href="#">For Employers</a>
                        <a href="#">Resources</a>
                        <div className="mobile-actions">
                            <button className="login-btn">Log In</button>
                            <button className="signup-btn">Sign Up</button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
