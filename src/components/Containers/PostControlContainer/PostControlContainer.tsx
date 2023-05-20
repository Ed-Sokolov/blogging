import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {PostControl} from "../../Pages/PostControl/PostControl";
import {useEffect} from "react";
import {addNewPost, destroyPost, getPost, updatePost} from "../../api/AsyncPost";
import {validationSchemaForStore, validationSchemaForUpdate} from "../../Validations";
import {Loading} from "../../Elements/Loading/Loading";

type ArticleControlContainerPropsType = {
    isEditPage?: boolean;
}

export const PostControlContainer: React.FC<ArticleControlContainerPropsType> = ({isEditPage = false}) => {
    const {user} = useAppSelector(state => state.auth);
    const {post, loading, error} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let {id: postId} = useParams();

    const userId = user?.id;

    useEffect(() => {
        if (postId) {
            dispatch(getPost(Number(postId)));
        }
    }, [dispatch, postId])

    const addPost = (title: string, text: string, isOpenedComments: boolean, photo: File) => {
        if (userId) {
            const data = {
                title,
                text,
                photo,
                isOpenedComments,
                authorId: userId,
            }
            dispatch(addNewPost(data)).then(response => {
                navigate(`/posts/${response.payload}`);
            });
        }
    }

    const postEdit = (id: number, title: string, text: string, isOpenedComments: boolean, photo: File | null = null) => {
        if (userId) {
            const post = {
                postId: id,
                title,
                text,
                photo,
                isOpenedComments,
                authorId: userId,
            }
            dispatch(updatePost(post)).then(response => {
                navigate(`/posts/${response.payload}`);
            });
        }
    }

    const deletePost = (id: number) => {
        dispatch(destroyPost(id)).then(() => {
            navigate('/posts');
        });
    }

    return (
        <div>
            {
                loading ? <Loading/> :
                    <PostControl isEditPage={isEditPage} post={post !== null && isEditPage ? post : undefined}
                                 addPost={addPost} postEdit={postEdit} deletePost={deletePost} loading={loading}
                                 validationSchemaForStore={validationSchemaForStore}
                                 validationSchemaForUpdate={validationSchemaForUpdate}
                    />
            }
        </div>
    )
}