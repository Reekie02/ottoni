import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import menu from "../assets/menu-ottoni.JPG";
import menu2 from "../assets/menu2.jpeg"
import Reveal from "./Reveal";
import { useLang } from "../i18n/LangContext";


export default function MenuPoster() {
    const { t } = useLang();
    const [zoom, setZoom] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || zoom) return;
        const onMove = (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `perspective(1400px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
        };
        const onLeave = () => { el.style.transform = ""; };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
    }, [zoom]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setZoom(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = zoom ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [zoom]);

    return (
        <React.Fragment>
            <Reveal delay={120}>
                <div className="menu-poster-wrap">
                    <div className="menu-poster" ref={ref} onClick={() => setZoom(true)}>
                        <img src={menu2} alt="Menu Ottoni Gastronomia" />
                        <div className="menu-poster-overlay">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5M11 8v6M8 11h6" strokeLinecap="round" /></svg>
                            <span>{t.menu.zoom}</span>
                        </div>
                    </div>
                    {/* <div className="menu-poster-caption">{t.menu.caption}</div> */}
                </div>
            </Reveal>
            {zoom && createPortal(
                <div className="lightbox" onClick={() => setZoom(false)}>
                    <button className="lightbox-close" onClick={() => setZoom(false)} aria-label="Chiudi">×</button>
                    <img src={menu2} alt="Menu Ottoni Gastronomia" onClick={(e) => e.stopPropagation()} />
                </div>,
                document.body
            )}
        </React.Fragment>
    );
}