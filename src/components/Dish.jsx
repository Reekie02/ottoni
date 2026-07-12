import { useLang } from "../i18n/LangContext";

export default function Dish({ d }) {
    const { t } = useLang();
    return (
        <div className="dish">
            <div>
                <span className="dish-name">{d.name}</span>
                {d.tag && <span className="dish-tag">{d.tag}</span>}
                <div className="dish-desc">
                    <span className="dish-desc-inner">{t.menuDescs[d.descKey]}</span>
                </div>
            </div>
            <div className="dish-price">{d.price}</div>
        </div>
    );
}