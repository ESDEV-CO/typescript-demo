import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'Shahab',
    last: 'Yaseen'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='shahab' messageCount={10} isLogedIn={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status='error' />
    </div>
  );
}

export default App;
