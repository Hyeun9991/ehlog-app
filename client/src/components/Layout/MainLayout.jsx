import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const MainLayout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
