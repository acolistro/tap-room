import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.beer} - {keg.dateTapped}</h3>
      <h3>{keg.brand} - {keg.style} - {keg.pricePerPint} - {keg.alcoholContent}</h3>
      <h4><em>{keg.pintsLeft}</em></h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
 
      {/* <form onClick={handlePintSold}>
        <button onClick={ props.onPintSold }>Pint Sold</button>
      </form> */}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func
};

export default KegDetail;