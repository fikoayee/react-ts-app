import { Link, useSubmit } from "react-router-dom";
import classes from "./AlbumItem.module.css";
import PhotosList from "../Photos/PhotosList";
import { useState } from "react";
import PhotoForm from "../Photos/PhotoForm";

interface Albums {
    userId: number;
    id: number;
    title: string;
}

interface Props {
  albums: Albums;
}

const AlbumsItem: React.FC<Props> = ({ albums }) => {
  const [addPhoto, setAddPhoto] = useState(false);
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure?");

    if(proceed){
      submit(null, { method: "delete" });
    }
  }

  function addPhotoHandler(){
    setAddPhoto(!addPhoto);
  }

  return (
    <>
    <article className={classes.albums}>
      <h1>{albums.title}</h1>
      <menu className={classes.actions}>
        <Link to={`/albums/${albums.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
        <button onClick={addPhotoHandler}>Photo</button>
      </menu>
    </article>
    {addPhoto ? (
      <PhotoForm albumId={albums.id} />
    ) : (
      <PhotosList albumId={albums.id} />
    )}
    </>
  );
};
export default AlbumsItem;