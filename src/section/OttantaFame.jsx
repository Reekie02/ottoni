import { useLang } from "../i18n/LangContext";
import '../style/ottantaFame.css'

export default function OttantaFame() {
    const { t } = useLang();
    const Star = () => (
        <svg className="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" /></svg>
    );
    return (
        <section className="band" aria-label="OttantaFame">
            <div className="band-marquee">
                {Array.from({ length: 6 }).map((_, i) => (
                    <span className="band-item" key={i}>
                        <span><span className="hash">#</span>OttantaFame</span>
                        <Star />
                    </span>
                ))}
            </div>
            <div className="band-meta">
                {t.band.pre} <strong>{t.band.amount}</strong> {t.band.mid} <strong>{t.band.big}</strong>
            </div>
        </section>
    );
}