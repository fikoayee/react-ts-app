import classes from './AlbumsNavigation.module.css';

function AlbumsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/albums">All Albums</a>
          </li>
          <li>
            <a href="/albums/new">New Album</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AlbumsNavigation;