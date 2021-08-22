import React from 'react'
import Expense from './Expense';

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
 
export default List;