'use client';

import React from 'react';

interface CRMImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function CRMImage({ src, alt, className }: CRMImageProps) {
    return (
        <div className={`relative bg-slate-100 rounded-xl overflow-hidden ${className}`}>
            {/* 
                USER INSTRUCTION: 
                Please place your image at: public{src}
                If the image is not found, the alt text will be displayed.
            */}
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    // Fallback if image isn't found - keep the space but show alt text
                    e.currentTarget.style.display = 'block';
                    // Optional: You could add a visible placeholder style here
                    e.currentTarget.style.padding = '20px';
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.textAlign = 'center';
                }}
            />
        </div>
    );
}
