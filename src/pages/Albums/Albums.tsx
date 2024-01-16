import { json, useLoaderData } from "react-router-dom";
import AlbumsList from "../../components/Albums/AlbumsList";

interface Albums {
  userId: number;
  id: number;
  title: string;
}

const AlbumsPage = () => {
  const data = useLoaderData() as Albums[];
  return (
    <>
      <AlbumsList albums={data} />
    </>
  );
};

export default AlbumsPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  if (!response.ok) {
    throw json({ message: "Could not fetch albums." }, { status: 500 });
  } else {
    return response;
  }
}