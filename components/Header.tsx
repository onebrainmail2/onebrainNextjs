import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};

export default Header;