import React from "react";
import { useLang } from "../i18n/LangContext";
import Reveal from "../components/Reveal";
import MapIllustration from "../components/MapIllustration";
import "../style/visita.css";

export default function Visita() {
    const { t } = useLang();
    const today = new Date().getDay();
    const HOURS_DATA = [
        { time: "12:00 — 21:30", idx: 0 },
        { time: "12:00 — 21:30", idx: 2 },
        { time: "12:00 — 21:30", idx: 3 },
        { time: "12:00 — 21:30", idx: 4 },
        { time: "12:00 — 21:30", idx: 5 },
        { time: "12:00 — 17:00", idx: 6 },
        { time: t.visita.chiuso, closed: true, idx: 0 },
    ];
    return (
        <section id="visita" className="visita">
            <div className="visita-grid">
                <Reveal>
                    <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>{t.visita.eyebrow}</div>
                    <h2>{t.visita.title}</h2>
                    <p className="visita-sub">{t.visita.sub}</p>

                    <div className="visita-block">
                        <div className="visita-label">{t.visita.indirizzo}</div>
                        <div className="visita-value">Via Cernaia 3, Torino<small>10121, vicino Porta Susa</small></div>
                    </div>
                    <div className="visita-block">
                        <div className="visita-label">{t.visita.contatti}</div>
                        <div className="visita-value">+39 011 555 0180<small>info@ottoni-gastronomia.it</small></div>
                    </div>
                    <div className="visita-block">
                        <div className="visita-label">{t.visita.orari}</div>
                        <div className="hours" style={{ marginTop: 8 }}>
                            {HOURS_DATA.map((h, i) => (
                                <React.Fragment key={h.idx}>
                                    <span className={`day ${h.idx === today ? "today" : ""}`}>{t.visita.days[i]}</span>
                                    <span className={`time ${h.idx === today ? "today" : ""} ${h.closed ? "closed" : ""}`}>{h.time}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>


                </Reveal>

                <Reveal delay={150}>
                    <div className="map-card">
                        <MapIllustration />
                        <div className="map-marker">
                            <div className="pulse" />
                            <div className="pin" />
                        </div>
                        <div className="map-overlay">
                            <small>{t.visita.siamo}</small>
                            Via Cernaia 3 — Torino
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}