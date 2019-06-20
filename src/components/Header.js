import React from "react";
import PropTypes from 'prop-types';


const Header = ({ titulo }) => (
  <header className="text-center">
    <h1> {titulo} </h1>
  </header>
);

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}


export default Header;
