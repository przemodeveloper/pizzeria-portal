import React from 'react';
import styles from './OrderInfo.scss';
import PropTypes from 'prop-types';

const OrderInfo = (props) => {
  return(
    <div className={styles.component}>
      <h3>Order no: {props.match.params.id}</h3>
    </div>
  );
};

OrderInfo.propTypes = {
  match: PropTypes.number,
};

export default OrderInfo;
