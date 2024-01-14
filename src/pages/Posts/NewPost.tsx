import { FormEvent } from "react";
import PostForm from "../../components/Posts/PostForm";
import { json, redirect, useNavigate } from "react-router-dom";

const NewPostPage = () => {
  return (
    <>
      <PostForm />
    </>
  );
};
export default NewPostPage;

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  const postData = {
    title: data.get("title"),
    body: data.get("body"),
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
    }),
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
