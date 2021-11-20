
import './App.css';
import { AddTaskForm, Header, TaskList, FilterFooter,Footer } from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <AddTaskForm/>
      <TaskList/>
      <FilterFooter/>
      <Footer/>

    </div>
    

  );
}

export default App;
