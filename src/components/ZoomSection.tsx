import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ZoomSectionProps {
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}

const ZoomSection: React.FC<ZoomSectionProps> = ({ children, className = "", dark = false }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax / Zoom Scale Effect
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

    // Deep Black for Dark sections, Transparent/White for Light


    return (
        <div ref={ref} style={{ padding: '20px 20px' }}>
            <motion.div
                style={{
                    scale,
                    opacity,
                    borderRadius: '40px',
                    overflow: 'hidden',
                    boxShadow: dark ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
                    minHeight: '400px',
                    backgroundColor: dark ? '#000000' : 'transparent',
                    color: dark ? '#FFFFFF' : 'inherit'
                }}
                className={`${className}`}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ZoomSection;
