import { useRouteLoaderData, json, redirect } from "react-router-dom";
import UserItem from "../../components/Users/UserItem";
import UserForm from "../../components/Users/UserForm";

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
    geo:{
        lat: number,
        lng: number
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  }
}

const EditUserPage = () => {
  const data = useRouteLoaderData("user-detail") as User;
  return (
    <>
      <UserForm method='patch' user={data} />
    </>
  );
};
export default EditUserPage