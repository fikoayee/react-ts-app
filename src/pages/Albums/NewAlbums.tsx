import { FormEvent } from "react";
import AlbumsForm from "../../components/Albums/AlbumsForm";
import { json, redirect, useNavigate } from "react-router-dom";

const NewAlbumsPage = () => {
  return (
    <>
      <AlbumsForm />
    </>
  );
};
export default NewAlbumsPage;

export async function action({ request }: { request: Request }) {
    const data = await request.formData();

    const albumsData = {
        title: data.get("title"),
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        body: JSON.stringify({
            title: albumsData.title,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    if (!response.ok) {
        throw json({ message: "Could not save albums." }, { status: 500 });
    } else {
        response.json().then((json) => console.log(json));
        return redirect("/albums");
    }

}