import MainNavigation from './MainNavigation';
import Search from "./Search"
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Search />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;