import { Link } from "react-router-dom";
import classes from "../../styles/PostList.module.css"
import {Post} from "../../interfaces/Post.interface"
interface Props {
  posts: Post[];
}
const PostsList: React.FC<Props> = ({ posts }) => {
  function capitalizeFirstLetter(title:string){
    const titleChanged = title.charAt(0).toUpperCase()+title.slice(1)
    return <h2>{titleChanged}</h2>
  }

  return (
    <>
      <div className={classes.posts}>
        <h1>All Posts</h1>
        <ul className={classes.list}>
          {posts.map((post) => (
            <li key={post.id} className={classes.item}>
              <Link to={`/posts/${post.id}`}>
                <div className={classes.content}>
                  {capitalizeFirstLetter(post.title)}
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
