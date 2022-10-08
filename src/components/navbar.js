import { NavLink } from 'react-router-dom';
import logo from '../images/navlogo-short.png';
import back from '../images/back.png';
import microphone from '../images/microphone.png';
import settings from '../images/settings.png';

function Navigation() {
  return (
    <nav>
      <NavLink className="navlink" to="/" end>
        <img src={back} alt="Back icon" className="back-icon" />
        <p>BACK</p>
      </NavLink>
      <NavLink className="navlink-1" to="/">
        <img src={logo} alt="CryptoForU Logo" className="logo" />
      </NavLink>

      <ul className="nav-ul">
        <li><img src={microphone} alt="Microphone icon" className="nav-options" /></li>
        <li><img src={settings} alt="Settings icon" className="nav-options" /></li>
      </ul>
    </nav>
  );
}

export default Navigation;
