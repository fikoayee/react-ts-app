import { useRouteLoaderData, json, redirect } from "react-router-dom";
import UserItem from "../../components/Users/UserItem";
import {User} from "../../interfaces/User.interface"

const UserDetailPage = () => {
  const data = useRouteLoaderData("user-detail") as User;
  return (
    <>
      <UserItem user={data} />
    </>
  );
};
export default UserDetailPage

export async function loader(reactRouterObj: any) {
  const id = reactRouterObj.params.userId; // dunno how to get request and params from react router object in typescript
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected users." },
      { status: 500 }
    );
  } else {
    const userData: User = await response.json(); // Extract JSON data from the response
    return userData;
  }
}

export async function action(reactRouterObj: any) {
  const id = reactRouterObj.params.userId;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id,
    {
      method: "DELETE",
    }
  );
  response.json().then((json) => console.log(json));
  if (!response.ok) {
    throw json({ message: "Could not delete user." }, { status: 500 });
  }
  return redirect("/users");
}