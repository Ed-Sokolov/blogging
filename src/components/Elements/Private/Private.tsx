import {UseSvg} from "../UseSvg/UseSvg"

type PrivateProps = {
    message?: string;
}
export const Private: React.FC<PrivateProps> = ({message = 'Private'}) => {
    return (
        <div className="lock">
            <UseSvg spriteName="lock" className="lock_icon"/>
            {message}
        </div>
    )
}