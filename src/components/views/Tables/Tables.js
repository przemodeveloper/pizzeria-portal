import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return(
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to="/panel/tables/booking/new">New booking</Link>
      <Link to="/panel/tables/events/new">New event</Link>
      <Link to="/panel/tables/booking/:id">Booking</Link>
      <Link to="/panel/tables/events/:id">Event</Link>
    </div>
  );
};

export default Tables;
