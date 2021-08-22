import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/form';
import List from './components/List';
import ControlBudget from './components/controlBudget';


function App() {
  

  const [ budget, setBudget] = useState(0);
  const [ rest, setRest] = useState(0);
  const [ showQuestion, setShowQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ])

      const budgetRest = rest - expense.quantity;
      setRest(budgetRest);

      setCreateExpense(false);
    }

  }, [expense, createExpense, expenses, rest]);
  
  return (
    <div className="container">
      <header>
      <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          {
            showQuestion ? (
              <Question
              setBudget={setBudget}
              setRest={setRest}
              setShowQuestion={setShowQuestion}
            />
            ) : 
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <ControlBudget
                  rest={rest}
                  budget={budget}
                />
              </div>
            </div>
          }
          
        </div>
      </header>
    </div>

  );
}

export default App;
