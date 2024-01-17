import PostForm from "../../components/Posts/PostForm";
import {useRouteLoaderData } from "react-router-dom";
import { Post } from "../../interfaces/Post.interface";


const EditPostPage = () => {
  const data = useRouteLoaderData("post-detail") as Post;

  return (
    <>
      <PostForm method='patch' post={data} />
    </>
  );
};
export default EditPostPage;



