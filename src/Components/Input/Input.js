import "./Input.css";
import { connect } from "react-redux";

const Input = (props) => {

    const onInputSubmit = (event) => {
        event.preventDefault();
        if (props.inputValueFromRedux !== "") {
            props.onActivityAdded(props.inputValueFromRedux);
        }

    }

    const onInputChange = (event) => {
        props.setInputValueFromRedux(event.target.value);
    }


    return (
        <form onSubmit={onInputSubmit} className="input">
            <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
            <input onChange={onInputChange} id="input" className="input__input" type="text" value={props.inputValueFromRedux}></input>
        </form>
    );


}

const mapStatetoProps = (state) => {
    return {
        inputValueFromRedux: state.input,
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        setInputValueFromRedux: (payload)=> dispatch({type: "TEST", payload: payload})
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Input);

