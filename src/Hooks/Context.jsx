import React, { Children, createContext } from 'react'

export const AppContext = createContext();



const Context = (props) => {

    const phone = "+252 12345678"

    //that allows you access data from any component without explicity passing it down through props at level
  return (

    <AppContext.Provider value={phone}>
        {props.children}
    </AppContext.Provider>
  )
}

export default Context