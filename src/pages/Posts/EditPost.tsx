import PostForm from "../../components/Posts/PostForm";
import { useRouteLoaderData } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const EditPostPage = () => {
  const data = useRouteLoaderData('post-detail') as Post;

  return (
    <>
      <PostForm post={data} />
    </>
  );
};
export default EditPostPage;
