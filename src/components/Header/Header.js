
import {NavLink} from 'react-router-dom'
import ('./Header.css')
const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Quizee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className='nav-link' to='/statistics'>Statistics</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className='nav-link' to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;