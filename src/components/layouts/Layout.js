import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
