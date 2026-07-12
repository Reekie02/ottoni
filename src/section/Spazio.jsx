import Reveal from "../components/Reveal";
import { useLang } from "../i18n/LangContext";
import "../style/spazio.css";

export default function Spazio() {

    const { t } = useLang();

    const TILE_IMGS = [
        { cls: "tile-a", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&fit=crop" },
        { cls: "tile-b", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&auto=format&fit=crop" },
        { cls: "tile-c", img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&auto=format&fit=crop" },
        { cls: "tile-d", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&auto=format&fit=crop" },
        { cls: "tile-e", img: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=900&auto=format&fit=crop" },
        { cls: "tile-f", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&auto=format&fit=crop" },
    ];

    return (
        <section id="spazio" className="spazio">
            <Reveal>
                <div className="section-head">
                    <div className="eyebrow">{t.spazio.eyebrow}</div>
                    <h2>{t.spazio.title}</h2>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <div className="gallery">
                    {TILE_IMGS.map((tile, i) => (
                        <div className={`tile ${tile.cls}`} key={i}>
                            <div className="tile-img" style={{ backgroundImage: `url(${tile.img})` }} />
                            <div className="tile-label">{t.spazio.tiles[i]}</div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}