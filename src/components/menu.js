import React, { Component } from 'react'
import Plain from './plain'
import Pepperoni from './pepperoni'
import MeatLover from './meat-lover'
import Veggie from './veggie'
import './css/menu.css'

const Menu = () => {
  return(
    <div className='container-fluid Menu'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Plain/>
        <Pepperoni/>
        <MeatLover/>
        <Veggie/>
      </div>
    </div>
  )
}

export default Menu
