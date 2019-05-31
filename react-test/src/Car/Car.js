import React from 'react'
// function Car() {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car =  () => {
//     return (
//         <div>This is component sdfsdfd</div>
//     )<strong>{Math.round(Math.random() * 100)}</strong>
// }





export default (props) => (
    <div>
    <h3>This is car comdddponent {props.name}</h3>
        <p>Year: {props.year}</p>
        <p>{props.children}</p>
        <button>Click</button>
    </div>
)