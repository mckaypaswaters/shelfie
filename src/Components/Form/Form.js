import React from 'react'
// import noImage from '../../assets/noImage.png'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: '',
            toggle: false
        }
    }

    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
            this.setState({name: res.data[0].name, price: res.data[0].price, img: res.data[0].img})
        })
        if (this.props.match.url.includes('edit')){
            this.setState({toggle: false})
        } else {
            this.setState({toggle: true})
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            this.cancel()
            this.setState({toggle: true})
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
    creating() {
        axios.post('/api/product', this.state)
    }
    editing() {
        axios.put(`/api/product/${this.props.match.params.id}`, this.state)
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
                    {!this.state.toggle ? 
                    <Link to='/'>
                        <button onClick={() => this.editing()}>Save Changes</button>
                    </Link> :
                    <Link to='/'>
                        <button onClick={() => this.creating()}>Add to inventory</button>
                    </Link>}
                </div>
            </div>
        )
    }
}