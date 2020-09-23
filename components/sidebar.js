import {useState} from 'react'
import {useRouter} from 'next/router'
import Modal from '../components/modal'
import MovieCreateForm from './movieCreateForm'
import {createMovie} from "../actions";

// Containment example
const Sidebar = (props) => {
  const {categories} = props
  const router = useRouter()
  let modal = null
  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal()
      router.push('/')
    })
  }


  return (
    <>
      <Modal ref={elem => modal = elem} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((category) => {
          return (
            <a key={category.id} href="#" className="list-group-item">{category.name}</a>
          )
        })}
      </div>
    </>
  )
}

export default Sidebar