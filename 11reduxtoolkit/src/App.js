import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
