import {UseSvg} from "../../../Elements/UseSvg/UseSvg";
import {SettingNavType} from "../../../Containers/SettingContainer/SettingContainer";

type SettingNavItemType = {
    settingNav: SettingNavType;
    item: SettingNavType;
    spriteName: string;
    changeSettingNav: (value: SettingNavType) => void;
}

export const SettingNavItem: React.FC<SettingNavItemType> = ({settingNav, item, spriteName, changeSettingNav}) => {
    return (
        <li>
            <div
                className={`setting_item ${settingNav === item && 'active'}`}
                onClick={() => changeSettingNav(item)}
            >
                <UseSvg spriteName={spriteName} className="icon"/>
                {item}
            </div>
        </li>
    )
}