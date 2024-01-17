import { Form, json, redirect } from "react-router-dom";
import classes from "../../styles/PostForm.module.css"
import { Post } from "../../interfaces/Post.interface";
import FormItem from "../FormItem";
import FormActions from "../FormActions";

interface Props {
  post?: Post;
  method: any;
}

const PostForm: React.FC<Props> = ({ post, method }) => {
  return (
    <>
      <h1>Create new post</h1>
      <Form method={method} className={classes.form}>
        <FormItem
          id="title"
          type="text"
          header="Title"
          isRequired={true}
          obj={post}
          objProp={post?.title}
          minLength={3}
        />
        <FormItem
          id="body"
          type="text"
          header="Content"
          isRequired={true}
          obj={post}
          objProp={post?.body}
          minLength={5}
        />
        <FormActions />
      </Form>
    </>
  );
};
export default PostForm;

export async function action(reactRouterObj: any) {
  const method = reactRouterObj.request.method;
  const data = await reactRouterObj.request.formData();

  const postData = {
    title: data.get("title"),
    body: data.get("body"),
  };

  let url = "https://jsonplaceholder.typicode.com/posts";
  if (method === "PATCH") {
    const postId = reactRouterObj.params.postId;
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
