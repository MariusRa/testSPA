import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useIsAuthenticated, useMsal} from "@azure/msal-react";
import {SignOutButton} from "../SignOutButton/SignOutButton";
import {SignInButton} from "../SignInButton/SignInButton";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import "../../sass/Custom.scss"
import {Route} from "react-router-dom";

const Header = (props) =>{
    const {accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const name = accounts[0] && accounts[0].name;
    const role = accounts[0] && accounts[0].idTokenClaims["roles"];
    //const token = accounts[0] && accounts[0].idTokenClaims
    //console.log(token)
if (isAuthenticated){
    return(
        <header>
                <Navbar className="container navigation navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavigationBar/>
                    </Navbar.Collapse>
                    <Nav className="log-in-festo" href="#">
                        <SignOutButton  /> {name} ({role})
                    </Nav>
                        <a href="https://www.festo.com/us/en/" className="navigation__logo">
                            <img className="logo" src="https://www.festo.com/_ui/responsive/theme-lambda/fox/img/svg/logo_blue.svg" alt="#"/>
                        </a>
                </Navbar>
            </header>
    )
}
else{
    return(
    <header>
        <Navbar className="container navigation navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <NavigationBar/>
            </Navbar.Collapse>
            <Nav className="log-in-festo" href="#">
                <SignInButton />
            </Nav>
            <a href="https://www.festo.com/us/en/" className="navigation__logo">
                <img className="logo" src="https://www.festo.com/_ui/responsive/theme-lambda/fox/img/svg/logo_blue.svg" alt="#"/>
            </a>
        </Navbar>
    </header>
)}}
export default Header
