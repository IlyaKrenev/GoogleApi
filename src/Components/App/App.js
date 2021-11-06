import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Item from '../Item/Item';
import fetchRequest from '../../fetchRequest';

export default class App extends React.Component{

  constructor(){
    super();

    this.state = {
      searchResponse: [],
      pageCount: 1,
      itemsCount: 1,
    };

    this.searchParams = {
      'cx': '0feda4ea9cbd4332a',
      'key': 'AIzaSyAUo4Jr7dfSjjDxphYAkM4BRtPtPB7XAlo',
      'q': '',
      'num': 0,
      'start': 0,
    }
  }

  getPageParams = (searchResponse) => {
    this.setState({searchResponse})
  }

  linksHandler = (event) => {
    switch (event.target.innerText){
        case 'Вперед':
          if(event.target.classList.contains('navigation-container-cursor')){
            this.searchParams.start += this.props.num;
            fetchRequest(this.searchParams);
          }
          break;
        case 'Назад':
          if(event.target.classList.contains('navigation-container-cursor')){
            this.searchParams.start -= this.props.num;
            fetchRequest(this.searchParams);
          }
          break;
        default:
          break;
    } 
}

  render(){
    return (
        <>
          <Header searchResponse={this.getPageParams} searchParams={this.searchParams}/>
          <div className = 'items-array'>
            {this.state.searchResponse.map(item => <Item item={item} key={item.link}/>)}
          </div>
          <Navigation start={this.searchParams.start} num={this.searchParams.num} onClick={this.linksHandler}/>
          {console.log(this.searchParams)}
        </>
      );
  }
}