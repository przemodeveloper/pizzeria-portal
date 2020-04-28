import React from 'react';
import styles from './OrderInfo.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const OrderInfo = (props) => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Dish</TableCell>
            <TableCell>Amount of people</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {`${'thinking'}`}
            </TableCell>
            <TableCell>
              {props.match.params.id}
            </TableCell>
            <TableCell>
              {`${'pizza'}`}
            </TableCell>
            <TableCell>
              {`${'2'}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

OrderInfo.propTypes = {
  match: PropTypes.object,
};

export default OrderInfo;
