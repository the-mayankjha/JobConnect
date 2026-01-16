import React, { useState, useEffect } from 'react';
import {
    Menu, X, ChevronDown,
    Code, TrendingUp, Headphones, PenTool, Scale, Rocket,
    Building2, Zap, Briefcase, Globe,
    BookOpen, Users, FileText
} from 'lucide-react';
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

                    {/* Jobs Dropdown */}
                    <div className="nav-item">
                        <button className="nav-link">Jobs <ChevronDown size={14} /></button>
                        <div className="dropdown-menu">
                            <div className="dropdown-title">Job Categories</div>
                            <a href="#" className="dropdown-item"><Code size={18} /> Development & IT</a>
                            <a href="#" className="dropdown-item"><TrendingUp size={18} /> Marketing & Sales</a>
                            <a href="#" className="dropdown-item"><Headphones size={18} /> Customer Service</a>
                            <a href="#" className="dropdown-item"><PenTool size={18} /> Design & Creative</a>
                            <a href="#" className="dropdown-item"><Scale size={18} /> Legal & Finance</a>
                            <a href="#" className="dropdown-item"><Rocket size={18} /> Product Management</a>
                        </div>
                    </div>

                    {/* Companies Dropdown */}
                    <div className="nav-item">
                        <button className="nav-link">Companies <ChevronDown size={14} /></button>
                        <div className="dropdown-menu">
                            <div className="dropdown-title">Company Categories</div>
                            <a href="#" className="dropdown-item"><Building2 size={18} /> Tech Companies</a>
                            <a href="#" className="dropdown-item"><Zap size={18} /> Startups</a>
                            <a href="#" className="dropdown-item"><Briefcase size={18} /> Enterprise</a>
                            <a href="#" className="dropdown-item"><Globe size={18} /> Remote-First</a>
                        </div>
                    </div>

                    {/* About Us Dropdown */}
                    <div className="nav-item">
                        <button className="nav-link">About Us <ChevronDown size={14} /></button>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item"><BookOpen size={18} /> Our Story</a>
                            <a href="#" className="dropdown-item"><Users size={18} /> Team</a>
                            <a href="#" className="dropdown-item"><FileText size={18} /> Blog</a>
                        </div>
                    </div>

                    <a href="#" className="nav-link">Career</a>
                    <a href="#" className="nav-link">Contact Us</a>
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
                        <a href="#">Jobs</a>
                        <a href="#">Companies</a>
                        <a href="#">About Us</a>
                        <a href="#">Career</a>
                        <a href="#">Contact Us</a>
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
