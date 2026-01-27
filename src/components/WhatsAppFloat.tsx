'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/918143483438"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 group cursor-pointer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm border border-slate-100 pointer-events-none">
                Chat with us
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </a>
    );
};

export default WhatsAppFloat;
