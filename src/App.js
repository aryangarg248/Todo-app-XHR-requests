import './App.css';
import Person from './ShowPerson';
import Todo from './Todo';


function App() {
  return (
    <div className="App">
      <h1>ToDO-app</h1>
      <Todo/>
      <h1>People list</h1>
      <Person/>

    </div>
  );
}

export default App;
