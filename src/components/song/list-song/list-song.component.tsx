import React, { Fragment, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import ListTemplate from '../../module/List/list.template';
import SongComponent from '../song.component';
import Song from './../../../models/song.models';
import './../song.style.css';

const ListSongComponent = () => {
    const [song, setSong] =  useState<Song[]>([]);

    async function fetchSong() {
        const callSong = await fetch('http://localhost:3000/song');
    
        const songServer = await callSong.json();
        setSong(songServer);
    }
    
      useEffect(() => {
        fetchSong();
      }, []);

      return(
        <div className="container">
            <h1>Musique</h1>
            <Router>
                <Route exact path="/song/addSong" component={ SongComponent }/>
                <div className="btn-add">
                    <NavLink exact to="/song/addSong">
                        <Button variant="danger">Ajouter une musique</Button>
                    </NavLink>
                </div>
            </Router>
            <div className="row">
            {
                song.map((songItem) => 
                    <ListGroup className="">
                        <ListTemplate key={songItem.id} song={ songItem } />
                    </ListGroup>
                )
            }
            </div>
        </div>
    );
};

export default ListSongComponent;