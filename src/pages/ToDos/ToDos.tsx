import { json, useLoaderData } from "react-router-dom";
import ToDosList from "../../components/ToDos/ToDosList";

interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ToDosPage = () => {
  const data = useLoaderData() as ToDos[];
  return (
    <>
      <ToDosList todos={data} />
    </>
  );
};

export default ToDosPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw json({ message: "Could not fetch todos." }, { status: 500 });
  } else {
    return response;
  }
}
