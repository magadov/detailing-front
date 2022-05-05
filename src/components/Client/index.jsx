import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, loadClients } from "../../redux/features/clients.reducer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import CarModal from "./CarModal";
import { loadCars } from "../../redux/features/cars.reducer";

const Client = () => {
  const clients = useSelector((state) => state.clientsReducer.clients.client);
  const cars = useSelector((state) => state.carsReducer.cars.cars);
  const loading = useSelector((state) => state.clientsReducer.loading);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [id, setId] = useState(null);

  console.log(id)
  useEffect(() => {
    dispatch(loadClients());
    dispatch(loadCars());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    const {value} = e.target;
    setId(value);
  }

  const handleClickDelete = (id) => {
    dispatch(deleteClient(id))
  };
  // const carsByClients = cars?.filter((car) => car.client === clients._id)

  const classes = {
    searchInputStyle: {
      width: 400
    },
    dateFormStyle: {
      width: 200
    },
    addButton: {
      backgroundColor: "orange",
      fontSize: 12,
      marginLeft: 100,
    },
    inputForMain: {
      width: 1000,
      padding: '40px 0 0 20px',
      display: "flex",
      justifyContent:"space-between"
    },
    content: {
      padding: "70px 0 0 20px"
    }
  }


  const filtered = clients?.filter((element) => {
    return (
      element.firstName.toLowerCase().includes(search.toLowerCase()) ||
      element.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
    {loading ? (
        "Загрузка..."
      ) : (
        <Container maxWidth="lg">
          <Box sx={{ height: "100vh" }}>
            <Box style={classes.inputForMain}>
              <TextField
                id="outlined-basic"
                label="Поиск"
                variant="outlined"
                style={classes.searchInputStyle}
                onChange={(event) => setSearch(event.target.value)}
              />
              <CarModal />
            </Box>
            <Box style={classes.content}>
              <h1> Клиенты </h1>
              <TableContainer style={{ width: 1050 }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">№</TableCell>
                      <TableCell>Имя</TableCell>
                      <TableCell align="right">Контакты</TableCell>
                      <TableCell align="right">Машина</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filtered?.map((row, index) => (
                      <TableRow
                        onChange={handleSelectChange}
                        key={index}
                        value={row}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="right" style={{ width: 70 }}>
                          {index + 1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.firstName} {row.lastName}
                        </TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        {/*{carsByClients?.map((car) => {*/}
                        {/*  return (*/}
                        {/*    <TableCell align="right">{car.vinData.model}</TableCell>*/}
                        {/*  )*/}
                        {/*})}*/}
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ background: "orange", fontSize: 8 }}

                          >
                            изменить
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ background: "orange", fontSize: 8 }}
                            onClick={() => {handleClickDelete(row._id)}}
                          >
                            удалить
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Client;
