import { useEffect, useState } from "react";
import { Link, json, redirect } from "react-router-dom";
import { Comment } from "../../interfaces/Comment.interface";
import { User } from "../../interfaces/User.interface";
interface Props {
  postId: number;
}

const CommentsList: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments/"
      );
      if (!response.ok) {
        throw json({ message: "Could not fetch comments" }, { status: 500 });
      }
      const data: Comment[] = await response.json();
      const dataFiltered = data.filter((comment) => comment.postId == postId);

      setComments(dataFiltered);
    };
    fetchData();
  }, []);

  function startDeleteCommentHandler(commentId: number) {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      deleteComment(commentId);
    }
  }

  async function deleteComment(commentId: number) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/" + commentId,
      {
        method: "DELETE",
      }
    );
    response.json().then((json) => console.log(json));

    if (!response.ok) {
      throw json({ message: "Could not delete comment." }, { status: 500 });
    }
    return redirect(`/posts/${postId}`);
  }

  return (
    <>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div>
                {comment.email}
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
              </div>
              <button onClick={() => startDeleteCommentHandler(comment.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CommentsList;
