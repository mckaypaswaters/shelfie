import React from 'react'

export default class Product extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className='flexinInven'>
                {this.props.mappedInventory}
            </div>
        )
    }
}