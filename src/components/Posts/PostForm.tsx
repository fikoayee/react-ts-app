import { Form, json, redirect } from "react-router-dom";
import classes from "./PostForm.module.css";
import {Post} from "../../interfaces/Post.interface"


interface Props {
  post?: Post;
  method: any;
}

const PostForm: React.FC<Props> = ({ post, method }) => {
  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={post ? post.title : ""}
        />
      </p>
      <p>
        <label htmlFor="body">Content</label>
        <textarea
          id="body"
          name="body"
          rows={5}
          required
          defaultValue={post ? post.body : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button">Cancel</button>
        <button>Save</button>
      </div>
    </Form>
  );
};
export default PostForm;

export async function action(reactRouterObj: any) {
  const method = reactRouterObj.request.method
  const data = await reactRouterObj.request.formData();

  const postData = {
    title: data.get("title"),
    body: data.get("body"),
  };

  let url = "https://jsonplaceholder.typicode.com/posts";
  if (method === "PATCH") {
    const postId = reactRouterObj.params.postId
    url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not save post." }, { status: 500 });
  } else {
    response.json().then((json) => console.log(json));
    return redirect("/posts");
  }
}
