import React from 'react'
import { Route , Routes } from 'react-router-dom'

import Header from './Header'
import Cart from './Cart'
import Photos from './Photos'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}></Route>

        <Route path='/cart' element={<Cart />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
