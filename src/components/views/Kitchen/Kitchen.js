import React from 'react';
import MaterialTable from 'material-table';

// const demoContent = [
//   { title: 'Table', field: 'table', type: 'numeric'},
//   { title: 'Order', field: 'order', type: 'numeric'},
//   { title: 'Dish', field: 'dish'},
//   { title: 'Dish prepared?', field: 'dishprep', lookup: { 0: 'Yes', 1: 'No'},
//   },
// ];

// const demoContentOrder = [
//   { table: 1, order: 165, dish: 'double cheese pizza', dishprep: 1 },
//   { table: 2, order: 921, dish: 'salad', dishprep: 1 },
//   { table: 3, order: 854, dish: 'coffee', dishprep: 1 },
//   { table: 4, order: 231, dish: 'taco', dishprep: 1 },
//   { table: 5, order: 643, dish: 'kebab', dishprep: 1 },
//   { table: 6, order: 981, dish: 'chicken sandwich', dishprep: 1 },
// ];

const Kitchen = () => {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Table', field: 'table', type: 'numeric'},
      { title: 'Order', field: 'order', type: 'numeric'},
      { title: 'Dish', field: 'dish'},
      { title: 'Dish prepared?', field: 'dishprep', lookup: { 0: 'Yes', 1: 'No'},
      },
    ],
    data: [
      { table: 1, order: 165, dish: 'double cheese pizza', dishprep: 1 },
      { table: 2, order: 921, dish: 'salad', dishprep: 1 },
      { table: 3, order: 854, dish: 'coffee', dishprep: 1 },
      { table: 4, order: 231, dish: 'taco', dishprep: 1 },
      { table: 5, order: 643, dish: 'kebab', dishprep: 1 },
      { table: 6, order: 981, dish: 'chicken sandwich', dishprep: 1 },
    ],
  });

  return(
    <MaterialTable
      title="Kitchen"
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

export default Kitchen;
