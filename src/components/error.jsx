import React from 'react'
import PropTypes from 'prop-types';

const Error = (props) => {

  return (
    <p className="alert alert-danger error">{props.message}</p>
  )
  
}
Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;