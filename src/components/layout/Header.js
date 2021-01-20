import React from 'react';
import PropTypes from 'prop-types';
/* import "../node_modules/bootstrap";  */
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

 const Header = (props) => {
     const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-danger mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand"> {branding} </Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fas fa-home">Home</i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link"><i className="fas fa-plus">Add</i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"><i className="fas fa-question">About</i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'My Application'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;