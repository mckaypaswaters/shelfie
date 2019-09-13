import React from 'react'
import shelfie from '../../assets/shelfie.png'

export default class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <header className='header'>
                <img className='shelfie-logo' src={shelfie} alt="Shelfie Logo"/>
            </header>
        )
    }
}