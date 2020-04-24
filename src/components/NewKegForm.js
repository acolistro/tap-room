import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      beer: event.target.beer.value, 
      dateTapped: event.target.dateTapped.value,
      pintsLeft: event.target.pintsLeft.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='beer'
          placeholder='Beer Name' />
        <input
          type='text'
          name='dateTapped'
          placeholder='Date Keg was Tapped' />
        <input
          type='text'
          name='pintsLeft'  
          placeholder='Pints Left in this Keg' />  
          <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;