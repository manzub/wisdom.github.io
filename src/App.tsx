import React from 'react';
import './App.css';
import MainLayout from './layouts/Main';
import { tabs } from './data';
import contactData from './data/json/contact.json'
import routes from './routes';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <MainLayout tabs={tabs} contactData={contactData}>
      <Routes>{routes}</Routes>
    </MainLayout>
  );
}

export default App;
