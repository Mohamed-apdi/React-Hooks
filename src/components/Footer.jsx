import React from 'react'
import { AppContext } from '../Hooks/Context'
import { useContext } from 'react'

const Footer = () => {
    const phone = useContext(AppContext)
  return (
    <>
    <h1>Footer</h1>
    <h3>Phone: {phone}</h3>
    </>    
  )
}

export default Footer