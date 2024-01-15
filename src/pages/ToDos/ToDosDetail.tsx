import { useRouteLoaderData, json, redirect } from "react-router-dom";
import ToDosItem from "../../components/ToDos/ToDosItem";

interface ToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
 }

 const ToDosDetailPage = () => {
    const data = useRouteLoaderData('todos-detail') as ToDos;
    return (
      <>
        <ToDosItem todo={data} />
      </>
    );
  };
export default ToDosDetailPage;

export async function loader(reactRouterObj: any) {
    const id = reactRouterObj.params.todoId; // dunno how to get request and params from react router object in typescript
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
    );

    if (!response.ok) {
        throw json(
            { message: "Could not fetch details for selected todos." },
            { status: 500 }
        );
    } else {
        const todosData: ToDos = await response.json(); // Extract JSON data from the response
        return todosData;
    }
}

export async function action(reactRouterObj: any){
    console.log(reactRouterObj.params.todoId)
    const todosId = reactRouterObj.params.todoId;
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"+todosId)
    
    if (!response.ok) {
        throw json(
            { message: "Could not delete todos." },
            { status: 500 }
        );
    }else{
        response.json().then((json) => console.log("success", json));
    }
    
    return redirect('/todos')
}
