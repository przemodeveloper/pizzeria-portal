import React from 'react';
import MaterialTable from 'material-table';

const NewOrder = () => {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Table', field: 'table', type: 'numeric'},
      { title: 'Amount of people', field: 'amount', type: 'numeric'},
      { title: 'Dish', field: 'dish'},
      { title: 'Total price', field: 'price', type: 'numeric'},
      { title: 'Remarks', field: 'remark'},
      { title: 'Status', field: 'status'},
    ],

    data: [
      { table: 1, amount: 1, dish: 'double cheese pizza', price: 25, status: 'thinking'},
    ],
  });

  return(
    <MaterialTable
      title="New Order"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};

export default NewOrder;
