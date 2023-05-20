import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {Post} from "../../Pages/Post/Post";
import {useEffect} from "react";
import {getPost} from "../../api/AsyncPost";
import {Loading} from "../../Elements/Loading/Loading";

const PostContainer: React.FC = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();
    const {post, loading: postLoading, error: postError} = useAppSelector(state => state.posts);
    const {authRole, authId} = useAppSelector(state => state.auth);

    useEffect(() => {
        dispatch(getPost(Number(id)));
    }, [dispatch, id])

    return (
        <div>
            {postLoading || post === null ? <Loading/> : <Post {...post} authRole={authRole} authId={authId}/>}
        </div>
    )
}

export default PostContainer;