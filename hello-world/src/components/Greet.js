import React from 'react';

/* function Greet() {
    return <h1>Hello Navishka</h1>
} */

const Greet = props => {
    console.log(props);
    return <h1>Hello {props.name} AKA {props.heroName}!</h1>;
}

export default Greet;