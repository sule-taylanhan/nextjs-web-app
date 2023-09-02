/* eslint-disable @next/next/no-img-element */
import Card from '../ui/Card.js';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router.js';
import Image from 'next/image.js';
import { useState } from 'react';

function MeetupItem(props) {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  function showDetailsHandler() {
    if (password === 'test') { // Replace 'test' with your desired password
      setShowDetails(true);
    } else {
      alert('Incorrect password. Details cannot be shown.');
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {!showDetails ? (
            <>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={showDetailsHandler}>Show Details</button>
            </>
          ) : (
            <button onClick={() => router.push("/" + props.id)}>Go to Details</button>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
