import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import css from './journal.module.css'
import { useState } from 'react';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50
  },
  {
    field: 'firstName',
    headerName: 'Услуга',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Клиент',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Цена',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Время',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Иванов Сергей', firstName: 'Покраска кузова', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function Journal() {

  const [value, setValue ] = useState();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const searchStyle = { width: 700, marginRight: 165}
  return (
    <div style={{ height: 400, width: '80%', margin: '100px auto' }}>
      <div className={css.search}>
        <TextField style={searchStyle} id="outlined-basic" label="Поиск" variant="outlined" />
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx= {{width: 350}} >
            <InputLabel id="demo-simple-select-label">Месяц</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={value} onChange={(e, value) => setValue(value)}>Январь</MenuItem>
              <MenuItem value={value}>Февраль</MenuItem>
              <MenuItem value={value}>Март</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu={true}
      />
    </div>
  );
}