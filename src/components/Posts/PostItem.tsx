import { Link } from "react-router-dom";
import classes from "./PostItem.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if(proceed){
      
    }
  }

  return (
    <>
      <article className={classes.post}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <menu className={classes.actions}>
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
    </>
  );
};
export default PostItem;
