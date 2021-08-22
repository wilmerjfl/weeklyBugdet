import React from 'react'

const Expense = (props) => (
  <li className="gastos">
    <p>
      {props.expense.name}
      <span className="gasto">$ {props.expense.quantity}</span>
    </p>
  </li>
) 
 
export default Expense;