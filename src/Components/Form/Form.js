import React from 'react'
import noImage from '../../assets/noImage.png'
import axios from 'axios'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: ''
        }
    }

    handleChangeImg(e) {
        this.setState({img: e.target.value})
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
        this.setState({img: ''})
    }
    addToInventory() {
        axios.post('/api/product', this.state)
        this.props.getInventory()
        this.cancel()
    }

    render() {
        return (
            <div className='form'>
                <div className='green-box'>
                    <img className='no-image' src={this.state.img} alt="noImage default"/>
                    <input className='imageURL' value={this.state.img} type="text" onChange={e => this.handleChangeImg(e)} />
                    <input className='productName' value={this.state.name} type="text" onChange={e => this.handleChangeProduct(e)}/>
                    <input className='price' value={this.state.price} type="number" onChange={e => this.handleChangePrice(e)}/>
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to inventory</button>
                </div>
            </div>
        )
    }
}