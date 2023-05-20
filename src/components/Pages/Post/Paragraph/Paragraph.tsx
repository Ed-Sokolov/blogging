import {UseSvg} from "../../../Elements/UseSvg/UseSvg";

type ParagraphPropsType = {
    newText: string
}

export const Paragraph: React.FC<ParagraphPropsType> = ({newText}) => {
    return (
        <li>
            <div className="line">
                <UseSvg spriteName="left-line" className="left-line"/>
            </div>
            <p>{newText}</p>
            <div className="line">
                <UseSvg spriteName="right-line" className="right-line"/>
            </div>
        </li>
    )
}