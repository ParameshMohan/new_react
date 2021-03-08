import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./folder/login";
import Home from "./folder/homePage/home";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Inbox1 from "./folder/homePage/stock/inbox1";

const App = () => {
  return (
    <>
      {/* // <div > */}

      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route
          path="/folder/homePage/stock/indbox1"
          component={Inbox1}
          // render={() => (
          //   <div>
          //     <Inbox1 />
          //   </div>
          // )}
        />
        <Route
          path="/Starred"
          render={() => (
            <div>Page starredhjghjghjhjhjhjhjhjhjhjhjhjhjhj jkkkkkkkkk kjk</div>
          )}
        />
      </Switch>

      {/* // </div> */}
    </>
  );
};

export default App;
