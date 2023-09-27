import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Catagories from "./pages/Catagories";
import ProductsDetail from "./pages/Product/ProductsDetail";
import PageContainer from "./components/PageContainer";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { createContext } from "react";
import { useState } from "react";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const UserStatusContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {
        <UserStatusContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <Routes>
            <Route path="/" element={<PageContainer />}>
              <Route index element={<Home />} />
              <Route path="product">
                <Route index element={<Product />} />
                <Route
                  path="product-details/:id"
                  element={<ProductsDetail />}
                />
              </Route>
              <Route path="catagories" element={<Catagories />} />
              <Route
                path="cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="loginPage" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />

            {/* <Route path="*" element = {<ErrorPage />}></Route> */}
          </Routes>
        </UserStatusContext.Provider>
      }
    </>
  );
}

export default App;
