import './App.css';

import React, { Component, useState } from 'react'

import MainBlock from './Main-block'

function App() {

  const [user, setUser] = useState({
    name: 'Nora M. Buchanan',
    email: 'invision@invisionapp.com',
    phone: '+144-3412-4422',
    city: 'New York',
    state: 'NY',
    interactions: 4
  })
  
  return (
    <main>
      <MainBlock user={user}/>
    </main>
  );
}

export default App;
