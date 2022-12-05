import "./Input.css"

import React from "react";

class Input extends React.Component {

    constructor(props){
        super(props);
        this.state = {inputValue: "Hello!"}
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onActivityAdded();
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onInputSubmit} className="input">
                <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                <input onChange={this.onInputChange} id="input" className="input__input" type="text" value={this.state.inputValue}></input>
            </form>
        );
    }

}

export default Input;