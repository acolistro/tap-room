import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='beer'
          placeholder='Beer Name' />
        <input
          type='text'
          name='dateTapped'
          placeholder='Date Tapped' />
        <input
          type='text'
          name='brand'
          placeholder='Brand/Brewery' />
        <input
          type='text'
          name='style'
          placeholder='Style of Beer' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <input
          type='text'
          name='pricePerPint'
          placeholder='Price per Pint' />
        <input
          type='number'
          name='pintsLeft'
          placeholder='Pints Left in Keg' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;