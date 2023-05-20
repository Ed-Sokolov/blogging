import {PostCard} from "./PostCard/PostCard";
import {PostType} from "../../Types/post";
import {Empty} from "../../Elements/Empty/Empty";

type PostPropsType = {
    posts: Array<PostType>;
}

export const Posts: React.FC<PostPropsType> = ({posts}) => {
    return (
        <div className="posts_page">
            <div className="container">
                <div className="section_title">posts</div>
                <div className="posts_field">
                    {
                        posts.length > 0 ? posts.map(post => <PostCard key={post.id} {...post} />) : <Empty/>
                    }
                </div>
            </div>
        </div>
    )
}