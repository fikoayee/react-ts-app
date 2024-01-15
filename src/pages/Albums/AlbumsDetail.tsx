import { useRouteLoaderData, json, redirect } from "react-router-dom";
import AlbumsItem from "../../components/Albums/AlbumsItem";

interface Albums {
  userId: number;
  id: number;
  title: string;
}

const AlbumsDetailPage = () => {
  const data = useRouteLoaderData('albums-detail') as Albums;
  return (
    <>
      <AlbumsItem albums={data} />
    </>
  );
};
export default AlbumsDetailPage;

export async function loader(reactRouterObj: any) {
  const id = reactRouterObj.params.albumId; // dunno how to get request and params from react router object in typescript
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected albums." },
      { status: 500 }
    );
  } else {
    const albumsData: Albums = await response.json(); // Extract JSON data from the response
    return albumsData;
  }
}

export async function action(reactRouterObj: any){
    console.log(reactRouterObj.params.albumId)
    const albumsId = reactRouterObj.params.albumId;
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/"+albumsId)
    
    if (!response.ok) {
        throw json(
            { message: "Could not delete albums." },
            { status: 500 }
        );
    }else{
        response.json().then((json) => console.log("success", json));
    }
    
    return redirect('/albums')
}