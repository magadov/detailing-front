import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import css from "./expenses.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMaterial } from "../../redux/features/materialReducer";
import Admission from "./Admission";


const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "firstName",
    headerName: "Наименование",
    width: 300,
    sortable: false,
  },
  {
    field: "lastName",
    headerName: "Количество",
    width: 150,
    sortable: false,
  },
  {
    field: "age",
    headerName: "Цена",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "fullName",
    headerName: "Дата",
    type: Date,
    width: 160,
    sortable: false,
  },
  {
    // field: " ",
    // renderCell: (cellValues) => {
    //   return (
    //       <Button
    //           variant="contained"
    //           color="primary"
    //           // onClick={(event) => {
    //           //   handleClick(event, cellValues);
    //           // }}
    //       >
    //         удалить
    //       </Button>
    //   );
    // },
    // sortable: false,
  },
];

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
    return element.name.toLowerCase().includes(search.toLowerCase());
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



export default function Expenses() {
  const materials = useSelector((state) => state.materialReducer.materials.material);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMaterial());
  }, [dispatch]);

  const searchInputStyle = { width: 400 };
  const dateFormStyle = { width: 200 };
  const addButton = {
    backgroundColor: "orange",
    fontSize: 12,
    marginLeft: 100,
  };

  if(!materials) {
    return 'load'
  }

  const rows = materials.map((item, index) => {
    return { id: index + 1, lastName: item.name, firstName: item.name, age: item.name};
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
            <Admission/>
            {open && <Admission button={<Button/>}/>}
          </Box>
          <Box className={css.content}>
            <h1> Список расходов </h1>
            <Box style={{ height: 400, width: "90%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                components={{ Button: "dsd" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
