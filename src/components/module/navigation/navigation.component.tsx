import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './navigation.style.css';

type connexionProps = {
    isConnected: Boolean;
};

const Navigation: FunctionComponent<connexionProps> = (props: connexionProps) => {
    const connectDisplay = <div>
        <NavLink exact to="/">
            <Button variant="danger" className="btn-user">Déconnexion</Button>
        </NavLink>
        <NavLink exact to="/User/profile">
            <Button variant="primary" className="btn-user">Mon compte</Button>
        </NavLink></div>;
    const notConnectDisplay = <div>
        <NavLink exact to="/User/signup" className="btn-user">
            <Button variant="danger">Inscription</Button>
        </NavLink>
        <NavLink exact to="/User/login">
            <Button variant="primary" className="btn-user">Connexion</Button>
        </NavLink></div>;
    const activeLink = { color: "black"};

    return (
        <Navbar bg="warning" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink exact to="/" activeStyle={ activeLink } className="navlink first-navlink">Accueil</NavLink>
                <NavLink exact to="/album" activeStyle={ activeLink } className="navlink">Album</NavLink>
                <NavLink exact to="/song" activeStyle={ activeLink } className="navlink">Musique</NavLink>
                <NavLink exact to="/Artist" activeStyle={ activeLink } className="navlink">Artiste</NavLink>
                </Nav>
                
            </Navbar.Collapse>
            {
                    props.isConnected ?  connectDisplay : notConnectDisplay 
            }
        </Navbar>
    );
}

export default Navigation;