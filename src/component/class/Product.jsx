import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './css/Product.css';

class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })
        if(this.state.stock === 1){
            this.setState({
                status: "Stock Sudah Habis!",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://placeimg.com/640/480/tech" alt=""/>
                <p>{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <Button outline color="primary" className="btn-click m-1 p-1" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</Button>
                <p><b>{this.state.status}</b></p>
            </div>
        );
    }
}

export default Product;