import { Form, json, redirect } from "react-router-dom";
import classes from "./ToDosForm.module.css";
import { ToDos } from "../../interfaces/ToDos.Interface";

interface Props {
  todos?: ToDos;
  method?: any;
}

const ToDosForm: React.FC<Props> = ({ todos, method }) => {
  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={todos ? todos.title : ""}
        />
      </p>
      <p>
        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          type="checkbox" 
          name="completed"
          defaultChecked={todos ? todos.completed : false} 
        />
      </p>
      <div className={classes.actions}>
        <button type="button">Cancel</button>
        <button>Save</button>
      </div>
    </Form>
  );
};
export default ToDosForm;

export async function action(reactRouterObj: any) {
  const method = reactRouterObj.request.method;
  const data = await reactRouterObj.request.formData();
  console.log("czemu to gówno jebane nie działa");
  const todosData = {
    title: data.get("title"),
    completed: data.get("completed"),
  };

  let url = "https://jsonplaceholder.typicode.com/todos";
  if (method === "PATCH") {
    const todosId = reactRouterObj.params.todosId;
    url = `https://jsonplaceholder.typicode.com/todos/${todosId}`;
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(todosData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  if(!response.ok) {
    throw json({ message: "Could not save todos" }, 500);
  } else {
    response.json().then((json) => console.log("from action todosform", json));
    return redirect("/todos");
  }
}



