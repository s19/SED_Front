import React from "react";
import axios from "axios";
import qs from 'qs';

const API_URL = "https://localhost:44336/api/";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!login && !!password) {

    console.log(login + " " + password);  
    //const data = { 'IIN': login, 'Password': password};
    //const url = API_URL + "Login";
    // var formData = new FormData();
    // formData.append({'IIN':login}); 
    // formData.append({'Password':password}); 
    // const options = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json;' },
    //   data: qs.stringify(data),
    //   url,
    // };
    // axios(options)

    axios()
    .post(
      API_URL + "Login", {
      IIN: login,
      Password: password,
      data: {IIN:login, Password:password},
      data: { IIN:login, Password:password},
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
    .then((response) => {
      console.log(response)

      if (response.iseverythOk === true)
      {
        console.log(response);        
      }


      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem('id_token', 1);
        setError(null);
        setIsLoading(false);
        dispatch({ type: 'LOGIN_SUCCESS' });
        history.push('/app/dashboard');
      }

      return response.data;
    });

    setTimeout(() => {
      localStorage.setItem('id_token', 1)
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })

      history.push('/app/dashboard')
    }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
