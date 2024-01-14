import { json, useLoaderData } from "react-router-dom";
import PostsList from "../../components/Posts/PostsList";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
