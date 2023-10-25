import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Input from './components/Input';
import Container from './components/Container';
import { User } from './components/User';

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
      <Greet name='shahab' messageCount={11} isLogedIn={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status='error' />
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id);
      }} />
      <Input value='' handleChange={(event) => console.log(event)
      } />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <User />
    </div>
  );
}

export default App;
