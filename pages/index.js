import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useState, useEffect} from 'react'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'


import {getMovies} from "../actions";


const Home = (props) => {
  const {images} = props
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar/>
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <div className="row">
                <MovieList movies={props.movies}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name
    })
  )
  return {
    movies,
    images
  }
}

export default Home