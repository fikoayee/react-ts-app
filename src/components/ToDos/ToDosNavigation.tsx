import classes from './ToDosNavigation.module.css';

function ToDosNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/todos">All ToDos</a>
          </li>
          <li>
            <a href="/todos/new">New ToDo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ToDosNavigation;
