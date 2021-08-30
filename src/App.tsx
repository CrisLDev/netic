import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';

const App: React.FC = () => (
  <Layout>
    <Routes />
  </Layout>
);

export default App;
