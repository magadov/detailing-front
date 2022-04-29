import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "../../redux/features/clients.reducer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import css from "../Expenses/expenses.module.css";
import { Button, TextField } from "@mui/material";
import CarModal from "./CarModal";
import { loadCars } from "../../redux/features/cars.reducer";

const Client = () => {
  const clients = useSelector((state) => state.clientsReducer.clients.client);
  const cars = useSelector((state) => state.carsReducer.cars.cars);
  const dispatch = useDispatch();

  const [search, setSearch] = React.useState("");
  const filtered = clients?.filter((element) => {
    return (
      element.client.firstName.toLowerCase().includes(search.toLowerCase()) ||
      element.client.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(cars);

  useEffect(() => {
    dispatch(loadClients());
    dispatch(loadCars());
  }, [dispatch]);

  const searchInputStyle = { width: 400 };
  const dateFormStyle = { width: 200 };
  const addButton = {
    backgroundColor: "orange",
    fontSize: 12,
    marginLeft: 100,
  };
  if (!clients) {
    return "load";
  }
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Box className={css.inputFormMain}>
            <TextField
              id="outlined-basic"
              label="Поиск"
              variant="outlined"
              style={searchInputStyle}
              onChange={(event) => setSearch(event.target.value)}
            />
            <CarModal />
          </Box>
          <Box className={css.content}>
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
                  {filtered.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right" style={{ width: 70 }}>
                        {index + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.client.firstName} {row.client.lastName}
                      </TableCell>
                      <TableCell align="right">{row.client.phone}</TableCell>
                      <TableCell align="right">{row.vinData.model}</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ background: "orange", fontSize: 8 }}
                          // onClick={(event) => {
                          //   handleClick(event, cellValues);
                          // }}
                        >
                          изменить
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ background: "orange", fontSize: 8 }}
                          // onClick={(event) => {
                          //   handleClick(event, cellValues);
                          // }}
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
    </>
  );
};

export default Client;
