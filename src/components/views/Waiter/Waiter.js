import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    fetchStatus: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(table, status) {
    const {fetchStatus} = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => fetchStatus(table, 'thinking')}>thinking</Button>
            <Button color="primary" variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button color="primary" variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => fetchStatus(table, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => fetchStatus(table, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => fetchStatus(table, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => fetchStatus(table, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    //console.log('tables: ', tables);

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (

        <Paper className={styles.component}>

          <Typography variant="h5">WAITER WORKFLOW</Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.table}>
                  <TableCell component="th" scope="row">
                    {row.table}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.table, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

Waiter.propTypes ={
  tables: PropTypes.object,
};

export default Waiter;
