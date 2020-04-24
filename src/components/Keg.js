import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.beer} - {props.dateTapped}</h3>
        <h3>{props.brand} - {props.style} - {props.pricePerPint} - {props.alcoholContent}</h3>
        <h4><em>{props.pintsLeft}</em></h4>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  beer: PropTypes.string.isRequired,
  dateTapped: PropTypes.string.isRequired,
  brand: PropTypes.string,
  style: PropTypes.string,
  pricePerPint: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;