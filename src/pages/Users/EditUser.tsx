import { useRouteLoaderData, json, redirect } from "react-router-dom";
import UserForm from "../../components/Users/UserForm";
import {User} from "../../interfaces/User.interface"

const EditUserPage = () => {
  const data = useRouteLoaderData("user-detail") as User;
  return (
    <>
      <UserForm method='patch' user={data} />
    </>
  );
};
export default EditUserPage