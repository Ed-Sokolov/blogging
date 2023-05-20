import {UseSvg} from "../UseSvg/UseSvg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="copyright_field">
                    <p>Copyright © <time dateTime="2023">2023</time> Sokolov Eduard</p>
                    <address>
                        <UseSvg spriteName="location_icon" className="location_icon"/>
                        Ukraine
                    </address>
                </div>
            </div>
        </footer>
    )
}