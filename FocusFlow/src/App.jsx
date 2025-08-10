
import { useDispatch,useSelector } from 'react-redux'

import {increment,decrement} from './slice/counterSlice.jsx'
import './App.css'

function App() {

  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  console.log(count);
  
  function handleUp(){
    dispatch(increment());
  }

  function handleDown(){
    dispatch(decrement());
  }

  return (
    <>
      <h1>React Redux</h1>
      <div>
        <h2>{count}</h2>
      </div>
      <div>
        <button style = {{marginRight : "14px"}} onClick = {handleUp}>Up</button>
        <button onClick = {handleDown}>Down</button>
      </div>
    </>
  )
}

export default App
