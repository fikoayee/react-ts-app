import { Link, useSubmit } from "react-router-dom";
import classes from "./AlbumItem.module.css";

interface Album {
    userId: number;
    id: number;
    title: string;
}

interface Props {
  album: Album;
}

const AlbumItem: React.FC<Props> = ({ album }) => {
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if(proceed){
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.albums}>
      <h1>{album.title}</h1>
      <menu className={classes.actions}>
        <Link to={`/albums/${album.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
export default AlbumItem;