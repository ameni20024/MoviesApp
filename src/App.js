import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import MesFavoris from './components/MesFavoris';
import AddForm from './components/AddForm';
import SearchMovie from './components/SearchMovie';
import { useState } from 'react';


const array=[
  {item:"Acceuil"},
  {item:"Mes Favoris"},
  {item:"Ajout Film"}
]
const arrayMovies=[
  {id:1, im:'https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg', name:'Spider-Man'},
  {id:2, im:'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg', name:'Get Out'},
  {id:3, im:'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', name:'Requiem for a Dream'},
  {id:4, im:'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg', name:'The Wolf of Wall Street'},
  {id:5, im:'https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX1000_.jpg', name:'12 Years a Slave'},
  {id:6, im:'https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg', name:'The Dark Knight'},
  {id:7, im:'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg', name:'The Lord of the Rings'},
  {id:8, im:'https://img-4.linternaute.com/hjM5dgLFPajbUWUmTVDwLHOqt3c=/1240x/19547719906f480d80a7c0a77d93f6be/ccmcms-linternaute/127232.jpg', name:'Inception'},
  {id:9, im:'https://larrylevan20.files.wordpress.com/2016/01/film-sideways1.jpg', name:'Sideways'},
  {id:10, im:'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg', name:'Wall-E'},
  {id:11, im:'https://upload.wikimedia.org/wikipedia/en/0/06/Far_from_Heaven_%282002_film%29_poster.jpg', name:'Far from Heaven'},
  {id:12, im:'https://fr.web.img6.acsta.net/pictures/16/03/14/15/43/333184.jpg', name:'hush'},
  {id:13,im:'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', name:'The Social Network'},
  {id:14 ,im:'https://img.betaseries.com/wUMEAEmDpqgDl5N22LxypX5zejQ=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffilms%2Faffiches%2Foriginal%2F386.jpg', name:'The Departed'},
  {id:15,im:'https://m.media-amazon.com/images/M/MV5BMTkzODMwNDkzOF5BMl5BanBnXkFtZTgwNDA4NzA1ODE@._V1_.jpg', name:'the invitation'},
  {id:16,im:'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg', name:'Moonlight'},
  {id:17,im:'https://fr.web.img4.acsta.net/medias/nmedia/18/35/16/02/18380826.jpg', name:'Spider-Man 2'},
  {id:18,im:'https://fr.web.img5.acsta.net/pictures/14/03/10/10/26/014107.jpg', name:'Her'}

]

function App() {

  return (
    <div className="App">
      {/* <Navbar array={array}/> 
      <Movies arrayMovies={arrayMovies}/>   */}

      {/* <Acceuil/>
      <AddForm/> */}

       {/* <SearchMovie/>   */}




      {/* <MesFavoris/> */}

        <BrowserRouter>
      <Switch>
        <Route path='/acceuil' component={Acceuil}/>
        <Route exact path='/Mes Favoris' component={MesFavoris}/>        
        <Route exact path='/Ajout Film' component={AddForm}/> 
        
       </Switch>
      
      </BrowserRouter>   

    </div>
  );
}

export default App;
