import React from "react";
const { useState, useEffect, useContext, useMemo } = React;
import { BrowserRouter } from "react-router-dom";

import AppHeader from "./components/appHeader.jsx";
import { AppForm } from "./appForm/index.jsx";
import AppCart from "./components/appCart.jsx";

export function App() {
  return (
    <div id="app">
      <AppHeader />
      <BrowserRouter>
        <AppForm />
      </BrowserRouter>
      <AppCart />
    </div>
  )
};