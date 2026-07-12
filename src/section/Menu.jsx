import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import { MENU, TAB_IDS } from '../i18n/translations';
import MenuPane from '../components/MenuPane';
import '../style/menu.css'
import MenuPoster from '../components/MenuPoster';
import Reveal from '../components/Reveal';

export default function Menu() {

    const { t } = useLang();
    const [tab, setTab] = useState("primi");
    return (
        <section id="menu" className="menu">
            <Reveal>
                <div className="section-head">
                    <div className="eyebrow">{t.menu.eyebrow}</div>
                    <h2>{t.menu.title}</h2>
                </div>
            </Reveal>
            <MenuPoster />
            <Reveal>
                <div className="menu-divider">
                    <span className="divider-leaf"><span className="smallcaps">{t.menu.sfoglia}</span></span>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <div className="menu-tabs">
                    {TAB_IDS.map((tb, i) => (
                        <button
                            key={tb.id}
                            className={`menu-tab ${tab === tb.id ? "active" : ""}`}
                            onClick={() => setTab(tb.id)}
                        >
                            {t.menu.tabs[i]}
                        </button>
                    ))}
                </div>
            </Reveal>
            <MenuPane tab={tab} MENU={MENU} TAB_IDS={TAB_IDS} />
            {/* <div className="menu-note">{t.menu.note}</div> */}
        </section>
    );
}