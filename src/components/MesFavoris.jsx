
// import React, { Component } from 'react'
// import Movies from './Movies';

// export default class MesFavoris extends React.Component {
//   constructor(props){
//     super(props);


//     this.state = {
      
//       addToFav: false
//     };
//   }

//   addToFav = () => {
//     this.setState(
//       {
//         addToFav: !this.state.addToFav
//       },
//       () => console.log(this.state.addToFav)
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Movies/>

//       </div>
//     )
//   }
// }


import React,{useState} from 'react'

const MesFavoris = () => {

  const [list, setList]=useState([])

  const addToFav=(e)=>{
    e.preventDefault()
    setList([...list,'c'])
    console.log(list)
}

  return (
    <div>
      <h1>hello</h1>
      <button onClick={addToFav}>addToFav</button>
    </div>
  )
}

export default MesFavoris