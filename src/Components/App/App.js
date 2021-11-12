import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Item from '../Item/Item';
import fetchRequest from '../../fetchRequest';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchResponse: [],
      start: 0,
      searchParams: {
        cx: '0feda4ea9cbd4332a',
        key: 'AIzaSyAUo4Jr7dfSjjDxphYAkM4BRtPtPB7XAlo',
        q: '',
        num: 0, // Количество item на странице
        start: 1, // Начало запроса (в google - max 100)
      }
    };
  }

  getPageParams = (data) => {
    this.setState({ searchResponse: data })
  }

  getData = () => {
    fetchRequest(this.state.searchParams).then(data => {
      this.getPageParams(data)
    })
  }

  linksHandler = (event) => {
    switch (event.target.innerText) {
      case 'Вперед':
        console.log(this.state.searchParams)
        if (event.target.classList.contains('navigation-container-cursor')) {
          this.setState({
            searchParams: {
              ...this.state.searchParams,
              start: +this.state.searchParams.start + +(this.state.searchParams.num),
            }
          }, this.getData)
        }
        break;

      case 'Назад':
        if (event.target.classList.contains('navigation-container-cursor')) {
          this.setState({
            searchParams: {
              ...this.state.searchParams,
              start: +this.state.searchParams.start - +(this.state.searchParams.num),
            }
          }, this.getData);
        }
        break;
      default:
        console.log('default')
        break;
    }
  }

  render() {
    return (
      <>
      {console.log(this.state.searchResponse)}
        <Header searchResponse={this.getPageParams} searchParams={this.state.searchParams} />
        <div className='items-array'>
          {this.state.searchResponse.map(item => <Item item={item} key={item.link} />)}
        </div>
        {(this.state.searchResponse[0]) ? <Navigation start={this.state.searchParams.start} num={this.state.searchParams.num} onClick={this.linksHandler} /> : false}
      </>
    );
  }
}