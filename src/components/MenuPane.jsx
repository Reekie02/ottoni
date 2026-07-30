import MenuSectionPane from "./MenuSectionPane";
import menu from "../../public/menu.pdf"
import { ArrowDown, Download } from "lucide-react";
import { useLang } from "../i18n/LangContext";


export default function MenuPane({ tab, MENU, TAB_IDS }) {
    const { t } = useLang();
    const tabData = TAB_IDS.find(tb => tb.id === tab);

    if (tabData.columnGroups) {
        return (
            <div className="menu-body menu-body--two-col fade-enter">
                {tabData.columnGroups.map((group, gi) => (
                    <div key={gi} className="menu-col">
                        {group.map(sId => <MenuSectionPane MENU={MENU} key={sId} sId={sId} />)}
                    </div>
                ))}
                <a href="/menu.pdf"
                    className="menu-pdf-link"
                    download="Menu_Ottoni_Gastronomia.pdf"
                >
                    <ArrowDown size={45} className="menu-pdf-link-icon" />
                    <span className="menu-pdf-link-text">{t.menu.cta}</span>
                </a>
            </div>
        );
    }

    return (
        <div className="menu-body menu-body--single fade-enter">
            {tabData.sections.map(sId => <MenuSectionPane MENU={MENU} key={sId} sId={sId} />)}
        </div>
    );
}