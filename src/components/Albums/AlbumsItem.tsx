import { Link, useSubmit } from "react-router-dom";
import classes from "./AlbumItem.module.css";

interface Albums {
    userId: number;
    id: number;
    title: string;
}

interface Props {
  albums: Albums;
}

const AlbumsItem: React.FC<Props> = ({ albums }) => {
  console.log("AlbumsItem", albums);
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if(proceed){
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.albums}>
      <h1>{albums.title}</h1>
      <menu className={classes.actions}>
        <Link to={`/albums/${albums.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
export default AlbumsItem;