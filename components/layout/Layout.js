import MainNavigation from './MainNavigation';
import SubMainNavigation from "./SubMainNavigation"
import Search from "./Search"
import classes from './Layout.module.css';


function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <hr></hr>
      <SubMainNavigation />
      <Search />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;