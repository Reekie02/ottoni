import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";
import { LANG_LABELS, LANGS } from "../i18n/translations";

export function LangDropdown() {
    const { lang, setLang } = useLang();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="lang-dropdown" ref={ref}>
            <button className="lang-dropdown-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
                {LANG_LABELS[lang]}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" className={open ? "rotated" : ""}>
                    <path d="M2 3.5 L5 6.5 L8 3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {open && (
                <div className="lang-dropdown-menu">
                    {LANGS.map(l => (
                        <button
                            key={l}
                            className={`lang-dropdown-item ${lang === l ? "active" : ""}`}
                            onClick={() => { setLang(l); setOpen(false); }}
                        >
                            {LANG_LABELS[l]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function LangSwitcher() {
    const { lang, setLang } = useLang();
    return (
        <div className="lang-switcher">
            <div className="lang-btns">
                {LANGS.map(l => (
                    <button
                        key={l}
                        className={`lang-btn ${lang === l ? 'active' : ''}`}
                        onClick={() => setLang(l)}
                        aria-label={`Switch to ${LANG_LABELS[l]}`}
                    >
                        {LANG_LABELS[l]}
                    </button>
                ))}
            </div>
            <div className="lang-dropdown-wrap">
                <LangDropdown />
            </div>
        </div>
    );
}