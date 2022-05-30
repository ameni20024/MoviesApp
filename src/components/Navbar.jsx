import React,{useState} from 'react'
import logo from '../img/lo.png'
import SearchMovie from './SearchMovie'



const Navbar = (props) => {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='bg-area' >
         <div className='navbar'>
        <div className='logo-name'>
        <img className='logo' src={logo}/>
        <h1> WatchMovies </h1></div>
        <ul className='navItems'>
            {props.array.map(el=>
                <li>
                  <a href={el.item}> {el.item}</a></li>)}
        </ul>

        <form class="d-flex">
          <input  type="search" placeholder="Rechercher un film" aria-label="Search" 
         onChange={inputHandler}/>   
        {/* <input
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        /> */}
         <SearchMovie input={inputText}/>  
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
   
    </div>
    </div>
  )
}

export default Navbar