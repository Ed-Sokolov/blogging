import {NavLink} from "react-router-dom";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {CommentType} from "../../Types/comment";
import {format, I18nSettings} from 'fecha';


type CommentItemProps = CommentType & {
    deleteComment: (id: number) => void;
    userId: number | null;
    authRole: string | null;
    loading: boolean;
};

type format = (date: Date, format?: string, i18n?: I18nSettings) => string;

export const CommentItem: React.FC<CommentItemProps> = ({
                                                            text,
                                                            author,
                                                            date,
                                                            id,
                                                            postId,
                                                            deleteComment,
                                                            userId,
                                                            authRole,
                                                            loading
                                                        }) => {
    return (
        <div className="comment_item">
            <div className="comment">
                <div className="comment_information">
                    <NavLink to={`/profile/${author.id}`}>
                        {
                            author.photo ?
                                <img src={author.photo} alt="profile photo" className="user_photo"/> :
                                <UseSvg spriteName="user_icon_default" className="user_icon" title="move to user page"/>
                        }
                    </NavLink>
                    <div className="author_and_date">
                        <div className="author"><NavLink to={`/profile/${author.id}`}
                                                         className="bottom_hover">{author.nickname}</NavLink></div>
                        <div className="date">{format(new Date(date), 'YYYY-MM-DD hh:mm:ss A')}</div>
                    </div>
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
            {(author.id === userId || authRole === 'admin') &&
                <div className="edit_field">
                    <UseSvg spriteName="edit_comment" className="edit_comment" title="settings this comment"/>
                    <div className={`remove_comment_field ${loading ? 'disabled' : ''}`} onClick={() => deleteComment(id)}>
                        <UseSvg spriteName="trash" className="remove_comment" title="delete this comment"/>
                    </div>
                </div>
            }
        </div>
    )
}