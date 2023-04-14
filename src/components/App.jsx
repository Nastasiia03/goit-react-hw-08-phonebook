import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from 'react-redux';
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
import { useEffect, lazy, Suspense } from "react";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
    return isRefreshing ? (
    <b>Refreshing user...</b>
    ) : (
        <Suspense fallback={<b>Loading...</b>}>
        <GlobalStyle />
        <AppBar/>
        <Routes>
       <Route path="/" element={<Layout/>} />
        <Route index element={<HomePage/>} />
        <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<RegisterPage/>} />} />
        <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<LoginPage/>} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>} />} />
       </Routes>
      </Suspense>
    )
  }

