import classes from './SubMainNavigation.module.css';
import Link from "next/link";

function SubMainNavigation() {
  return (
    <div>
    <header className={classes.header2}>
      <nav>
        <ul>
          <li>
            <Link href='/new-meetup'>Ya Latif</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Estagfirullah</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Hasbunallah</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Lailaheillallah</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Subhanllahivebihamdihi</Link>
          </li>
          <li>
          <Link href='/new-meetup'>Allahummesalli</Link>
        </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default SubMainNavigation;