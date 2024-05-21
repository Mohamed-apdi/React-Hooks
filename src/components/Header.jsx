import React from 'react'

const Header = (props) => {
    console.log("Header Rendered!")
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)