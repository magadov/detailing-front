import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import css from "./expenses.module.css";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "firstName",
    headerName: "Наименование",
    width: 300,
sortable: false
  },
  {
    field: "lastName",
    headerName: "Количество",
    width: 150,
    sortable: false
  },
  {
    field: "age",
    headerName: "Цена",
    type: "number",
    width: 100,
    sortable: false
  },
  {
    field: "fullName",
    headerName: "Дата",
    type: Date,
    width: 160,
    sortable: false

  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Expenses() {
  const searchInputStyle = { width: 400 };
  const dateFormStyle = { width: 200 };
  const addButton = { backgroundColor: "orange", fontSize: 12, marginLeft: 100 };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Box className={css.inputFormMain}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              style={searchInputStyle}
            />
            <TextField
              id="date"
              label="Дата"
              type="date"
              defaultValue="2020-04-05"
              style={dateFormStyle}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" style={addButton}>
              + добавить материал
            </Button>
          </Box>
          <Box className={css.content}>
            <h1> Список расходов </h1>
            <div  style={{ height: 400, width: "90%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
