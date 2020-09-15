import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useState, useEffect} from 'react'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'


import {getMovies, getCategories} from "../actions";


const Home = (props) => {
  const {images, movies, categories} = props
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar categories={categories}/>
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <div className="row">
                <MovieList movies={movies}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name
    })
  )
  return {
    movies,
    categories,
    images
  }
}

export default Home