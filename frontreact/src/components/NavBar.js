import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LOCALES } from "../i18n/locales";
import { I18nSelect } from './I18nSelect';
import "./NavBar.scss";

export const NavBar = ({ onSearchKeyChange, setLanguage }) => {
  const [navState, setNavState] = useState({ showingSearch: false });

    

  const showSearchContainer = (event) => {
    event.preventDefault();
    setNavState({ showingSearch: !navState.showingSearch });
  };

  return (
    <header className='menu'>
      <div className='menu-container'>
        <div className='menu-holder'>
          <h1>ISIS 3710</h1>
          <nav className='menu-items'>
            <div className='menu-links'>
              <Link className='nav-item' aria-current='page' to='/'>
                <FormattedMessage id='home'/>
              </Link>
              <Link className='nav-item' aria-current='page' to='/report'>
              <FormattedMessage id='report'/>
              </Link>
            </div>
            <div className='menu-actions'>
              <span onClick={(e) => showSearchContainer(e)}>
                <i className='material-icons search'>search</i>
              </span>
              <div className="lang-select-wrapper">
                <div className="lang-select" onClick={()=>{setLanguage(LOCALES.ENGLISH)}}><p>EN</p></div>
                <div className="lang-select" onClick={()=>{setLanguage(LOCALES.SPANISH)}}><p>ES</p></div>
                
            </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={
          (navState.showingSearch ? 'showing ' : '') + 'search-container'
        }
      >
        <input
          type='text'
          onChange={(e) => {
            console.log('cambio');
            onSearchKeyChange(e.target.value)}}
        />
        <span onClick={(e) => showSearchContainer(e)}>
          <i className='material-icons close'>close</i>
        </span>
      </div>
    </header>
  );
};
