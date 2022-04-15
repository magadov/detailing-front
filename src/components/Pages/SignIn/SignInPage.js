import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
// import { useNavigate } from 'react-router'

const SignInPage = () => {
  // let navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: 400,
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { background: "orange" };
  const textFieldStyle = { marginBottom: 20, marginTop: 20 };
  const logInStyle = { background: "orange", width: 100, margin: "20px 90px" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Авторизация</h2>
        </Grid>
        <TextField
          style={textFieldStyle}
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          fullWidth
          required
        />
        <Button style={logInStyle} type="submit" variant="contained">
          {" "}
          Войти{" "}
        </Button>
        {/*{token ? navigate("/")  : "Неверный логин или пароль!" }*/}
      </Paper>
    </Grid>
  );
};

export default SignInPage;
