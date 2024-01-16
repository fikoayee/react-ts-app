import ToDosForm from "../../components/ToDos/ToDosForm";
//import { useRouteLoaderData } from "react-router-dom";
import { json, redirect, useRouteLoaderData } from "react-router-dom"; 

interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const EditToDosPage = () => {
  const data = useRouteLoaderData("todos-detail") as ToDos;

  return (
    <>
      {/* <ToDosForm todos={data} /> */}
      <ToDosForm method="patch" todos={data} />
    </>
  );
};
export default EditToDosPage;
