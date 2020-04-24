import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';


function KegList(props){

  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((keg) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          beer={ keg.beer }
          dateTapped={ keg.dateTapped }
          pintsLeft={ keg.pintsLeft }
          id={ keg.id }
          key={ keg.id } />
      )}
    </React.Fragment>
  );
}

KegList.PropTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;