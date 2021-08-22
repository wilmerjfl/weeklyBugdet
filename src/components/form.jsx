import React, {useState} from 'react'

const Form = () => {

  
  return ( 
    <form>
      <h2> Put your expenses here</h2>

      <div className="campo">
        <label>Name</label>
        <input type="text"
          className="u-full-width"
        />
      </div>

      <div className="campo">
        <label>Quantity</label>
        <input type="number"
          className="u-full-width"
        />
      </div>

      <input 
        type="submit"
        className="button-primary u-full-width"
        value="add expenses"
      />
    </form>
   );
}
 
export default Form;