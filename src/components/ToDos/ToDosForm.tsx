import { Form } from "react-router-dom";
import classes from "./ToDosForm.module.css";

interface ToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
    todos?: ToDos;
}

const ToDosForm: React.FC<Props> = ({ todos }) => {
  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required  defaultValue={todos ? todos.title : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button">
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}
export default ToDosForm;