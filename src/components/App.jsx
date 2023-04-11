import { Routes, Route } from "react-router-dom";


import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Navigation } from "./Navigation/Navigation";



export const App = () => {
  
  
  
    return (
      <Layout>
        <GlobalStyle />
        <Navigation/>
        <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        
       </Routes>
      </Layout>
    )
  }

