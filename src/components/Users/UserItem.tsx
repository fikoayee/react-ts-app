import classes from "../../styles/PostItem.module.css";
import {User} from "../../interfaces/User.interface"


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

        <h1>{user.company.name}</h1>
        <h2>"{user.company.catchPhrase}"</h2>
        <h1>{user.company.bs}</h1>
      </article>
{/* {ALBUMS DISPLAY} */}
    </>
  );
};
export default UserItem;
