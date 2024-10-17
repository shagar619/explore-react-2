
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';


function App() {

  function handleClick1() {
    alert('Button Clicked 1!');
  }

  const handleClick2 = () => {
    alert('Button Clicked 2!')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>

      <h1>Explore React Part 2</h1>

      <Users></Users>

      <br/>
      <br/>
      <Counter></Counter>
      <br/>
      <br/>
      <Team></Team>

      <br/>
      <br/>
      <button onClick={handleClick1}>Click 1!</button>
      <br/>
      <br/>
      <button onClick={handleClick2}>Click 2!</button>
      <br/>
      <br/>
      <button onClick={() => {alert('Button Clicked 3!')}}>Click 3!</button>
      <br/>
      <br/>
      <button onClick={() => addToFive(3)}>Click 4!</button>

    </>
  )
}

export default App
