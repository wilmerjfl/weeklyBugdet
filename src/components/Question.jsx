import React, { Fragment, useState } from 'react';
import Error from './error';
import PropTypes from 'prop-types';

const Question = (props) => {

  const [money, setMoney] = useState(0);
  const [error, setError] = useState(false);

  const saveMoney = e => {
    setMoney(parseInt(e.target.value, 10))
  }

  const defineBudget = e => {
    e.preventDefault();

    if (money < 1 || isNaN(money)) {
      setError(true);
      return;
    }

    setError(false);

    props.setBudget(money);
    props.setRest(money);
    props.setShowQuestion(false);

  }

  return(
    <Fragment>
    <h2>Put your budget</h2>
    {
      error ? <Error message="Budget is not valid"/> : null
    }

    <form
      onSubmit={defineBudget}
    >
      <input 
        type="text"
        className="u-full-width"
        placeholder="Put your budget" 
        onChange={saveMoney}
      />

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Define your budget"
      />
    </form>
  </Fragment>
  )

}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRest: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
}

export default Question;