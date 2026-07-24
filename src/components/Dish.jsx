import { useLang } from "../i18n/LangContext";
import veg from "../assets/vegan.PNG"

export default function Dish({ d }) {
    const { t } = useLang();
    return (
        <div className="dish">
            <div>
                <div className="flex items-start gap-4">
                    <span className="dish-name">{d.name}</span>
                    {d.tag && <img alt="vegan" className="inline w-6 lg:mt-1" src={veg} />}
                </div>
                <div className="dish-desc">
                    <span className="dish-desc-inner">{t.menuDescs[d.descKey]}</span>
                </div>
            </div>
            <div className="dish-price">{d.price}</div>
        </div>
    );
}