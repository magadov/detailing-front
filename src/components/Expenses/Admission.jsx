import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Box, TextField} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const currencies = [
    {
        value: 'none',
    },
    {
        value: 'шт',
        label: 'шт',
    },
    {
        value: 'кг',
        label: 'кг',
    },
    {
        value: 'л',
        label: 'л',
    },
];


const Admission = () => {
    const [currency, setCurrency] = React.useState('none');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addButton = {
        backgroundColor: "orange",
        fontSize: 12,
        marginLeft: 100,
        color: "white",
        height: 57
    };
    // const inputFormMain = {
    //     width: 600,
    //     margin: "auto",
    //     padding: "40px 0 0 20px",
    //     display: "flex",
    //     justifyContent: "space-between"
    // }
    const nameInput = {
        width: 500,
        margin: "0 20 20 0"
    }

    return (
        <div >
            <Button style={addButton} variant="contained" onClick={handleClickOpen} >
                + добавить материал
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle>{"Добавление материала"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div style={{textAlign: "center"}}>
                            <TextField
                                id="outlined-basic"
                                label="Наименование"
                                variant="outlined"
                                style={nameInput}
                                // onChange={(event) => setSearch(event.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Цена"
                                variant="outlined"
                                type="number"
                                style={{width: 150, marginTop: 15, marginRight: 10}}
                                // style={priceInput}
                                // onChange={(event) => setSearch(event.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Кол-во"
                                variant="outlined"
                                type="number"
                                style={{width: 100, marginTop: 15,  marginRight: 10}}
                                // onChange={(event) => setSearch(event.target.value)}
                            />
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Ед"
                                style={{width: 80, marginTop: 15}}
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Admission;