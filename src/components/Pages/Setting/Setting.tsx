import {ReactElement} from "react";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {prevPage} from "../../Router/Functions";
import {UserType} from "../../Types/user";
import {About} from "./SettingContent/About";
import {Avatar} from "./SettingContent/Avatar";
import {Setups} from "./SettingContent/Setups";
import {SettingNavItem} from "./SettingNav/SettingNavItem";
import * as Yup from "yup";
import {AboutDataType, AvatarType, SettingNavType} from "../../Containers/SettingContainer/SettingContainer";
import {useNavigate} from "react-router-dom";

type SettingProps = UserType & {
    handleRemovePhoto: (id: number) => void;
    loading: boolean;
    validationSchemaForAbout: Yup.Schema;
    validationSchemaForAvatar: Yup.Schema;
    initialValuesForAbout: AboutDataType;
    initialValueForAvatar: AvatarType;
    handleChangePhoto: (values, action) => void;
    handleChangeBio: (values, action) => void;
    handleRemoveUser: (id: number) => void;
    changeSettingNav: (item: SettingNavType) => void;
    settingNav: SettingNavType;
};

export const Setting: React.FC<SettingProps> = ({
                                                    id,
                                                    photo,
                                                    handleRemovePhoto,
                                                    loading,
                                                    validationSchemaForAbout,
                                                    validationSchemaForAvatar,
                                                    initialValuesForAbout,
                                                    initialValueForAvatar,
                                                    handleChangePhoto,
                                                    handleChangeBio,
                                                    handleRemoveUser,
                                                    changeSettingNav,
                                                    settingNav
                                                }) => {
    const navigate = useNavigate();

    const contents: { [key in SettingNavType]: ReactElement } = {
        'avatar': <Avatar photo={photo} handleRemovePhoto={handleRemovePhoto} loading={loading}
                          validationSchemaForAvatar={validationSchemaForAvatar} userId={id}
                          initialValueForAvatar={initialValueForAvatar} handleChangePhoto={handleChangePhoto}/>,
        'about you': <About loading={loading} handleChangeBio={handleChangeBio}
                            validationSchemaForAbout={validationSchemaForAbout}
                            initialValuesForAbout={initialValuesForAbout}/>,
        'setups': <Setups loading={loading} handleRemoveUser={handleRemoveUser} userId={id}/>
    }

    return (
        <div className="setting_page">
            <div className="container">
                <div className="setting_nav">
                    <div className="blur"></div>
                    <div className="setting_nav_title">settings</div>
                    <ul>
                        <SettingNavItem settingNav={settingNav} item="avatar" spriteName="camera"
                                        changeSettingNav={changeSettingNav}/>
                        <SettingNavItem settingNav={settingNav} item="about you" spriteName="user_edit"
                                        changeSettingNav={changeSettingNav}/>
                        <SettingNavItem settingNav={settingNav} item="setups" spriteName="settings"
                                        changeSettingNav={changeSettingNav}/>
                    </ul>
                    <div className="cancel">
                        <div className="control" onClick={() => prevPage(navigate)}>
                            <UseSvg spriteName="close" className="icon" title="close this page"/>
                        </div>
                    </div>
                </div>
                <div className="setting_content">
                    {contents[settingNav]}
                </div>
            </div>
        </div>
    )
}