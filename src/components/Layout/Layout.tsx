import React from 'react';
import Navbar from '../Navbar/Navbar';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout:React.FC<ILayoutProps> = ( props ) => {
  const { children } = props;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
