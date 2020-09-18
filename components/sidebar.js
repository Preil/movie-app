import { useState } from 'react'
import Modal from '../components/modal'
import MovieCreateForm from './movieCreateForm'
import {createMovie} from "../actions";

// Containment example
const Sidebar = (props) => {
  const {categories} = props

  const handleCreateMovie = (movie) =>{
    createMovie(movie).then((movies)=>{
      console.log(JSON.stringify(movies))
    })
  }


  return (
    <>
      <Modal hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((category)=>{
          return (
            <a key={category.id} href="#" className="list-group-item">{category.name}</a>
          )
        })}
        </div>
    </>
  )
}

export default Sidebar