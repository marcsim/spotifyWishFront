import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './../user.style.css';
import User from '../../../models/user.models';
import HomeComponent from '../../home/home.component';

const SignIn = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [mailError, setMailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [goToHome, setGoToHome] = useState(false);

    useEffect(() => {}, []);

    async function login (mail: string, password: string) {
        const postBody = {
            mail: mail,
            password: password
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        await fetch('http://localhost:3000/User/login', requestMetadata)
        .then(res =>res.json())
        .then(recipes => {
            return ({ recipes });
        });
    }

    async function onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event?.preventDefault();

        setMailError('');
        setPasswordError('');

        let valid = true; 

        if (mail.trim() === '') {
            setMailError('Vous devez renseigner un titre valide');
            valid = false; 
        }

        if (password.trim() === '') {
            setPasswordError('Vous devez renseigner une année valide');
            valid = false;
        }

        if (valid) {
            await login(mail, password);
            return (<Router><Redirect to="/"/></Router>);
        } else {
            console.log('Erreur formulaire invalid');
        }
    }

    function onMailChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setMail(event.target.value);
    }

    function onPasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }
    return (
        <div className="container-user">
            <h1>S'identifier</h1>
            <Form className="form">
                <Form.Label>Email:</Form.Label>
                <input placeholder="mail" type="email" value={mail} onChange={ onMailChanged } />
                <p>{ mailError }</p>
                <Form.Label>Mot de passe:</Form.Label>
                <input placeholder="password" type="password" value={password} onChange={ onPasswordChanged } />
                <p>{ passwordError }</p>
                <Button type="submit" onClick={onSubmit}>S'identifier</Button>
            </Form>
        </div>
    );
}

export default SignIn;
