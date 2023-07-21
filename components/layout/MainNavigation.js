import classes from './MainNavigation.module.css';
import Link from "next/link";
import Footer from "./Footer"

function MainNavigation() {
  return (
    <div>
    <header className={classes.header}>
      <div className={classes.logo}>IKRA</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Vird</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Vird</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Footer />
    </div>
  );
}

export default MainNavigation;