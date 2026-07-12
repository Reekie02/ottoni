import { useLang } from "../i18n/LangContext";
import Reveal from "../components/Reveal";
import '../style/philosophy.css';

export default function Philosophy() {
    const { t } = useLang();
    return (
        <section id="filosofia">
            <div className="filosofia">
                <Reveal>
                    <div className="eyebrow" style={{ marginBottom: 18 }}>{t.filosofia.eyebrow}</div>
                    <div className="filosofia-quote">
                        {t.filosofia.quote[0]}<em>{t.filosofia.quote[1]}</em>{t.filosofia.quote[2]}
                    </div>
                </Reveal>
                <Reveal delay={150}>
                    <div className="filosofia-body">
                        <p>{t.filosofia.p1}</p>
                        <p>{t.filosofia.p2}</p>
                        <div className="filosofia-sig">{t.filosofia.sig}</div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}