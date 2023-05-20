import {TopPosts} from "../../Pages/Main/TopPosts/TopPosts"
import {useAppDispatch, useAppSelector} from "../../../hook";
import {useEffect} from "react";
import {getPopularPosts} from "../../api/AsyncPost";

export const TopPostsContainer: React.FC = () => {
    const {posts, loading, error} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularPosts())
    }, [dispatch])

    return (
        <>
            <TopPosts posts={posts} loading={loading}/>
        </>
    )
}