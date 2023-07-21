/* eslint-disable @next/next/no-img-element */
import classes from "./MeetupDetail.module.css"
import { Fragment } from "react";
function MeetupDetail(props){
     return (
        <section className={classes.detail}>
            <img
            src={props.image} 
            alt={props.title}
            />
        <h1>Dua Title : {props.title}</h1>
         <address>Dua Meaning : {props.address}</address>
         <p>Description : {props.description}</p>
     </section>
     )
     
}
export default MeetupDetail;