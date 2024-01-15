import { Link, useSubmit } from "react-router-dom";
import classes from "./ToDosItem.module.css";

interface ToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
  todo: ToDos;
}

const ToDosItem: React.FC<Props> = ({ todo }) => {
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.todos}>
      <h1>{todo.title}</h1>
      <p>{todo.completed.toString()}</p>
      <menu className={classes.actions}>
        <Link to={`/todos/${todo.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
export default ToDosItem;