import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../../HomePage/HomePage'
import ProductPage from '../../ProductsPage/ProductPage'
import ContactPage from '../../ContactPage/ContacPage'

const NavBar = () => (
    <Router>
        <div>
            <nav>
            <a id="logoAnchor"><div id="pcLogo"><Link to="/"><p>PC</p></Link></div></a>
                <ul className="navbar">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/products">
                    <ProductPage />
                </Route>
                <Route exact path="/contact">
                    <ContactPage />
                </Route>
            </Switch>
        </div>
    </Router>

);

export default NavBar