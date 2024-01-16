import { json, useLoaderData } from "react-router-dom";
import UsersLists from "../../components/Users/UsersList";
import { sortUserByDistance } from "./geolocation";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UsersPage = () => {
  const data = useLoaderData() as User[];
  const [usersData, setUsersData] = useState([]) as any;
  
  useEffect(() => {
    let sortedUsers = [] as User[]
    navigator.geolocation.getCurrentPosition((position) => {
      sortedUsers = sortUserByDistance(
        data,
        position.coords.latitude,
        position.coords.longitude
      );
      setUsersData(sortedUsers);
    });

    if( sortedUsers.length !== data.length){
      setUsersData(data)
    }

  }, []); // 

  return (
    <>
      <UsersLists users={usersData} />
    </>
  );
};
export default UsersPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw json({ message: "Could not fetch users." }, { status: 500 });
  } else {
    return response;
  }
}
