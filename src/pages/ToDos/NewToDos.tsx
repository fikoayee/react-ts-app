import { FormEvent } from "react";
import ToDosForm from "../../components/ToDos/ToDosForm";
import { json, redirect, useNavigate } from "react-router-dom";

const NewToDosPage = () => {
  return (
    <>
      <ToDosForm method = 'post' />
    </>
  );
};
export default NewToDosPage;

// export async function action({ request }: { request: Request }) {
//   const data = await request.formData();

//   const todosData = {
//     title: data.get("title"),
//     completed: data.get("completed"),
//   };

//   const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//       title: todosData.title,
//       completed: false,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   if (!response.ok) {
//     throw json({ message: "Could not save todos." }, { status: 500 });
//   } else {
//     response.json().then((json) => console.log(json));
//     return redirect("/todos");
//   }
// }