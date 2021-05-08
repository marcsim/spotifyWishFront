import React, { Fragment, useEffect } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Router, Switch } from 'react-router-dom';
import './home.style.css';

const HomeComponent = () => {

    useEffect(() => {}, []);

    return(
        <div className="container">
            <Jumbotron>
                <h1>Accueil</h1>
                <p>
                    Site en construction, bientôt disponible une bibliothèque de musique.
                </p>
            </Jumbotron>
        </div>
        
    );
};

export default HomeComponent;