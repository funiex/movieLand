import React from 'react'
import {useState,useEffect} from 'react';
import'./App.css';
import MovieCard from './MovieCard';
import SearchIcon from"./search.svg";


//8d6b22d0
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=8d6b22d0';



const App =()=>{
const [movies,setMovies]=useState([]);
const [searchTerm,setsearchTerm]=useState(' ');
        const searchMovies=async(title)=>{
          const response=await fetch(`${API_URL}&s=${title}`);
          const data = await response.json();
          setMovies(data.Search);
        }
        useEffect( ()=>{
          searchMovies('Spiderman');              
        },[]);
        return(
          <div className='app'>
          <h1>Movieland</h1>
          <div className='search'>
 <input placeholder='search for movies'
  value={searchTerm}
  onChange={(e)=> setsearchTerm(e.target.value)}
 />
 <img 
 src={SearchIcon}
 alt="search"
 onClick={ ()=> searchMovies(searchTerm)}
 />
          </div>

          {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
         
          </div>      
   );
}
export default App;