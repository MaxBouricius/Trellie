
import React from 'react';
import './App.css';
import Trellie from "../Components/Trellie/Trellie";
import trelliesObject from "../Data/trellies";

class App extends React.Component {

  constructor(){
    super();
    this.state = {trellies: []}
  }

  componentDidMount(){
    this.setState({trellies: trelliesObject});
  }

  onActivityAdded = () => {
    let oldState = this.state.trellies;
    let newState = {
      label: "Vandaag",
      description: "Geadd door enter te drukken"
    }
    oldState[0].activities.push(newState);
    this.setState({trellies: oldState});
  }




  render() {
    let render = this.state.trellies.map(object => {
      return <Trellie onActivityAdded={this.onActivityAdded} key={object.id} trellie={object} />
    });
    return (
      <>
        {render}
      </>
    );
  }

}

export default App;