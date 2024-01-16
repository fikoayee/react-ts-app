import { json, redirect } from "react-router-dom";
import classes from "../Posts/PostForm.module.css";


interface Props {
  postId: number;
  onCommentAdd: () => void;
}

const CommentForm: React.FC<Props> = ({ postId, onCommentAdd }) => {
  function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // calling entries on the formData object gives an array of all the input fields & values
    // calling object from entries on that array gives an object with key:value pairs
    const data = Object.fromEntries(formData.entries());

    addNewComment(postId, data.title, data.body);
  }

  async function addNewComment(postId: number, title: any, body: any) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        body: JSON.stringify({
          postId: postId,
          name: title,
          body: body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      throw json({ message: "Could not add comment." }, { status: 500 });
    } else {
      response.json().then((json) => console.log(json));

      onCommentAdd();
      return redirect(`/posts/${postId}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2>Add Comment:</h2>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </p>
      <p>
        <label htmlFor="body">Content</label>
        <textarea id="body" name="body" rows={5} required minLength={3} />
      </p>
      <div className={classes.actions}>
        <button type="reset">Clear</button>
        <button type="submit">Comment</button>
      </div>
    </form>
  );
};
export default CommentForm;
