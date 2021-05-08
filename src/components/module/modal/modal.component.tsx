import React, { FunctionComponent, ReactNode } from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Album from "../../../models/album.models";
import './modal.style.css';

type Props = {
  album?: Album;
  visible?: boolean;
  onClose: () => void;
}

const ModalComponent: FunctionComponent<Props> = (props: Props) => {

  function onClickCloseBtn(): void {
    if (props.onClose) {
      props.onClose();
    }
  }
  
  return (
    <Fragment>
      {
        props.visible &&
        <div className='modalOverlay'>
          <div className='modalContainer'>
            <h1 className='modalTitle'>{ props.album?.title }</h1>
            <p className='modalBody'>
              <span>{ props.album?.cover }</span>
              <br/>
              <span>{ props.album?.year}</span>
            </p>
            <Router>
              <NavLink exact to="/album">
                <button className='modalCloseBtn' onClick={ onClickCloseBtn }>Close</button>
              </NavLink>
            </Router>
            
          </div>
        </div>
      }
    </Fragment>
  );
};

export default ModalComponent;