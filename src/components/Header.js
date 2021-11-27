import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">国ごとの感染状況</Link>
      <Link to="/world">世界の感染状況</Link>
    </>
  );
};

export default Header;
