import React, { useEffect } from 'react';
import Header from '../sections/landing/Header';
import Hero from '../sections/landing/Hero';
import Features from '../sections/landing/Features';
import JobCategories from '../sections/landing/JobCategories';
import Testimonials from '../sections/landing/Testimonials';
import Footer from '../sections/landing/Footer';
import ZoomSection from '../components/ZoomSection';

const Landing: React.FC = () => {
    useEffect(() => {
        // Add smooth scroll behavior to html
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="landing-page">
            <Header />
            <main style={{ paddingTop: '64px' }}> {/* Add padding since Header is fixed */}
                <ZoomSection dark={true} className="hero-wrapper">
                    <Hero />
                </ZoomSection>

                <Features />

                <ZoomSection dark={true} className="categories-wrapper">
                    <JobCategories />
                </ZoomSection>

                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
