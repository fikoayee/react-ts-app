import { json, redirect } from "react-router-dom";
import classes from "../../styles/PostForm.module.css"
import FormItem from "../FormItem";
import FormActions from "../FormActions";

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
    <>
      <h1>Add Comment:</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormItem
          header="Title"
          id="title"
          type="text"
          isRequired={true}
          minLength={5}
          obj={null}
          objProp={null}
        />
        <FormItem
          header="Content"
          id="body"
          type="text"
          isRequired={true}
          minLength={8}
          obj={null}
          objProp={null}
        />
        <FormActions />
      </form>
    </>
  );
};
export default CommentForm;
