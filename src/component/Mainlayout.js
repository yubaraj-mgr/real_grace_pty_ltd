import React from 'react'
import Navigation from "./Navigation"
import Footer from './Footer'

const Mainlayout = ({children}) => {
  return (
    <div>
      <Navigation/>
      {children}
      <Footer/>
    </div>
  )
}

export default Mainlayout
