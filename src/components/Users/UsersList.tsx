import { Link } from "react-router-dom";
import classes from "../Posts/PostList.module.css";
import UsersLoading from "./UsersLoading";

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
interface Props {
  users: User[];
}
const UsersLists: React.FC<Props> = ({ users }) => {

  return (
    <>
      <div className={classes.posts}>
        <h1>Users</h1>
        {users.length === 0 && <UsersLoading></UsersLoading>} 
        {users.length > 0 && (
          <ul className={classes.list}>
            {users.map((user) => (
              <li key={user.id} className={classes.item}>
                <Link to={`/users/${user.id}`}>
                  <div className={classes.content}>
                    <h2>{user.name}</h2>
                    <h3>{user.company.name}</h3>
                    <p>{user.address.city}, Poland</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UsersLists;



