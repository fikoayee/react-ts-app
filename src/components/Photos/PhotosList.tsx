import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

interface Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface Props {
    albumId: number;
}

const PhotosList: React.FC<Props> = ({ albumId }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await await fetch(
                "https://jsonplaceholder.typicode.com/photos/"
            );
            if (!response.ok) {
                throw json({ message: "Could not fetch photos" }, { status: 500 });
            }
            const data: Photo[] = await response.json();
            const dataFiltered = data.filter((photo) => photo.albumId == albumId);

            setPhotos(dataFiltered);
        };
        fetchData();
    }, [albumId]);

    return (
        <>
            <div>
                <ul>
                    {photos.map((photo) => (
                        <li key={photo.id}>
                            <Link to={`/users/3`}>
                                <div>
                                    <h2>{photo.title}</h2>
                                    <p>{photo.url}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PhotosList;