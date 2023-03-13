import React from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom"
import { LoginForm } from './pages/loginForm.jsx'
import { AddressForm } from './pages/addressForm.jsx'

export function AppForm () {
 return (
  <div id="app-form" className="app-component">
    <>
      <Routes>
        <Route path='' element={<Navigate to="/login" />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/address' element={<AddressForm />} />
        <Route path='/payment' element={<LoginForm />} />
        <Route path='/confirmation' element={<LoginForm />} />
      </Routes>
    </>
  </div>
 )
};

