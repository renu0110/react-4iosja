import React from 'react';

// function Greet(){
//   return <h1> Hi Renuka </h1>
// }

export const Greet = (props) => {
  console.log(props)
  return (
    <div>
   <h1> Hi {props.name} my age is {props.age}</h1>
   {props.children}
   </div>
  )
}

// export default Greet
