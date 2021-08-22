import React, {useState} from 'react'
import shortid from 'shortid';
import Error from './error';

const Form = (props) => {

  const [ name, setName ] = useState('');
  const [ quantity, setQuantity ] = useState(0);
  const [ error, setError ] = useState(false);

  const addExpense = e => { 

    e.preventDefault();

    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {

      setError(true)
    }
    setError(false)

    const expenses = {
      name,
      quantity,
      id: shortid.generate()
    }

    props.addNewExpenses(expenses)

    // Reset Form
    setName('');
    setQuantity(0);


  }
  return ( 
    <form
      onSubmit={addExpense}
    >
      <h2> Put your expenses here</h2>

      { error ? <Error message='The budget is not corret' /> : null}
      <div className="campo">
        <label>Name</label>
        <input type="text"
          className="u-full-width"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Quantity</label>
        <input type="number"
          className="u-full-width"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
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