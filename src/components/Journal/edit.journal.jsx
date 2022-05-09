import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { editService } from "../../redux/features/services.reducer";
import { useState } from "react";

export default function EditJournal({ serviceId }) {
  const editing = useSelector((state) => state.servicesReducer.editing);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  const saveChange = (id) => {
    dispatch(editService(id, name, cost));
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{ background: "orange", fontSize: 8, color: "white" }}
      >
        Изменить
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Редактирование</DialogTitle>
        <DialogContent style={{ margin: "auto" }}>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-basic"
              label="Наименование"
              variant="outlined"
              type="text"
              value={name}
              onChange={handleChangeName}
              style={{ width: 200, marginTop: 15, marginRight: 10 }}
            />
            <TextField
              id="outlined-basic"
              label="Цена"
              variant="outlined"
              type="number"
              value={cost}
              onChange={handleChangeCost}
              style={{ width: 100, marginTop: 15, marginRight: 10 }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={editing}
            onClick={() => saveChange(serviceId)}
            autoFocus
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
