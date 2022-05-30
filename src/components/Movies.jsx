import React,{useState} from 'react'
import MesFavoris from './MesFavoris'


// const addToFav=false

// addToFav = () => {
//   this.setState(
//     {
//       addToFav: !addToFav
//     },
//     () => console.log(addToFav)
//   );
// };

const Movies = (props) => {

  const [list, setList]=useState([])
  const fav=false
  


  const addToFav=(e)=>{
    e.preventDefault()
    setList([...list,{id:1 , fav:!fav}])
    console.log(list)
}

  return (
    <div className='Cards'>
    {props.arrayMovies.map(el => 
        <div >
           <br /> 
            <img className='c-im' src={el.im} alt=""/>
            <div className='content'>
            <p>{el.name}</p>
            <button onClick={addToFav} >Add to favorites</button>
            </div> 
        </div> ) }
    </div>

  )
}

export default Movies