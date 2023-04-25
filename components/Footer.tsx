import React from 'react';

type FooterProps = {
    children: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer>
      {children}
    </footer>
  );
};

export default Footer;