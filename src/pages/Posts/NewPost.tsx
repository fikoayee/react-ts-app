import { FormEvent } from "react";
import PostForm from "../../components/Posts/PostForm";
import { json, redirect, useNavigate } from "react-router-dom";

const NewPostPage = () => {
  return (
    <>
      <PostForm method='post'/>
    </>
  );
};
export default NewPostPage;


