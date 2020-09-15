import { useState } from 'react'
import Modal from '../components/modal'


const Sidebar = (props) => {
  const {categories} = props
  return (
    <>
      <Modal/>
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