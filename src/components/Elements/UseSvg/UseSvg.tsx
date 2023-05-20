import {Icons} from "../../../assets/icons";

type UseSvgProps = {
    spriteName: string;
    className: string;
    title?: string | false;
}

export const UseSvg: React.FC<UseSvgProps> = ({spriteName, title = false, className}) => {
    return (
        <svg className={className} role="img">
            {title && <title>{title}</title>}
            <use xlinkHref={`${Icons}#${spriteName}`}/>
        </svg>
    )
}