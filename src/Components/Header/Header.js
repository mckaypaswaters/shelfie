import React from 'react'
import shelfie from '../../assets/shelfie.png'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <header className='header'>
                <img className='shelfie-logo' src={shelfie} alt="Shelfie Logo"/>
                <Link to='/'>
                    <button>Dashboard</button>
                </Link>
                <Link to='/add'>
                    <button>Add inventory</button>
                </Link>
            </header>
        )
    }
}