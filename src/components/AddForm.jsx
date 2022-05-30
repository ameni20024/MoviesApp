import React,{useState} from 'react'
import Navbar from './Navbar';

const AddForm = () => {
const [title, setTitle] =useState("");
const [imurl, setImurl] =useState("");
const [date, setDate] =useState("");

const AddFilm=(e)=>{
    e.preventDefault()
    
    console.log(title,imurl,date);
}

  return (
      
    <div className='formdiv'>
         {/* <Navbar/>  */}
         <form className='form' onSubmit={AddFilm}>
      <h1>Add a movie to our collection !</h1>

      <label>
        Movie title:
        <input type="text" placeholder="Insert movie name" value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      
      <label>
        Poster Url:
        <input type="url" placeholder="Insert poster url" value={imurl} onChange={e => setImurl(e.target.value)} required />
      </label>

      <label>
        Release date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </label>


      <button>Submit</button>
    </form>
    </div>
  )
}

export default AddForm