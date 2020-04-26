import React from 'react';
import styles from './Tables.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const demoContent = [
  {hour: '10:00', table1: null, table2: 214, table3: 111, table4: null, table5: null, table6: null},
  {hour: '10:30', table1: 115, table2: null, table3: null, table4: null, table5: 119, table6: null},
  {hour: '11:00', table1: null, table2: 123, table3: null, table4: null, table5: null, table6: null},
  {hour: '11:30', table1: null, table2: null, table3: 179, table4: null, table5: null, table6: 224},
  {hour: '12:00', table1: 241, table2: null, table3: null, table4: null, table5: null, table6: null},
  {hour: '12:30', table1: null, table2: 222, table3: null, table4: null, table5: null, table6: null},
  {hour: '13:00', table1: null, table2: null, table3: 167, table4: 298, table5: null, table6: null},
  {hour: '13:30', table1: null, table2: 231, table3: null, table4: null, table5: null, table6: null},
  {hour: '14:00', table1: null, table2: null, table3: 126, table4: null, table5: null, table6: null},
  {hour: '14:30', table1: null, table2: null, table3: null, table4: 654, table5: null, table6: null},
  {hour: '15:00', table1: 576, table2: null, table3: null, table4: null, table5: null, table6: null},
  {hour: '15:30', table1: null, table2: null, table3: null, table4: 344, table5: 888, table6: 999},
  {hour: '16:30', table1: 249, table2: 654, table3: 523, table4: null, table5: null, table6: null},
  {hour: '17:00', table1: null, table2: 128, table3: null, table4: 931, table5: null, table6: null},
];



const Tables = () => {
  const classes = useStyles();
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const date = year + '-' + month + '-' + day;

  return(
    <div className={styles.component}>
      <TextField
        id="datetime-local"
        label="See bookings"
        type="datetime-local"
        defaultValue={date + 'T10:00'}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 1800, // 5 min
        }}
      />

      <Button className={classes.button} variant="contained" color="primary">
        <Link className={classes.link} to="/panel/tables/booking/new">ADD BOOKING</Link>
      </Button>

      <Button className={classes.button} variant="contained" color="primary">
        <Link className={classes.link} to="/panel/tables/event/new">ADD EVENT</Link>
      </Button>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell className={styles.header} component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {row.table1 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table1}`}>
                      {row.table1}
                    </Link>
                  )}
                </TableCell>
                <TableCell className={styles.header}>
                  {row.table2 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table2}`}>
                      {row.table2}
                    </Link>
                  )}
                </TableCell>
                <TableCell className={styles.header}>
                  {row.table3 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table3}`}>
                      {row.table3}
                    </Link>
                  )}
                </TableCell>
                <TableCell className={styles.header}>
                  {row.table4 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table4}`}>
                      {row.table4}
                    </Link>
                  )}
                </TableCell>
                <TableCell className={styles.header}>
                  {row.table5 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table5}`}>
                      {row.table5}
                    </Link>
                  )}
                </TableCell>
                <TableCell className={styles.header}>
                  {row.table6 && (
                    <Link to={`${process.env.PUBLIC_URL}/tables/bookings/${row.table6}`}>
                      {row.table6}
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </div>


  );
};

export default Tables;
