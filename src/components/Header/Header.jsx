import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import css from "./header.module.css";
import Wallet from "@mui/icons-material/AccountBalanceWalletRounded";
import { NavLink } from "react-router-dom";

const headerStyle = { background: "black", height: 90 };
const walletStyle = { color: "orange", fontSize: 30, marginRight: 10};
const navbarStyle = { marginRight: "50px" };
const tabStyle = { marginLeft: 0 };

const Header = () => {
  const [value, setValue] = useState();
  const [malue, setMalue] = useState();

  return (
    <AppBar style={headerStyle} position="static">
      <div className={css.main}>
        <Container fixed>
          <Toolbar disableGutters>
            <div className={css.navbar}>
              <div className={css.menu}>
                <Tabs
                  style={tabStyle}
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  TabIndicatorProps={{ style: { backgroundColor: "orange" } }}
                >
                  <Tab
                    className={navbarStyle}
                    as={NavLink}
                    to="/journal"
                    label="Журнал"
                  />
                  <Tab className={navbarStyle} label="Клиент" />
                  <Tab className={navbarStyle} label="Расходы" />
                  <Tab className={navbarStyle} label="Отчёты" />
                </Tabs>
              </div>
              <div className={css.iconStyle}>
                <div className={css.kassa}>
                  <Wallet style={walletStyle} />
                  <span className={css.sum}> 2313 RUB </span>
                </div>
                <div>
                  <Tabs
                    style={tabStyle}
                    textColor="inherit"
                    value={malue}
                    onChange={(e, malue) => setMalue(malue)}
                    TabIndicatorProps={{ style: { backgroundColor: "orange" } }}
                  >
                    <Tab style={navbarStyle} label="Выход" />
                  </Tabs>
                </div>
              </div>
            </div>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
};
export default Header;
