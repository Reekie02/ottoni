import MenuSectionPane from "./MenuSectionPane";

export default function MenuPane({ tab, MENU, TAB_IDS }) {
    const tabData = TAB_IDS.find(tb => tb.id === tab);

    if (tabData.columnGroups) {
        return (
            <div className="menu-body menu-body--two-col fade-enter">
                {tabData.columnGroups.map((group, gi) => (
                    <div key={gi} className="menu-col">
                        {group.map(sId => <MenuSectionPane MENU={MENU} key={sId} sId={sId} />)}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="menu-body menu-body--single fade-enter">
            {tabData.sections.map(sId => <MenuSectionPane MENU={MENU} key={sId} sId={sId} />)}
        </div>
    );
}