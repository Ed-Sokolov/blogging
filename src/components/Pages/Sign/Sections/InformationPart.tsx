import {ReactElement} from "react";
import {SignPageType} from "../../../Containers/SignContainer/SignContainer";
import {UseSvg} from "../../../Elements/UseSvg/UseSvg";

type InformationPartType = {
    className: string;
    phrase: string;
    moveName: string;
    moveTo: SignPageType;
    svgTitle: string;
    changePage: (value: SignPageType) => void;
    children?: ReactElement | false;
}

export const InformationPart: React.FC<InformationPartType> = ({
                                                                   className,
                                                                   phrase,
                                                                   moveName,
                                                                   moveTo,
                                                                   svgTitle,
                                                                   changePage,
                                                                   children = false
                                                               }) => {
    return (
        <div className={className}>
            <div className="page_blur_background"></div>
            <div className="second_page_content">
                <div className="title">
                    welcome!
                </div>
                <div className="phrase_field">
                    {phrase}
                    {children && children}
                </div>
                <div className="move_to bottom_hover" onClick={() => changePage(moveTo)}>
                    {moveTo === "/sign-up" && moveName}
                    <UseSvg spriteName="arrow_circle_right" className="arrow_icon" title={svgTitle}/>
                    {moveTo === "/sign-in" && moveName}
                </div>
            </div>
        </div>
    )
}