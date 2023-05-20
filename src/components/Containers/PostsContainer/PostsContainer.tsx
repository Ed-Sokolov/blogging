import {useAppDispatch, useAppSelector} from "../../../hook";
import {Posts} from "../../Pages/Posts/Posts";
import {useEffect} from "react";
import {getPosts} from "../../api/AsyncPost";
import {Loading} from "../../Elements/Loading/Loading";

const PostsContainer = () => {
    const dispatch = useAppDispatch();
    const {posts, loading, error} = useAppSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
            {loading || posts === null ? <Loading/> : <Posts posts={posts}/>}
        </div>
    )
}

export default PostsContainer;