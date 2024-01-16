import { Link } from "react-router-dom";
import classes from "./PostList.module.css";
import {Post} from "../../interfaces/Post.interface"
interface Props {
  posts: Post[];
}
const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div className={classes.posts}>
        <h1>All Posts</h1>
        <ul className={classes.list}>
          {posts.map((post) => (
            <li key={post.id} className={classes.item}>
              <Link to={`/posts/${post.id}`}>
                <div className={classes.content}>
                  <h2>{post.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostsList;
