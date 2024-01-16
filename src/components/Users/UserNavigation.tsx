import classes from '../Posts/PostsNavigation.module.css'

const UserNavigation: React.FC = () => {
    return (
     <>
      <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/users">All Posts</a>
          </li>
          <li>
            <a href="/users/new">New Post</a>
          </li>
        </ul>
      </nav>
    </header>
     </>
    );
  };
  export default UserNavigation;