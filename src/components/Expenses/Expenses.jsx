import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {TextField} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import css from './expenses.module.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'firstName',
        headerName: 'Наименование',
        width: 300,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Количество',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Цена',
        type: 'number',
        width: 100,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Дата',
        type: Date,
        sortable: false,
        width: 160,

    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Expenses() {
    const inputStyle = {width: 300, marginTop: 100}
    const formStyle = {width: 700}

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <div className={css.inputFormMain}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={inputStyle}/>
                        <Box sx={{ minWidth: 120 }} style={formStyle}>
                            <FormControl sx={{width: 200}} >
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div style={{ height: 400, width: '90%', margin: "200px auto"}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </Box>
            </Container>


        </>
    );
}