import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({beer: event.target.beer.value, dateTapped: event.target.dateTapped.value, brand: event.target.brand.value,style: event.target.style.value, pricePerPint: event.target.pricePerPint.value, alcoholContent: event.target.alcoholContent.value, id: keg.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditTicketForm;