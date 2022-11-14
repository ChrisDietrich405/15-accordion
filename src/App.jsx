import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <div>
      {data.map((info) => {
        return (
          <SingleQuestion info={info}/>
        )
      })}
    </div>
  )
}

export default App;