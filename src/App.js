import Navbar from './component/Navbar/navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Home from './pages/Home/home';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/productList";
import Product from "./pages/product/product";
import NewProduct from "./pages/newProduct/newProduct";
import './App.css'

function App() {
  return (
    <Router>
     <Navbar/>
     <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
