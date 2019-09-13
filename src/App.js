import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [
        {
          name: 'Modern Warfare',
          price: 60,
          img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/CallofDutyModernWarfare%282019%29.jpg/220px-CallofDutyModernWarfare%282019%29.jpg'
        },
        {
          name: "Link's Awakening",
          price: 60,
          img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DZk_95zphAS441mk00rR3tErbt5cUdpS-QjI15nvvl2Tpsbj'
        }, 
        {
          name: 'Borderlands 3',
          price: 60,
          img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFi7OaClxUyW6oV5dHk1_FHNGx0THl2EBbhLxKEzzCOsNzdnX'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='flexin'>
          <Dashboard
          inventoryArr = {this.state.inventory}
          />
          <Form
          inventoryArr = {this.state.inventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
