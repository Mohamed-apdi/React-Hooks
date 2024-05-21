import React, { useContext } from 'react'
import { AppContext } from '../Hooks/Context'

const Contact = () => {

    const phone = useContext(AppContext)
  return (
    <>
    <h2>Contact</h2>
    <h3>Phone: {phone}</h3>
    
    </>
    )
}

export default Contact