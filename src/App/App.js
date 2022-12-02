import './App.css';
import Trellie from "../Components/Trellie";
import trellies from "../Data/trellies";

const App = () =>{
  let render = trellies.map(trellie =>{
    return <Trellie trellie={trellie}/>
  });

  return (
    <>
    {render}
    </>
  );
}

export default App;