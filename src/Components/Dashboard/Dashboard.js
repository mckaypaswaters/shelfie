import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                This is the Dashboard
                <Product/>
            </div>
        )
    }
}