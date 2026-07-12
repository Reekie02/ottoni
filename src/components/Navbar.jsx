import { useEffect, useState } from "react";

import LangSwitcher from "./LangSwitcher";
import SaxMark from "./SaxMark";
import { useLang } from "../i18n/LangContext";
import logo from "../assets/LOGO.png";

import "../style/navbar.css";

export default function Navbar() {
    const { t } = useLang();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={`nav with-announce ${scrolled ? "scrolled" : ""}`}>
            <a href="#top" className="nav-brand">
                {/* <SaxMark className="sax-mark" />
                <span className="smallcaps" style={{ fontSize: 18, letterSpacing: "0.18em" }}>Ottoni</span> */}
                <img src={logo} alt="Logo Ottoni" className="w-28 h-auto relative -left-5" />
            </a>
            <div className="nav-links">
                <a href="#filosofia">{t.nav.filosofia}</a>
                <a href="#menu">{t.nav.menu}</a>
                <a href="#spazio">{t.nav.spazio}</a>
                <a href="#visita">{t.nav.visita}</a>
            </div>
            <LangSwitcher />
            <button className="nav-cta" onClick={() => document.getElementById("visita")?.scrollIntoView({ behavior: "smooth" })}>
                {t.nav.prenota}
            </button>
        </nav>
    );
}