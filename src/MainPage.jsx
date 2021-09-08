import React from 'react'
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainPage = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Home /></Route>
                <Route path='login' exact><Login /></Route>
                <Route path='register' exact><Register /></Route>
            </Switch>
        </Router>
    )
}

export default MainPage
