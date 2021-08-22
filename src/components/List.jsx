import React from 'react'
import Expense from './Expense';
import PropTypes from 'prop-types';

const List = (props) => {
  return ( 
    <div className="gastos-realizados">
      <h2>List Expenses</h2>
      { 
        props.expenses.map( expense => (
          <Expense
            key={expense.id}
            expense={expense}
          />
        ))
      }
    </div>
   );
}

List.propTypes = {
  expense: PropTypes.array.isRequired
}
export default List;