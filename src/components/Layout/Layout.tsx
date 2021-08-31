import React, { useState } from 'react';
import { Container } from '@material-ui/core';
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
      </main>
    </>
  );
};

export default Layout;
