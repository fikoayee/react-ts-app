import { Form } from "react-router-dom";
import classes from "./AlbumsForm.module.css";

interface Albums {
  userId: number;
  id: number;
  title: string;
}

interface Props {
    albums?: Albums;
}

const AlbumsForm: React.FC<Props> = ({ albums }) => {
  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required  defaultValue={albums ? albums.title : ''}/>
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
export default AlbumsForm;

