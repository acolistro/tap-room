import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.beer} - {props.dateTapped}</h3>
        <h4><em>{props.pintsLeft}</em></h4>
        <hr />
      </div>
    </React.Fragment>
  )
}

Ticket.PropTypes = {
  beer: PropTypes.string.isRequired,
  dateTapped: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;