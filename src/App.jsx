import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


  function App() {
    function handleClick(){
      alert('button  Clicked');
    }
  
    const handleClick2 = () =>{
      alert('button 2 clicked')
  
    }
  
    // vejailla
    const addToFive = (num) =>{
      alert (num + 5);
    }

  return (
    <>
      
      <h1>React core Concepts 2</h1>

        <Friends></Friends>

        <Users></Users>

        <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert ('third clicked')}}>Third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>


      
      
    </>
  )
}

export default App
