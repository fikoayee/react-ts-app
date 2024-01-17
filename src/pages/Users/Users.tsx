import { json, useLoaderData } from "react-router-dom";
import UsersLists from "../../components/Users/UsersList";
import { sortUserByDistance } from "../../components/utils/geolocation";
import { useEffect, useState } from "react";
import {User} from "../../interfaces/User.interface"


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
