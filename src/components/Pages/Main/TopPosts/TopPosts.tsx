import {NavLink} from "react-router-dom"
import {PostType} from "../../../Types/post";
import {PostCard} from "../../Posts/PostCard/PostCard";
import {Empty} from "../../../Elements/Empty/Empty";
import {Loading} from "../../../Elements/Loading/Loading";

type TopPostsProps = {
    posts: PostType[] | null;
    loading: boolean;
}

export const TopPosts: React.FC<TopPostsProps> = ({posts, loading}) => {
    return (
        <div className="posts">
            <div className="container">
                {loading ? <Loading/> : <>
                    <div className="section_title">posts</div>

                    <div className="posts_field">
                        {
                            posts && posts.length > 0 ? posts.map(post => <PostCard key={post.id} {...post} />) : <Empty/>
                        }
                    </div>
                    <h4 className="move_to_posts_page"><NavLink to="/posts" className="bottom_hover">read more
                        posts</NavLink></h4>
                </>}
            </div>
        </div>
    )
}