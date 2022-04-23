import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../redux/features/application";
import { useNavigate } from 'react-router'

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);
  const token = useSelector((state) => state.application.token);


  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
  };

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
          onChange={handleChangeLogin}
          value={login}
          label="Логин"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-password-input"
          label="Пароль"
          type="password"
          onChange={handleChangePassword}
          value={password}
          autoComplete="current-password"
          fullWidth
          required
        />
        <Button
          style={logInStyle}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          disabled={signingIn}
        >
          Войти
        </Button>
        <div>
          {error}
        </div>
      </Paper>
    </Grid>
  );
};

export default SignInPage;
