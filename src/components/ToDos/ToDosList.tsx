import { Link } from "react-router-dom";
import classes from "./ToDosList.module.css";

interface ToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
  todos: ToDos[];
}

const ToDosList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <div className={classes.todos}>
        <h1>All ToDos</h1>
        <ul className={classes.list}>
          {todos.map((todo) => (
            <li key={todo.id} className={classes.item}>
              <Link to={`/todos/${todo.id}`}>
                <div className={classes.content}>
                  <h2>{todo.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default ToDosList;
