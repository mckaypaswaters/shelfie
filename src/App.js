import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <div className='flexin'>
          <Dashboard
          inventoryArr = {this.state.inventory}
          getInventory = {this.componentDidMount}
          />
          <Form
          inventoryArr = {this.state.inventory}
          getInventory = {this.componentDidMount}
          />
        </div>
      </div>
    );
  }
}

export default App;
