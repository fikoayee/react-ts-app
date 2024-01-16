import PostForm from "../../components/Posts/PostForm";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const EditPostPage = () => {
  const data = useRouteLoaderData("post-detail") as Post;

  return (
    <>
      <PostForm method='patch' post={data} />
    </>
  );
};
export default EditPostPage;



