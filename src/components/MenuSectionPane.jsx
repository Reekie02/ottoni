import { useLang } from "../i18n/LangContext";
import Dish from "./Dish";

export default function MenuSectionPane({ sId, MENU }) {
    const { t } = useLang();
    const s = MENU[sId];
    const meta = t.menu.sections[sId];
    return (
        <div className="menu-pane">
            <h3 className="menu-section-title">{meta.title}</h3>
            <div className="menu-section-line" />
            {meta.note && <div style={{ textAlign: "center", fontStyle: "italic", color: "var(--muted)", fontSize: 14, marginBottom: 14 }}>{meta.note}</div>}
            {s.items.map((d, i) => <Dish key={i} d={d} />)}
        </div>
    );
}