import { Link, useSubmit } from "react-router-dom";
import classes from "./PostItem.module.css";
import CommentsList from "../Comments/CommentsList";
import { useState } from "react";
import CommentForm from "../Comments/CommentForm";

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
  const [addComment, setAddComment] = useState(false);
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  function addCommentHandler() {
    setAddComment(!addComment);
  }

  return (
    <>
      <article className={classes.post}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <menu className={classes.actions}>
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
          <button onClick={addCommentHandler}>{addComment ? 'Show Comments' : 'Add Comment'}</button>
        </menu>
      </article>
      {addComment ? (
        <CommentForm postId={post.id} onCommentAdd={addCommentHandler} />
      ) : (
        <CommentsList postId={post.id} />
      )}
    </>
  );
};
export default PostItem;
