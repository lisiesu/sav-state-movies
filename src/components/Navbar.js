import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <nav className='navbar__nav'>
          <h1><Link to='/'>Sav State</Link></h1>
          <Searchbar />
        </nav>
      </div>   
    </div>
  );
}

export default Navbar;