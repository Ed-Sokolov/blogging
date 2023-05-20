import {NavLink} from "react-router-dom";
import {UseSvg} from "../UseSvg/UseSvg";

type MainPartProps = {
    isAuth?: boolean;
    userId?: number | null;
    userPhoto?: string | null;
    handleLogout?: () => void
}

export const MainPart: React.FC<MainPartProps> = ({ isAuth = false, userId = null, userPhoto = null, handleLogout }) => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" className="bottom_hover">main</NavLink></li>
                    <li><NavLink to="/posts" className="bottom_hover">posts</NavLink></li>
                </ul>
            </nav>
            <div className="sign">
                <ul>
                    <li>
                        {
                            !isAuth ? 
                                <NavLink to="/sign-in" className="bottom_hover">sign in</NavLink> :
                                <NavLink to={`/profile/${userId}`} className="bottom_hover">
                                    {userPhoto ? 
                                        <img src={userPhoto} alt="user photo" className="user_photo" /> :
                                        <UseSvg className="user_photo" spriteName="user_icon_default" title="move to your profile" />
                                    }
                                </NavLink>
                        }
                    </li>
                    <li>
                        <UseSvg spriteName="dividing_line" className="dividing_line" />
                    </li>
                    <li>
                        {
                            !isAuth ?
                                <NavLink to="/sign-up" className="bottom_hover">sign up</NavLink> :
                                <p onClick={handleLogout} className="bottom_hover">sign out</p>
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}