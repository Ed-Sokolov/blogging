import {UseSvg} from '../../../../Elements/UseSvg/UseSvg';

type AuthorCardProps = {
    title: string;
    text: string;
}

export const AuthorCard = ({title, text}: AuthorCardProps) => {
    return (
        <div className="author_card">
            <div className="background"></div>
            <div className="avatar">
                <UseSvg spriteName="avatar" className="avatar_icon" title="this is the default photo icon"/>
            </div>
            <div className="description">
                <div className="author">{title}</div>
                <div className="text">{text}</div>
            </div>
        </div>
    )
}