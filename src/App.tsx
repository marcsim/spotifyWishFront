import React, {Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/home/home.component';
import SongComponent from './components/song/song.component';
import ArtistComponent from './components/artist/artist.component';
import NotFound from './components/module/not-found/not-found.component';
import AddAlbumComponent from './components/album/add-album/add-album.component';
import ListAlbumComponent from './components/album/list-album/list-album.component';
import AlbumComponent from './components/album/album.component';
import SignIn from './components/user/login/signin.component';
import SignUp from './components/user/signUp/signup.component';
import Navigation from './components/module/navigation/navigation.component';
import UserComponent from './components/user/user.component';
import ListArtistComponent from './components/artist/list-artist/list-artist.component';
import ListSongComponent from './components/song/list-song/list-song.component';

function App() {
  const [isConnect, setIsConnect] = useState(false);
  return (
    <Fragment>
      <Router>
        <Navigation isConnected={isConnect} />
        <Switch>
            <Route path="/" exact component={ HomeComponent }/>
            <Route path="/album" exact component={ ListAlbumComponent }/>
            <Route path="/album/add" exact component={ AddAlbumComponent }/>
            <Route path="/album/:id" exact component={ AlbumComponent }/>
            {/* <Route path="/Song" exact component={ SongComponent }/> */}
            <Route path="/song" exact component={ ListSongComponent }/>
            {/* <Route path="/Artist" exact component={ ArtistComponent }/> */}
            <Route path="/Artist" exact component={ ListArtistComponent }/>
            <Route path="/User/profile" exact component={ UserComponent }/> 
            <Route path="/User/login" exact component={ SignIn }/>
            <Route path="/User/signup" exact component={ SignUp }/>
            <Route path="/" component={ NotFound }/>
          </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
