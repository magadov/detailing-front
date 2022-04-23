import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import css from './journal.module.css'
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../redux/features/services.reducer';

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
    headerAlign: 'center',
  },
  {
    field: 'carName',
    headerName: 'Услуга',
    width: 150,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'lastName',
    headerName: 'Клиент',
    width: 150,
    editable: true,
    headerAlign: 'center'
  },
  {
    field: 'cost',
    headerName: 'Цена',
    type: 'number',
    width: 110,
    editable: true,
    headerAlign: 'center'
  },
  {
    field: 'createdAt',
    headerName: 'Время',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    headerAlign: 'center'
  },
];

// const rows = [
//   { id: 1, lastName: 'Иванов Сергей', firstName: 'Покраска кузова', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



export default function Journal() {


  const services = useSelector((state) => state.servicesReducer.services.serv)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(loadServices());
  },[dispatch]);


if(!services){
  return "Loading..."
}

  const filtered = services?.filter((elem) =>{
    return elem.name.toLowerCase().includes(search.toLowerCase());
  })

const rows = filtered.map((item, index) => {
  return (
    {
      id: index + 1,
      lastName: item.client,
      carName: item.car,
      firstName: item.name,
      cost: item.cost,
      createdAt: item.createdAt
    }
  )
})

  const searchStyle = { width: 700, marginRight: 165}
  const addButton = { backgroundColor: 'orange', marginLeft: 100, fontSize: 12, width: 300 }
  const dateFormStyle = { width: 300 }
  return (
    <>
    <Container maxWidth="lg">

      <Box sx={{ height: '100vh' }} >
        <Box className={css.search}>
          <TextField onChange={(e) => { setSearch(e.target.value)}} style={searchStyle} id="outlined-basic" label="Поиск" variant="outlined" />
          {/*<Box sx={{ minWidth: 120 }}>*/}
            <FormControl sx= {{width: 350}} >
              <InputLabel id="demo-simple-select-label">Дата</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Январь</MenuItem>
                <MenuItem value={20}>Февраль</MenuItem>
                <MenuItem value={30}>Март</MenuItem>
              </Select>
            </FormControl>
          <Button variant='contained' style={addButton}>
            + добавить услугу
          </Button>
          {/*</Box>*/}
        </Box>
        <DataGrid
          boxShadow='3'
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          disableColumnMenu={true}
        />
      </Box>

    </Container>
    </>
  );
}