import './Item.css';
import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super();
        this.state = {
            searchValue : '',
            searchResponse: [],
        }
    }

    render(){
        return(
            <div className = 'item-container'>
                <img src={this.props.item.pagemap.cse_image[0].src} alt={this.props.item.title} />
                <div className = 'item'>
                    <h2> {this.props.item.title} </h2>
                    <a href={this.props.item.link}> {this.props.item.title} </a>
                    <p> {this.props.item.snippet} </p>
                </div>
            </div>
        )
    }
}