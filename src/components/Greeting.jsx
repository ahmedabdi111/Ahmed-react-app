import { Fragment } from "react";

function Greeting(props) {
    return (
    <Fragment>
    <h1>
        Hello, {props.name} {props.surname}! 
    </h1>
    <h2>This text is not there</h2>
    </Fragment>
    );
}


export default Greeting;