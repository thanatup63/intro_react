import * as React from 'react'

function App() {

  const title = 'React'

  return (

      <div>
        <div>
          <h1>Hello, World {title}</h1>

          <label htmlFor="search">Search</label>
          <input type="text" id='search' /></input>
        </div>
      </div>
  )
}

export default App
