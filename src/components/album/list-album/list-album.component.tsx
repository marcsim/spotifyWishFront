import React, { Fragment, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Album from '../../../models/album.models';
import CardTemplate from '../../module/card/card.component';
import AddAlbumComponent from '../add-album/add-album.component';
import './../album.style.css';

const ListAlbumComponent = () => {
    const [albums, setAlbums] =  useState<Album[]>([]);

    async function fetchAlbums() {
        const callAlbums = await fetch('http://localhost:3000/album');
    
        const albumsServer = await callAlbums.json();
        setAlbums(albumsServer);
    }
    
      useEffect(() => {
        fetchAlbums();
      }, []);

      return(
        <div className="container">
            <h1>Albums</h1>
            <Router>
                <Route exact path="/album/add" component={ AddAlbumComponent }/>
                <div className="btn-add">
                    <NavLink exact to="/album/add">
                        <Button variant="danger">Ajouter un album</Button>
                    </NavLink>
                </div>
            </Router>
            <div className="row">
            {
                albums.map((album) => 
                    <div className="col-3 card">
                        <CardTemplate key={album.id} album={ album } />
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default ListAlbumComponent;