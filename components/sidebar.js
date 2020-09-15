import { useState } from 'react'
import Modal from '../components/modal'
import MovieCreateForm from './movieCreateForm'


// Containment example
const Sidebar = (props) => {
  const {categories} = props
  return (
    <>
      <Modal>
        <MovieCreateForm/>
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