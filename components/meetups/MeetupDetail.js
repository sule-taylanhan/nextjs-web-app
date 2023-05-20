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
        <h1>Title : {props.title}</h1>
         <address>Adress : {props.address}</address>
         <p>Description : {props.description}</p>
     </section>
     )
     
}
export default MeetupDetail;