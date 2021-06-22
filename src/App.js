
import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)


  const decrementCount = () => {
    if (count !== 0) {
      setCount(count-1)
    }
  }

  const incrementCount = () => {
    setCount(count+1)
  }

    return (
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button
          style={{backgroundColor:'red'}}
          onClick={decrementCount}
        >-</button>
        <button
          style={{backgroundColor:'green'}}
          onClick={incrementCount}
        >+</button>
      </div>
    )
}

export default App