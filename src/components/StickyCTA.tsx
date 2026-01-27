'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 bg-white border-t border-slate-200 shadow-2xl lg:hidden"
                >
                    <div className="container mx-auto flex items-center justify-between gap-4">
                        <div className="text-sm font-medium text-slate-800 hidden sm:block">
                            Ready to modernize your business?
                        </div>
                        <Link
                            href="#contact"
                            className="flex-1 sm:flex-none bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            Book Free Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
