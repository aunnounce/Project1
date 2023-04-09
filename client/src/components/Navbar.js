import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink 
              activeClassName='active'
              className="nav-link" 
              aria-current="page" 
              to="/blogs">Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};