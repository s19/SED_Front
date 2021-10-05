import React, { useState } from "react";
//import { Fragment } from "react";
import {
    Grid,
    CircularProgress,
    Typography,
    Tabs,
    Tab,
    Fade,
    FormLabel,
  } from "@material-ui/core";

  // styles
import useStyles from "./loginStyle";
import Logo from '../../images/logo.svg'; // Import using relative path

// import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  
  var classes = useStyles();
  var [activeTabId, setActiveTabId] = useState(0);

  var [isLoading, setIsLoading] = useState(false);
  //var userDispatch = useUserDispatch();
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  var [error] = useState(null); //setError

  var [eSign, setClassForInput] = useState(true);
  let colorInput = eSign === true ? classes.formControl2 : classes.formControl;
  
  return (
    
    <div>
      <Grid container className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formLogo}>
            <img src={Logo} className={classes.rotate} alt="logo"/>
          </div>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab 
              onClick={function() {
                setClassForInput(true);
                setActiveTabId(0);
                setIsLoading(false);
              }} 
              label="ЭЦП" 
              classes={{ root: classes.tab }}
              />
            <Tab
              onClick={function() {
                setClassForInput(false);
                setActiveTabId(1);
                setIsLoading(false);
              }}  
              label="ИИН" 
              classes={{ root: classes.tab }} />
          </Tabs>
          <React.Fragment>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <FormLabel class={classes.text}>LOREM TEMPLATE LOGIN</FormLabel>
              <input 
                placeholder="IIN"
                type="text" 
                class={colorInput} 
                required="" 
                autofocus="" 
                disabled={
                  activeTabId === 0
                }
                onChange= {(e) => 
                  setLoginValue(e.target.value)}
                value={loginValue}
                />
              <FormLabel class={classes.text}>LOREM TEMPLATE PASSWORD</FormLabel>
              <input 
                placeholder="PWD"
                type="password" 
                class={colorInput} 
                required="" 
                autofocus=""
                disabled={
                  activeTabId === 0
                }
                onChange= {(e) => 
                  setPasswordValue(e.target.value)}
                value={passwordValue}
                 />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26}/>
                ) : (
                  <button 
                    class={classes.btnSignIn}
                    disabled={
                      activeTabId === 0 ||
                      loginValue.length === 0 ||
                      passwordValue.length === 0
                    }
                    onClick={function() {
                      setIsLoading(true);
                    }} 
                    >Войти
                  </button>
                )}
              </div>
          </React.Fragment>

          {/* {activeTabId === 1} */}
          
          <p color="primary" className={classes.copyright}>
              © 2019-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.udp-rk.kz/ru/organizations/45475/" rel="noopener noreferrer" target="_blank">TEC</a>, JSC. All rights reserved.
          </p>
        </div>
      </Grid>
    </div>
    
  );
}

export default Login;
