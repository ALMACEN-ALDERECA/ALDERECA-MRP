import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './components/table';
import Modals from './components/modals';
import Header from './components/header';
import Options from './components/Options';
import Nav from './components/NavButtons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Options />
    <Modals />
    <Table />
  </React.StrictMode>
);
