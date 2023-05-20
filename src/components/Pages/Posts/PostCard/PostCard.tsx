import {NavLink} from 'react-router-dom';
import {UseSvg} from '../../../Elements/UseSvg/UseSvg';
import {PostType} from '../../../Types/post';
import {format, I18nSettings} from 'fecha';

type format = (date: Date, format?: string, i18n?: I18nSettings) => string;

export const PostCard: React.FC<PostType> = ({
                                                 author,
                                                 commentsCount,
                                                 id,
                                                 photo,
                                                 title,
                                                 viewsCount,
                                                 date
                                             }) => {
    return (
        <div className="post_card">
            <div className="image"><img src={photo} alt="post image"/></div>
            <div className="data_and_views">
                <ul>
                    <li className="data">{format(new Date(date), 'YYYY-MM-DD hh:mm:ss A')}</li>
                    <li className="views">
                        <UseSvg spriteName="eye_icon" className="views_icon" title="views count"/>
                        {viewsCount}
                    </li>
                </ul>
            </div>
            <h3 className="post_card__title">{title}</h3>
            <h5 className="post_card__author">by <NavLink to={`/profile/${author.id}`}
                                                          className="bottom_hover">{author.nickname}</NavLink></h5>
            <h4 className="move_to_post"><NavLink to={`/posts/${id}`} className="bottom_hover">read</NavLink></h4>
            <div className="likes_and_comments">
                <ul>
                    <li>
                        <UseSvg spriteName="comment_icon" className="likes_and_comments_icon" title="comments count"/>
                        {commentsCount}
                    </li>
                </ul>
            </div>
        </div>
    )
}