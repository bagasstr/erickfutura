import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../page/Product'
import About_us from '../page/About_us'
import Contact from '../page/Contact'
import Profile from '../page/Profile'
import HomePage from '../page/HomePage'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<Product />} />
      <Route path='/about' element={<About_us />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Router
