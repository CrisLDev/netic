import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Drawer/Sidebar';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout:React.FC<ILayoutProps> = ( props ) => {
  const { children } = props;
  const [open, setOpen] = useState<boolean>( false );

  return (
    <>
      <header>
        <Navbar handleOpenSidebar={() => setOpen( true )} />
      </header>
      <main>
        <Sidebar state={open} handleClose={() => setOpen( false )} />
        <Container>
          {children}
        </Container>
        <ToastContainer position="top-left" />
      </main>
    </>
  );
};

export default Layout;
