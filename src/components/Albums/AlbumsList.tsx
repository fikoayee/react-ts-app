import { Link } from "react-router-dom";
import classes from "./AlbumsList.module.css";

interface Albums {
    userId: number;
    id: number;
    title: string;
}

interface Props {
  albums: Albums[];
}

const AlbumsList: React.FC<Props> = ({ albums }) => {
  return (
    <>
      <div className={classes.albums}>
        <h1>All Albums</h1>
        <ul className={classes.list}>
          {albums.map((album) => (
            <li key={album.id} className={classes.item}>
              <Link to={`/albums/${album.id}`}>
                <div className={classes.content}>
                  <h2>{album.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AlbumsList;
