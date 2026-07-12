import { useLang } from "../i18n/LangContext";
import '../style/announce.css';

export default function Announce() {
    const { t } = useLang();
    const repeat = [...t.announce, ...t.announce, ...t.announce, ...t.announce];
    return (
        <div className="announce">
            <div className="announce-track">
                {repeat.map((item, i) => (
                    <span key={i}>{item}<span className="dot">✦</span></span>
                ))}
            </div>
        </div>
    );
}