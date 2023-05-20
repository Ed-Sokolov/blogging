import {NavLink} from "react-router-dom";
import {CommentContainer} from "../../Containers/CommentContainer/CommentContainer";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {PostType} from "../../Types/post";
import {Paragraph} from "./Paragraph/Paragraph";
import {format, I18nSettings} from 'fecha';
import {Private} from "../../Elements/Private/Private";

type format = (date: Date, format?: string, i18n?: I18nSettings) => string;

type PostPropsType = PostType & {
    authRole: string | null;
    authId: number | null;
}

export const Post: React.FC<PostPropsType> = ({
                                                  author,
                                                  date,
                                                  id,
                                                  photo,
                                                  text,
                                                  title,
                                                  viewsCount,
                                                  authRole,
                                                  authId,
                                                  isOpenedComments
                                              }) => {
    const arrayOfText = text.split('\n');
    return (
        <div className="post_page">
            <div className="container">
                <div className="promo">
                    <div className="promo_image">
                        <a href={photo} target="_blank"><img src={photo} alt="promo image of this post"/></a>
                    </div>
                    <div className="line">
                        <UseSvg spriteName="line" className="line_icon"/>
                    </div>
                    <div className="promo_information">
                        <div className="date">{format(new Date(date), 'YYYY-MM-DD hh:mm:ss A')}</div>
                        <h2 className="title">{title}</h2>
                        <div className="likes_and_views">
                            <div className="views">
                                <UseSvg spriteName="eye_icon" className="eye_icon" title="views count"/>
                                {viewsCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control_and_author">
                    {(author.id === authId || authRole === 'admin') &&
                        <div className="control">
                            <NavLink to={`/posts/${id}/edit`} className="bottom_hover">
                                <UseSvg spriteName="edit_icon" className="edit_icon" title="move to edit page"/>
                                edit
                            </NavLink>
                        </div>
                    }
                    <div className="author">
                        by <NavLink to={`/profile/${author.id}`} className="bottom_hover">{author.nickname}</NavLink>
                    </div>
                </div>
                <div className="information">
                    <ul>
                        {arrayOfText.map((text, index) => {
                            const newText = text.trim();
                            if (newText.length === 0) return;
                            return (
                                <Paragraph newText={newText} key={index}/>
                            );
                        })}
                    </ul>
                </div>
                {isOpenedComments ? <CommentContainer postId={id}/> : <Private message={'closed'}/>}
            </div>
        </div>
    )
}