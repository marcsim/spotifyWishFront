import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';
import Album from '../../models/album.models';
import ModalComponent from '../module/modal/modal.component';

const AlbumComponent = () => {
  const id = useParams();
  const [album, setAlbum] = useState<Album>();
  const [modalVisible, setModalVisible] = useState(false);

  function showModal(): void {
    setModalVisible(true);
  }

  function hideModal(): void {
    setModalVisible(false);
    
  }

  async function fetchAlbums() {
    console.log(id.toString());
    const callAlbum = await fetch('http://localhost:3000/album/'+Object.values(id)[0]);

    const albumServer = await callAlbum.json();
    setAlbum(albumServer);
  }
  
  useEffect(() => {
    fetchAlbums();
    showModal();
  }, []);

  return (
    <Fragment>
        <ModalComponent album={ album } visible={ modalVisible } onClose={ hideModal }/>
    </Fragment>
  );
}

export default AlbumComponent;