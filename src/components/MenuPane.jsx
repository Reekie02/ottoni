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
                        {/* {tabData.id === "primi" && <p className="absolute -top-12 md:w-[50%] left-10 uppercase bg-moss rounded-tr-2xl p-2 pl-6 text-paper font-bold shadow-[3px_4px_5px_0px] shadow-gold">{t.menu.note1}</p>} */}
                        {tabData.id === "primi" &&
                            <>
                                <p className="ottantafame">
                                    {t.menu.note1}
                                    <span className="slogan"> #OTTANTAFAME</span>
                                </p>
                                <p className="maxi">{t.menu?.maxi}</p>
                            </>
                        }
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