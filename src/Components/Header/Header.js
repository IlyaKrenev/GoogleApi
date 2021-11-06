import './Header.css';
import React from 'react';
import fetchRequest from '../../fetchRequest';

export default class Header extends React.Component{
    constructor(props){
        super();
        this.state = {
            searchValue : '',
            searchResponse: [],
        }
        this.inputRef = React.createRef();
        this.selectRef = React.createRef();

        this.testData = [
            {
                title: 'test1',
                link: 'vk.com1',
                subs: '123123123123123',
                img: 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__food_apple_grocery_gastronomy-512.png'
            },
            {
                title: 'test2',
                link: 'vk.com2',
                subs: '123123123123123',
                img: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C240-512.png'
            },
            {
                title: 'test3',
                link: 'vk.com3',
                subs: '123123123123123',
                img: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/apple-512.png'
            }
        ]
    }

    getResult = () => {
        let buf = this.props.searchParams;
        buf.num = this.selectRef.current.value;
        buf.q = this.inputRef.current.value;

        this.props.searchResponse(fetchRequest(buf))
    }

    render(){
        return(
            <div className = 'header-container'>
                <form name="text" onSubmit={(event) => event.preventDefault()}>
                    <input type="text" ref={this.inputRef}/>
                    <select ref={this.selectRef}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <option key={item}>{item}</option>)}
                    </select>
                    <button onClick={this.getResult}>Найти текст</button>
                </form>
            </div>
        )
    }
}


