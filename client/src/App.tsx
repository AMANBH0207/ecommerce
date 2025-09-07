import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./component/Layout";
import "./assets/styles/styles.css";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import AccountLayout from "./component/AccountLayout";
import Addresses from "./pages/Addresses";
import MyOrders from "./pages/MyOrders";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<AccountLayout/>}>
          <Route path="addresses" element={<Addresses/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="myprofile" element={<MyProfile/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
