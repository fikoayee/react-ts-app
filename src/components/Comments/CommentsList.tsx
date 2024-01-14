import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface Props {
  postId: number;
}

const CommentsList: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await await fetch(
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
  }, [postId]);

  return (
    <>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Link to={`/users/3`}>
                <div>
                  <h2>{comment.name}</h2>
                  <p>{comment.body}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CommentsList;

// export async function fetchData(postId: number) {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/comments/"
//   );

//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch comments for selected post." },
//       { status: 500 }
//     );
//   } else {
//     const postData: Comment[] = await response.json(); // Extract JSON data from the response
//     return postData;
//   }
// }