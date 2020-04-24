import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      beer: event.target.beer.value, 
      dateTapped: event.target.dateTapped.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      pricePerPint: event.target.pricePerPint.value,
      alcoholContent: event.target.alcoholContent.value,
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
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='style'
          placeholder='Style of Beer' />
        <input
          type='text'
          name='pricePerPint'
          placeholder='Price per Pint' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <input
          type='int'
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