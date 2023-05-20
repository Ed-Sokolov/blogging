import { HashLink as Link } from 'react-router-hash-link';
import { UseSvg } from '../../../Elements/UseSvg/UseSvg';

export const MainSlider = () => {

    return (
        <div className="main_slider">
            <div className="container">
                <h1 className="title">welcome to blogging</h1>
                <Link to="#about_author" className="arrow" smooth >
                    <UseSvg spriteName="arrow_circle_down" className="arrow_circle_icon" title="move to about me" />
                </Link>
            </div>
        </div>
    )
}
