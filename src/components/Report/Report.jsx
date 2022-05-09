import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AlertDialogSlide from "../Journal/journalModal";
import EditJournal from "../Journal/edit.journal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteService,
  loadServices,
} from "../../redux/features/services.reducer";
import { loadCars } from "../../redux/features/cars.reducer";
import { loadClients } from "../../redux/features/clients.reducer";
import css from "../Journal/journal.module.css";

const Report = () => {
  const services = useSelector((state) => state.servicesReducer.services);
  const loading = useSelector((state) => state.servicesReducer.loading);
  const deleting = useSelector((state) => state.servicesReducer.deleting);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filtered = services.filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dispatch(loadServices());
    dispatch(loadCars());
    dispatch(loadClients());
  }, [dispatch]);

  const handleClickDelete = (id) => {
    dispatch(deleteService(id));
  };

  const searchStyle = { width: 400 };
  const dateFormStyle = { width: 200 };

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Box className={css.inputFormMain}>
            <TextField
              id="outlined-basic"
              label="Поиск"
              variant="outlined"
              style={searchStyle}
              onChange={(event) => setSearch(event.target.value)}
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
          </Box>
          <Box className={css.content}>
            <h1> Отчёты </h1>
            <TableContainer style={{ width: 1050 }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">№</TableCell>
                    <TableCell align="center">Услуга</TableCell>
                    <TableCell align="center">Клиент</TableCell>
                    <TableCell align="center">Цена</TableCell>
                    <TableCell align="center">Время</TableCell>
                    <TableCell align="center"> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filtered.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="right" style={{ width: 70 }}>
                        {index + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {row.client.firstName} {row.client.lastName}{" "}
                      </TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      <TableCell align="right">{row.createdAt}</TableCell>
                      <TableCell align="right">
                        <EditJournal serviceId={row._id} />
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={deleting}
                          style={{ background: "orange", fontSize: 8 }}
                          onClick={(event) => {
                            handleClickDelete(row._id);
                          }}
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

export default Report;
