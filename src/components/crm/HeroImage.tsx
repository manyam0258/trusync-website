'use client';

import React from 'react';

export default function HeroImage() {
    return (
        <div className="relative max-w-6xl mx-auto mt-12 rounded-xl shadow-2xl border border-slate-200 overflow-hidden bg-white">
            {/* 
                USER INSTRUCTION: 
                Please place your dashboard image at: public/assets/crm/hero-dashboard.png
                If the image is not found, the alt text will be displayed.
                Recommended size: 1200x800px or similar aspect ratio.
            */}
            <img
                src="/assets/crm/hero-dashboard.png"
                alt="Frappe CRM Dashboard - Please place image at public/assets/crm/hero-dashboard.png"
                className="w-full h-auto object-cover"
                onError={(e) => {
                    // Fallback if image isn't found - keep the space but show alt text
                    e.currentTarget.style.display = 'block';
                }}
            />
        </div>
    );
}
