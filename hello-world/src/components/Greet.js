import React from 'react';

/* function Greet() {
    return <h1>Hello Navishka</h1>
} */

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>Hello {name} AKA {heroName}!</h1>
            {/* {props.children}  */}
        </div>   
    )
}

export default Greet;