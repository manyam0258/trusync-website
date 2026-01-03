"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error";

interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export function Toast({
    message,
    type = "success",
    isVisible,
    onClose,
    duration = 5000,
}: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-2xl border border-slate-100 max-w-sm"
                    role="alert"
                >
                    <div className={`shrink-0 ${type === "success" ? "text-green-500" : "text-red-500"}`}>
                        {type === "success" ? (
                            <CheckCircle className="w-6 h-6" />
                        ) : (
                            <XCircle className="w-6 h-6" />
                        )}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="shrink-0 p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
