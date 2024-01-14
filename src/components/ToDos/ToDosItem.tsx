import { Link, useSubmit } from "react-router-dom";
import classes from "./ToDosItem.module.css";

interface ToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
  todos: ToDos;
}

const ToDosItem: React.FC<Props> = ({ todos }) => {
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if(proceed){
      submit({},)
    }
  }

  return (
    <>
      <article className={classes.todos}>
        <h1>{todos.title}</h1>
        <p>{todos.completed}</p>
        <menu className={classes.actions}>
          <Link to={`/todos/${todos.id}/edit`}>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
    </>
  );
}
export default ToDosItem;
