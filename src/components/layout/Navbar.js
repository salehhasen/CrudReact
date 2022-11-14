import {Link,NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React User
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link"  to="/Contact" >
                 Contact
                </NavLink>
              </li>
            </ul>
          </div>      
          <Link className="btn btn-outline-light"
            to="/users/add"> 
            Add User</Link>
        </div>
      </nav>
    )
} 
export default Navbar;