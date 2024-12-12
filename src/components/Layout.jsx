import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/footer'

function layout  () {
  return (
  <>
  <Header />
  <Outlet />
  <Footer />
  
  </>

  )
}

export default layout
