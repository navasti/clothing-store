import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FAQ from './pages/faq';
import Home from './pages/home';
import Cart from './pages/cart';
import About from './pages/about';
import Sales from './pages/sales';
import Login from './pages/login';
import Cloths from './pages/cloths';
import CreateAccount from './pages/createAccount';
import RecoveringAccount from './pages/recoveringAccount';
import TermsAndCondition from './pages/termsAndCondition';
import ShippingAndReturns from './pages/shippingAndReturns';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/cloths">
                <Cloths/>
            </Route>
            <Route path="/sales">
                <Sales/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/create-account">
                <CreateAccount/>
            </Route>
            <Route path="/recover-account">
                <RecoveringAccount/>
            </Route>
            <Route path="/faq">
                <FAQ/>
            </Route>
            <Route path="/shipping-returns">
                <ShippingAndReturns/>
            </Route>
            <Route path="/terms-condition">
                <TermsAndCondition/>
            </Route>
        </Switch>
    )
}

export default Router
