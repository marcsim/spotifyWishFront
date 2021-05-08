import React, { Fragment, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import ListTemplate from '../../module/List/list.template';
import ArtistComponent from '../artist.component';
import Artist from './../../../models/artist.models';
import './../artist.style.css';

const ListArtistComponent = () => {
    const [artists, setArtists] =  useState<Artist[]>([]);

    async function fetchArtists() {
        const callArtists = await fetch('http://localhost:3000/Artist');
    
        const artistsServer = await callArtists.json();
        setArtists(artistsServer);
    }
    
      useEffect(() => {
        fetchArtists();
      }, []);

      return(
        <div className="container">
            <h1>Artistes</h1>
            <Router>
                <Route exact path="/artist/addArtist" component={ ArtistComponent }/>
                <div className="btn-add">
                    <NavLink exact to="/artist/addArtist">
                        <Button variant="danger">Ajouter un artiste</Button>
                    </NavLink>
                </div>
            </Router>
            <div className="row">
            {
                artists.map((artist) => 
                    <ListGroup className="">
                        <ListTemplate key={artist.id} artist={ artist } />
                    </ListGroup>
                )
            }
            </div>
        </div>
    );
};

export default ListArtistComponent;