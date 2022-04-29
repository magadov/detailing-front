import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {
  Box, Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem, OutlinedInput,
  Select,
  TextField
} from '@mui/material';
import css from './journal.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService, loadServices } from '../../redux/features/services.reducer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [car, setCar] = useState("")
  const [client, setClient] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadServices())
  }, [dispatch])


  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeCost = (e) => {
    setCost(e.target.value)
  }

  const handleChangeClient = (e) => {
    setClient(e.target.value)
  }
  const handleAddService = () => {
    dispatch(addService(name, cost, car, client));
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addButton = { backgroundColor: 'orange', height: 57, marginLeft: 100, fontSize: 12, }
  const servInput = { width: 400, marginRight: 20}
  const addBtn = {backgroundColor: 'orange', color: 'white'}

  return (
    <div>
      <Button style={addButton} variant="contained" onClick={handleClickOpen}>
        + добавить услугу
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Добавление услуги"}</DialogTitle>
        <DialogContent>
          <DialogContentText  id="alert-dialog-slide-description">
            <div className={css.inpStyle}>
              <TextField style={servInput}  onChange={handleChangeName} id="outlined-basic" label="Название услуги" variant="outlined" />
              <TextField onChange={handleChangeCost} id="outlined-basic" label="Цена..." variant="outlined" />
            </div>
            <Box className={css.servSelect}>
              <FormControl sx= {{width: 270}} >
                <InputLabel onChange={handleChangeClient} id="demo-simple-select-label">Клиент</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="ClienTT"
                >
                  <MenuItem value={10}>Иван</MenuItem>
                  <MenuItem value={20}>Антон</MenuItem>
                  <MenuItem value={30}>Дантэс</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx ={{width: 270}}>
                <InputLabel id="demo-simple-select-label">Машина</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="ClienTT"
                >
                  <MenuItem value={10}>Иван</MenuItem>
                  <MenuItem value={20}>Антон</MenuItem>
                  <MenuItem value={30}>Дантэс</MenuItem>
                </Select>
              </FormControl>

            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={addBtn} onClick={handleAddService}>Добавить</Button>
          <Button style={addBtn} onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}