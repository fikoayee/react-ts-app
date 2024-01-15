import { Form } from "react-router-dom";
import classes from "../Posts/PostForm.module.css";
import { useRef } from "react";


interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  postId: number;
}

const CommentForm: React.FC<Props> = ({ postId }) => {

  function handleSubmit(event: any) {
    event.preventDefault();

    const formData =  new FormData(event.target);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2>Add Comment:</h2>
      <p>
        <label htmlFor="name">Title</label>
        <input id="name" type="text" name="name" required />
      </p>
      <p>
        <label htmlFor="body">Content</label>
        <textarea id="body" name="body" rows={5} required />
      </p>
      <div className={classes.actions}>
        <button type="button">Cancel</button>
        <button type="button">Clear</button>
        <button onClick={handleSubmit}>Comment</button>
      </div>
    </form>
  );
};
export default CommentForm;
