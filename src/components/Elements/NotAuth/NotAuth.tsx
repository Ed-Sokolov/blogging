import {NavLink} from "react-router-dom"
import {UseSvg} from "../UseSvg/UseSvg"

export const NotAuth: React.FC = () => {
    return (
        <div className="not_auth">
            <div className="title">You’re a guest, so you can’t leave a comment!</div>
            <div className="links">
                <ul>
                    <li><NavLink to="/sign-in" className="bottom_hover">sign in</NavLink></li>
                    <li>
                        <UseSvg spriteName="dividing_line" className="dividing_line"/>
                    </li>
                    <li><NavLink to="/sign-up" className="bottom_hover">sign up</NavLink></li>
                </ul>
            </div>
        </div>
    )
}