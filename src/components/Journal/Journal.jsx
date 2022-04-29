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
import css from "./journal.module.css";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, loadServices } from "../../redux/features/services.reducer";
import AlertDialogSlide from "./journalModal";

export default function Journal() {
  const services = useSelector((state) => state.servicesReducer.services.serv);
  const loading = useSelector((state) => state.servicesReducer.loading)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(loadServices());
  }, [dispatch]);


  const filtered = services?.filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleClickDelete = (id) => {
    dispatch(deleteService(id))
  }


  const searchStyle = { width: 400 };
  const dateFormStyle = { width: 200 };

  return (

    <>
      {!services ? loading : (
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
                <AlertDialogSlide />
              </Box>
              <Box className={css.content}>
                <h1> Список расходов </h1>
                <TableContainer style={{ width: 1050 }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">№</TableCell>
                        <TableCell style={{ borderRight: "1px solid black" }}>
                          Наименование
                        </TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Дата</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.client}</TableCell>
                          <TableCell align="right">{row.car}</TableCell>
                          <TableCell align="right">{row.cost}</TableCell>
                          <TableCell align="right">{row.createdAt}</TableCell>
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
      )}
    </>
  );
}
