import {NavLink} from "react-router-dom";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {UserType} from "../../Types/user";

type ProfileTypeProps = {
    user: UserType | null;
    authId: number | null;
}

export const Profile: React.FC<ProfileTypeProps> = ({user, authId}) => {
    return (
        <div className="profile_page">
            <div className="container">
                <div className="promo">
                    <div className="user_photo">
                        <div className="background">
                            <div className="first_layout"></div>
                            <div className="second_layout"></div>
                        </div>
                        <div className="photo">
                            {user?.photo ?
                                <img src={user?.photo} alt="user photo"/> :
                                <UseSvg spriteName="user_icon_default" className="user_icon_default"
                                        title="default icon"/>
                            }
                        </div>
                    </div>
                    <div className="user_information">
                        <div className="user_nickname">{user?.nickname}</div>
                        {user?.name && <div className="user_name">{user.name}</div>}
                        {user?.information &&
                            <div className="about_user">
                                <div className="about_user_title">
                                    about me
                                    <UseSvg spriteName="lines" className="lines"/>
                                </div>
                                <div className="about_user_text">{user.information}</div>
                            </div>
                        }
                        {authId === user?.id &&
                            <div className="settings">
                                <NavLink to="/profile/setting" className="bottom_hover">
                                    <UseSvg spriteName="settings" className="settings_icon"
                                            title="move to setting page"/>
                                    settings
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}