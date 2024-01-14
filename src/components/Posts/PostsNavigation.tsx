import classes from './PostsNavigation.module.css';

function PostsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/posts">All Posts</a>
          </li>
          <li>
            <a href="/posts/new">New Post</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PostsNavigation;
