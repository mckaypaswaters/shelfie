import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
       {routes}
      </div>
    );
  }
}

export default App;

 {/* <div className='flexin'>
          <Dashboard
          inventoryArr = {this.state.inventory}
          getInventory = {this.componentDidMount}
          />
          <Form
          inventoryArr = {this.state.inventory}
          getInventory = {this.componentDidMount}
          />
        </div> */}