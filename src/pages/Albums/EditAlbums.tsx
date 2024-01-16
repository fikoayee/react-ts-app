import AlbumsForm from "../../components/Albums/AlbumsForm";
import { useRouteLoaderData } from "react-router-dom";

interface Albums {
  userId: number;
  id: number;
  title: string;
}

const EditAlbumsPage = () => {
  const data = useRouteLoaderData("albums-detail") as Albums;

  return (
    <>
      <AlbumsForm albums={data} />
    </>
  );
};
export default EditAlbumsPage;