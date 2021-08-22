import React from 'react'

const Error = (props) => {

  return (
    <p className="alert alert-danger error">{props.message}</p>
  )
  
}

export default Error;