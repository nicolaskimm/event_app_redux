import React from 'react';
import { connect } from 'react-redux';
import actions from '../../duck/actions/eventActions';

const ResetEvents = ({reset}) => {
  const resetEvents = (event) => {
    event.preventDefault();
    reset();
  }
  
  return (
    <form onSubmit={resetEvents}>
      <button type='submit'>reset</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(actions.reset())
})
  
export default connect(null, mapDispatchToProps)(ResetEvents)