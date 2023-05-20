import {useAppDispatch, useAppSelector} from "../../../hook";
import {Empty} from "../../Elements/Empty/Empty";
import {CommentField} from "../../Pages/Comment/CommentField";
import {CommentItem} from "../../Pages/Comment/CommentItem";
import {UseSvg} from "../../Elements/UseSvg/UseSvg";
import {CommentFormType} from "../../Types/comment";
import {NotAuth} from "../../Elements/NotAuth/NotAuth";
import {addComment, destroyComment, getComments} from "../../api/AsyncComment";
import {useEffect, useState} from "react";
import {validationSchemaForComment} from "../../Validations";

type CommentContainerPropsType = {
    postId: number;
}

export const CommentContainer: React.FC<CommentContainerPropsType> = ({postId}) => {
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const {comments, loading, error} = useAppSelector(state => state.comments);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const {authRole, authId} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getComments(postId));
        setIsUpdate(false);
    }, [dispatch, isUpdate, postId])

    const commentValues = {
        text: ''
    }

    const handleAddComment = (values: typeof commentValues, action) => {
        if (authId) {
            const comment: CommentFormType = {
                authorId: Number(authId),
                postId: postId,
                text: values.text
            }
            dispatch(addComment(comment)).then(() => {
                setIsUpdate(true);
                action.resetForm();
                action.setSubmitting(false);
            });
        }
    }

    const deleteComment = (commentId: number) => {
        dispatch(destroyComment(commentId)).then(() => {
            setIsUpdate(true);
        });
    }

    return (
        <div className="comments_field">
            <div className="line">
                <UseSvg spriteName="bottom-line" className="bottom_line"/>
            </div>
            {isAuth ? <CommentField loading={loading}
                                    validationSchemaForComment={validationSchemaForComment} values={commentValues}
                                    handleAddComment={handleAddComment}/> :
                <NotAuth/>
            }
            {comments.length < 1 ? <Empty/> :
                <div className="comments">
                    {
                        comments.map(comment => (
                            <CommentItem key={comment.id} {...comment} userId={authId} authRole={authRole}
                                         deleteComment={deleteComment} loading={loading}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}