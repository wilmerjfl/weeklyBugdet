import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/form';

function App() {


  const [ budget, setBudget] = useState(0);
  const [ rest, setRest] = useState(0);
  const [ showQuestion, setShowQuestion ] = useState(true);

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
            ) : null
          }
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
