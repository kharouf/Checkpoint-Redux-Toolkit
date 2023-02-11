import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App-header">
      <header className="App">
        <Header/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
