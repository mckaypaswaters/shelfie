import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor() {
        super()
    }
    render(){
        let mappedInventory = this.props.inventoryArr.map((el, i) => {
            return (
                <div className='inventoryItems' key={i + el.name}>
                    <img src={el.img} alt={el.name}/>
                    <h4>{el.name}</h4>
                    <h4>${el.price}</h4>
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
