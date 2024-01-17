import { json, useLoaderData } from "react-router-dom";
import PostsList from "../../components/Posts/PostsList";
import { Post } from "../../interfaces/Post.interface";

const PostsPage = () => {
  const data = useLoaderData() as Post[];
  return (
    <>
      <PostsList posts={data} />
    </>
  );
};
export default PostsPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw json({ message: "Could not fetch posts." }, { status: 500 });
  } else {
    return response;
  }
}
