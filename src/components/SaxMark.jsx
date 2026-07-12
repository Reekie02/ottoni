import React from 'react'

export default function SaxMark({ className }) {
    return (
        <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M28 8 L36 8 L36 14 L32 18 L32 30 C32 38 28 42 22 44 C16 46 12 50 14 56 C16 62 26 60 32 56 C40 50 44 42 44 32" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="36" cy="28" r="1.2" fill="currentColor" />
            <circle cx="38" cy="34" r="1.2" fill="currentColor" />
            <circle cx="40" cy="40" r="1.2" fill="currentColor" />
            <circle cx="40" cy="46" r="1.2" fill="currentColor" />
            <path d="M44 32 C46 32 48 30 48 28" strokeLinecap="round" />
        </svg>
    );
}