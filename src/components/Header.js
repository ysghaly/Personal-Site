import logo from '../assets/logo.svg';
import Nav from './Nav';

import '../css/Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        <br />
      </header>
  );
}

export default Header;
