import React from 'react'
import PropTypes from 'prop-types';

const Expense = (props) => (
  <li className="gastos">
    <p>
      {props.expense.name}
      <span className="gasto">$ {props.expense.quantity}</span>
    </p>
  </li>
) 

Expense.propTypes = {
  expense: PropTypes.object.isRequired
}
export default Expense;