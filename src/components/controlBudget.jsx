import React, { Fragment } from 'react'
import { checkBudget } from '../helper';
import PropTypes from 'prop-types';

const ControlBudget = (props) => {


  return ( 
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {props.budget}
      </div>
      <div className={checkBudget(props.budget, props.rest)}>
        Restante: $ {props.rest}
      </div>
    </Fragment>
   );
}

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
}

export default ControlBudget;