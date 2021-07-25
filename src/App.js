import './App.css';
import {useState} from 'react'

function App() {
  const [state, setstate] = useState(false)
  console.log("react building..");
  return (
    <div className="App">
      {state?<h3>The Dev D</h3>:<h3>Dhaivath</h3>}
      <button onClick={()=> {setstate(!state)}}>Hello</button>
      <section>

      </section>
    </div>
  );
}

export default App;
