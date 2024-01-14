import { Form } from "react-router-dom";
import classes from "./PostForm.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  post?: Post;
}

const PostForm: React.FC<Props> = ({ post }) => {
  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required  defaultValue={post ? post.title : ''}/>
      </p>
      <p>
        <label htmlFor="body">Content</label>
        <textarea id="body" name="body" rows={5} required defaultValue={post ? post.body : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button">
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
};
export default PostForm;

