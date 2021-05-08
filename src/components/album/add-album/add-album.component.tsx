import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Album from '../../../models/album.models';
import Artist from '../../../models/artist.models';
import Song from '../../../models/song.models';
import './../album.style.css';


const AddAlbumComponent = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [cover, setCover] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    const [coverError, setCoverError] = useState('');
    const [albums, setAlbums] = useState<Album[]>([]);
    
    useEffect(() => {}, []);
    async function addAlbum(title: string, year: string, cover: string) {
        const postBody = {
            title: title,
            year: year,
            cover: cover
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        console.log('requestMeta', requestMetadata.body);
        await fetch('http://localhost:3000/album/addAlbum', requestMetadata)
        .then(res =>res.json())
        .then(recipes => {
            console.log(recipes);
            return ({ recipes });
        });
    }

    async function submitAlbum(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event?.preventDefault();

        setYearError('');
        setTitleError('');
        setCoverError('');

        let valid = true; 

        if (title.trim() === '') {
            setTitleError('Vous devez renseigner un titre valide');
            valid = false; 
        }

        if (year.trim() === '') {
            setYearError('Vous devez renseigner une année valide');
            valid = false;
        }

        if (cover.trim() === '') {
            setYearError('Vous devez renseigner une image valide');
            valid = false;
        }

        if (valid) {
            const tmpAlbums = [...albums];
            tmpAlbums.push({
                id: 0,
                title,
                year,
                cover,
            });
            setAlbums(tmpAlbums);
            console.log(tmpAlbums);
            await addAlbum(title, year, cover);
        }
    }

    function onTitleChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function onYearChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setYear(event.target.value);
    }

    function onCoverChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setCover(event.target.value);
    }

    return(
        <div className="container-album">
            <h1>Ajouter un album</h1>
            <Form>
                <Form.Label>Titre: </Form.Label>
                <input placeholder="Titre" type="text" value={title} onChange={ onTitleChanged } />
                <p>{ titleError }</p>
                <Form.Label>Année: </Form.Label>
                <input placeholder="Année" type="text" value={year} onChange={ onYearChanged } />
                <p>{ yearError }</p>
                <Form.Label>Image: </Form.Label>
                <input placeholder="image" type="text" value={cover} onChange={ onCoverChanged } />
                <p>{ coverError }</p>
                <Button type="submit" onClick={submitAlbum}>Ajouter un album</Button>
            </Form>
        </div>
    );
}

export default AddAlbumComponent;