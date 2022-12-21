import "./Input.css";
import React from "react";
import { connect } from "react-redux";
class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state = { inputValue: "" }
    }

    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    onActivityAdded = (event) => {
        event.preventDefault();
        let oldState = [...this.props.trelliesFromRedux];
        let newState = {
            label: "Vandaag",
            description: this.state.inputValue,
            id: oldState[this.props.id - 1].activities.length + 1
        }
        oldState[this.props.id - 1].activities.push(newState);
        this.props.setTrelliesFromRedux(oldState);
        //this.setState({trellies: oldState});
    }


    render() {
        return (
            <form onSubmit={this.onActivityAdded} className="input">
                <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                <input onChange={this.onInputChange} id="input" className="input__input" type="text" value={this.state.inputValue}></input>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        trelliesFromRedux: state.trellies,
    }
    
 }

const mapDispatchtoProps = (dispatch) => {
    return{
        setTrelliesFromRedux: (payload) => { dispatch({ type: "TRELLIES", payload: payload }) }
    }
    
}

export default connect(mapStateToProps, mapDispatchtoProps)(Input);

