import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Playing from './components/Playing'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import Popular from './components/Popular';
import GenreMovies from './components/GenreMovies';
import ActorDetails from './components/ActorDetails';
import MovieDetails from './components/MovieDetails';
import Reviews from './components/Reviews';
import SearchMovie from './components/SearchMovie';

import logoImage from './assets/react.svg'  // Import the image

function App() {


  return (

    <Router>
     <Header  logoImage={logoImage} />
      <Routes>
        <Route path="/" element={<Playing />} />
          
        
        {/* Ruta para los detalles de una película */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/genre/:id" element={<GenreMovies />} />
        <Route path="/actor/:id" element={<ActorDetails />} />
        <Route path="/movie/:id/reviews" element={<Reviews />} />
        <Route path="/search/:query" element={<SearchMovie />} />
      </Routes>
    </Router>
  )
}

export default App
