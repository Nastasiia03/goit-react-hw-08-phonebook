import { Routes, Route } from "react-router-dom";


import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Home } from "pages/Home";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from 'react-redux';
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
import { useEffect } from "react";

export const App = () => {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
    return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Layout>
        <GlobalStyle />
        <AppBar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        
       </Routes>
      </Layout>
    )
  }

