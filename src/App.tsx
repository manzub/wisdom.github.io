import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import MainLayout from './layouts/Main';

import { tabs } from './data';
import contactData from './data/json/contact.json'

function App() {
  return (
    <MainLayout tabs={tabs} contactData={contactData}>
      <Router></Router>
    </MainLayout>
  );
}

export default App;
