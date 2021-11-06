import './Header.css';
import React from 'react';
import fetchRequest from '../../fetchRequest';

export default class Header extends React.Component{
    constructor(props){
        super();
        this.inputRef = React.createRef();
        this.selectRef = React.createRef();
    }

    getResult = () => {
        if (this.inputRef.current.value === '')
            return;
        let buf = this.props.searchParams;
        buf.num = this.selectRef.current.value;
        buf.q = this.inputRef.current.value;

        fetchRequest(buf).then(data => {
            this.props.searchResponse(data)
        })
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


