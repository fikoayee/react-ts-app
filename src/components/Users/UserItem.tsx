import { Link, useSubmit } from "react-router-dom";
import classes from "../Posts/PostItem.module.css";
import { useState } from "react";

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

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <>
      <article className={classes.post}>
        <h1>{user.name}</h1>
        <h3>e-mail:{user.email}</h3>
        <h3>phone: {user.phone}</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Poland</p>

        <h1>{user.company.name}</h1>
        <h2>"{user.company.catchPhrase}"</h2>
        <h1>{user.company.bs}</h1>
      </article>
{/* {ALBUMS DISPLAY} */}
    </>
  );
};
export default UserItem;
