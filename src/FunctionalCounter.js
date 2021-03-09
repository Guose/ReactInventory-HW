import React from 'react';

function FunctionalCounter() {
    let count = 10;
    function add() {
        count++;
        console.log("count: ", count);
    }
    function minus() {
        count--;
        console.log("count: ", count);
    }
    console.log("count: ", count);
    return (
        <div className="container">
            <h1> Jacket: </h1>
            <h1> {count} </h1>
            <button onClick={add}><h1> + </h1></button>
            <button onClick={minus}><h1> - </h1></button>
        </div>
    )
}

export default FunctionalCounter;