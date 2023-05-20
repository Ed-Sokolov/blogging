import {UseSvg} from "../UseSvg/UseSvg"

export const Empty: React.FC = () => {
    return (
        <div className="empty">
            <UseSvg spriteName="cloud" className="cloud_icon"/>
            empty
        </div>
    )
}