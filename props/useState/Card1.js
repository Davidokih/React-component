import React, {useState} from 'react'

const Card1 = ({ change, applyChange })=>{

    return(
        <div>
      {change ? (
        <div>
          <h1>Working with react js</h1>
          <h3>Making use of components in react</h3>
          <button onClick={applyChange}>Go Back</button>
        </div>
      ) : null}
    </div>
    )
}

export default Card1;
