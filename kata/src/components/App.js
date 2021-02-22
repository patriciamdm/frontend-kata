import './App.css';

import React, { useState } from 'react'

import MainBlock from './Main-block'

function App() {

  const [user, setUser] = useState({
    name: 'Nora M. Buchanan',
    email: 'invision@invisionapp.com',
    phone: '+144-3412-4422',
    city: 'New York',
    state: 'NY',
    interactions: 4,
    payment: 'visa',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUh5L8PzW_Q5GZTeLNIJW8z5c3oyMIq8pIw&usqp=CAU'
  })

  const [trip, setTrip] = useState({
    from: {
      name: 'Jackson Heights',
      address: '37-27 74th Street'
    },
    to: {
      name: 'Greenpoint',
      address: '81 Gate St Brooklyn'
    },
    distance: 12.3,
    time: 42,
    price: 34.20,
    energy: 12.4
  })
  
  return (
    <main>
      <MainBlock user={user} trip={trip}/>
    </main>
  );
}

export default App;
