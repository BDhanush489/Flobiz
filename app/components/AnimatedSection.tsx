'use client';

import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

type AnimationType = 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    type?: AnimationType;
    once?: boolean;
    threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.6,
    type = 'fade-up',
    once = true,
    threshold = 0.2,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold } as UseInViewOptions);

    const getVariants = () => {
        switch (type) {
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case 'scale-up':
                return {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                };
            case 'slide-left':
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'slide-right':
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'fade-up':
            default:
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={getVariants()}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
