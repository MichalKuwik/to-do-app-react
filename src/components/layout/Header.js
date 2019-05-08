import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
      
    <header style={headerStyles}>
      <h1>Todo Aplication</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
    
  )
}

const headerStyles = {
  background: '#333',
  color:'#ddd',
  textAlign: 'center',
  padding: '10px',
  
}

const linkStyle = {
  color:'#fff',
  textDecoration: 'none',
}

export default Header;