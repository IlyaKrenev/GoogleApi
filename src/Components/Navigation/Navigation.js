import './Navigation.css';
import React from 'react';

export default class Navigation extends React.Component{
    render(){
        return(
            <div className = 'navigation-container' onClick={this.props.onClick}>
                <p className={this.props.start === 1 ? 'navigation-container-nocursor' : 'navigation-container-cursor'}>Назад</p>
                <p className={100 - this.props.start === this.props.num ? 'navigation-container-nocursor' : 'navigation-container-cursor'}>Вперед</p>
            </div>
        )
    }
}