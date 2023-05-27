/* eslint-disable @next/next/no-img-element */
import Card from '../ui/Card.js';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router.js';
import Image from 'next/image.js';
import { useState } from 'react';

function MeetupItem(props) {
  const [count, setCount] = useState(0);
  const router = useRouter()
  function showDetailsHandler(){
    router.push("/" + props.id) // we need to defined meetupId based on new details meetups
  }
  function counterHandler() {
    let countAmount = 10;
    if (count < countAmount) {
      setCount(count + 1);
    }
    // router.push("/" + props.id) // we need to defined meetupId based on new details meetups
  }
  const progressStyles = {
    '--progress': count,
    '--progress-transition': 'transform 0.2s ease',
  };

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
        <div  className={`${classes.progressButton}`}  onClick={counterHandler} style={progressStyles}>
      <span>{count}%</span>
    </div>
        <div className={classes.actions}>
          <button  onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;