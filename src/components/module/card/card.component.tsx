import React, { FunctionComponent } from 'react';
import logo from './../../../logo.svg';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Album from '../../../models/album.models';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Artist from '../../../models/artist.models';

type AlbumProps = {
    album?: Album;
    artist?: Artist;
};

const CardTemplate: FunctionComponent<AlbumProps> = (props: AlbumProps) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ props.album?.cover } />
            <Card.Body>
                <Card.Title>{ props.album?.title }</Card.Title>
                <Card.Subtitle>{ props.album?.year}</Card.Subtitle>
                <Card.Text>Une description</Card.Text>
                <Router>
                    <NavLink exact to={ "/album/"+props.album?.id }>
                        <Button variant="primary" >Voir cette album</Button>
                    </NavLink>
                </Router>
            </Card.Body>
        </Card>
    );
};

export default CardTemplate; 














