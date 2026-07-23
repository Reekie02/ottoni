import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LangContext";
import HeroSax from "../components/HeroSax";
import Wordmark from "../components/WordMark";
import "../style/hero.css";

export default function Hero() {
    const { t } = useLang();
    const ref = useRef(null);
    useEffect(() => {
        const onMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 14;
            const y = (e.clientY / window.innerHeight - 0.5) * 14;
            if (ref.current) ref.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
    return (
        <header className="hero" id="top">
            <div className="absolute top-1/5 md:top-[15%] w-full md:w-[50%]">
                <HeroSax />
            </div>
            <div className="eyebrow hero-eyebrow">{t.hero.eyebrow}</div>
            <Wordmark />
            <div className="hero-sub divider-leaf"><span className="smallcaps">{t.hero.sub}</span></div>
            <p className="hero-tagline">
                {t.hero.tagline1}<br />{t.hero.tagline2} <em style={{ fontFamily: "var(--serif)" }}>{t.hero.tagline3}</em>
            </p>
            <div className="hero-meta">
                <span>{t.hero.meta[0]}</span>
                <span className="dot">●</span>
                <span>{t.hero.meta[1]}</span>
                <span className="dot">●</span>
                <span>{t.hero.meta[2]}</span>
            </div>
            <div className="scroll-cue">
                <span>{t.hero.scorri}</span>
                <span className="line" />
            </div>
        </header>
    );
}