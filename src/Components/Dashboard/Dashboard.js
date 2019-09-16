import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
          this.setState({inventory: res.data})
        })
      }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        this.componentDidMount()
    }

    render(){
        let mappedInventory = this.state.inventory.map((el, i) => {
            return (
                <div className='inventoryItems' key={i + el.name}>
                    <img className='image' src={el.img} alt={el.name}/>
                    <h4>{el.name}</h4>
                    <h4>${el.price}</h4>
                    <button onClick={() => this.deleteProduct(el.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div className='dashboard'>
                <Product
                mappedInventory = {mappedInventory}
                />
            </div>
        )
    }
}
