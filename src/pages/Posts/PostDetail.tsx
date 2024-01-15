import { useRouteLoaderData, json, redirect } from "react-router-dom";
import PostItem from "../../components/Posts/PostItem";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetailPage = () => {
  const data = useRouteLoaderData("post-detail") as Post;
  return (
    <>
      <PostItem post={data} />
    </>
  );
};
export default PostDetailPage;

export async function loader(reactRouterObj: any) {
  const id = reactRouterObj.params.postId; // dunno how to get request and params from react router object in typescript
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected post." },
      { status: 500 }
    );
  } else {
    const postData: Post = await response.json(); // Extract JSON data from the response
    return postData;
  }
}

export async function action(reactRouterObj: any) {
  const id = reactRouterObj.params.postId;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      method: "DELETE",
    }
  );
  response.json().then((json) => console.log("success", json));
  
  if (!response.ok) {
    throw json({ message: "Could not delete post." }, { status: 500 });
  }
  return redirect("/posts");
}
