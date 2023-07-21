import classes from './GoDuaDetails.module.css';

function GoDuaDetails(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default GoDuaDetails;