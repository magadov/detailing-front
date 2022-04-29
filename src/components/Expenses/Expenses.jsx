import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import css from "./expenses.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMaterial } from "../../redux/features/materialReducer";
import Admission from "./Admission";


export default function Expenses() {
  const materials = useSelector(
    (state) => state.materialReducer.materials.material
  );
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMaterial());
  }, [dispatch]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const searchInputStyle = { width: 400 };
  const dateFormStyle = { width: 200 };

  if (!materials) {
    return "load";
  }

  const filtered = materials?.filter((element) => {
    return element.name?.toLowerCase().includes(search.toLowerCase());
  });

  const rows = filtered.map((item, index) => {
    return {
      id: index + 1,
      lastName: item.left,
      firstName: item.name,
      age: item.price,
      fullName: item.direction.date,
    };
  });

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
            <Admission />
          </Box>
          <Box className={css.content}>
            <h1> Список расходов </h1>
            <TableContainer style={{width: 1050}} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right" >№</TableCell>
                    <TableCell align="right">Наименование</TableCell>
                    <TableCell align="right" >Цена</TableCell>
                    <TableCell align="right">Количество</TableCell>
                    <TableCell align="right">Дата</TableCell>
                    <TableCell align="right">  </TableCell>
                    <TableCell align="right">   </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filtered.map((row, index) => (
                      <TableRow
                          key={index}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="right" style={{width: 70}}>{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.left}</TableCell>
                        <TableCell align="right">{row.direction.data}</TableCell>
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
}
