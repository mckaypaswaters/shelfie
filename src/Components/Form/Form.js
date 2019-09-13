import React from 'react'
import noImage from '../../assets/noImage.png'
import axios from 'axios'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img_url: noImage
        }
    }

    handleChangeImg(e) {
        this.setState({img_url: e.target.value})
    } 
    handleChangeProduct(e) {
        this.setState({name: e.target.value})
    }
    handleChangePrice(e) {
        this.setState({price: e.target.value})
    }
    cancel() {
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({img_url: noImage})
    }
    addToInventory() {
        axios.post('/api/product').then(res => {
            console.log(this.state.name)
            this.props.inventoryArr.push({
                name: this.state.name,
                img: this.state.img_url,
                price: this.state.price
            })
        })
        this.props.getInventory()
    }

    render() {
        return (
            <div className='form'>
                <div className='green-box'>
                    <img className='no-image' src={this.state.img_url} alt="noImage default"/>
                    <input className='imageURL' type="text" onChange={e => this.handleChangeImg(e)} />
                    <input className='productName' type="text" onChange={e => this.handleChangeProduct(e)}/>
                    <input className='price' type="number" onChange={e => this.handleChangePrice(e)}/>
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to inventory</button>
                </div>
            </div>
        )
    }
}