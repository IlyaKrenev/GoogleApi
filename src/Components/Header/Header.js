import './Header.css';
import React from 'react';
import fetchRequest from '../../fetchRequest';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.selectRef = React.createRef();
        this.selectChangeFlag = 0;
    }
    

    getResult = () => {
        if (!this.inputRef.current.value)
            return;
        let buf = this.props.searchParams;
        buf.num = this.selectRef.current.value;
        buf.q = this.inputRef.current.value;
        if (this.selectChangeFlag){
            buf.start = 1;
            this.selectChangeFlag = 0;
        }

        fetchRequest(buf).then(data => {
            this.props.searchResponse(data)
        })
    }

    render(){
        return(
            <div className = 'header-container'>
                <form name="text" onSubmit={(event) => event.preventDefault()}>
                    <input type="text" ref={this.inputRef}/>
                    <select ref={this.selectRef} onChange = {() => this.selectChangeFlag = 1}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <option key={item}>{item}</option>)}
                    </select>
                    <button onClick={this.getResult}>Найти рецепт</button>
                </form>
            </div>
        )
    }
}


