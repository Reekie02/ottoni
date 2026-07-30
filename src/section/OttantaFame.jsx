import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LangContext";
import '../style/ottantaFame.css'

export default function OttantaFame() {
    const { t } = useLang();
    const contentRef = useRef(null);
    // useEffect(() => {
    //     const el = contentRef.current;
    //     if (!el) return;
    //     const pxPerSecond = 15000;
    //     const distance = el.scrollWidth; // -50% = metà del contenuto totale
    //     const duration = distance / pxPerSecond;
    //     el.style.animationDuration = `${duration}s`;
    //     console.log(distance);
    // }, []);

    const Star = () => (
        <svg className="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" /></svg>
    );
    return (
        <section className="band" aria-label="OttantaFame">
            <div className="band-marquee" ref={contentRef}>
                {/* {Array.from({ length: 6 }).map((_, i) => ( */}
                <span className="band-item" >

                    <span className="text-center">{t.band.desc1}<br /> <span className="text-gold-soft">{t.band.desc2}</span></span>

                </span>
                {/* ))} */}
            </div>
        </section>
    );
}