import React, {useState} from 'react'
import Card1 from './Card1'

const Card2 = ()=>{

    const [change, setChange] = useState(false);

    const applyChange = () =>{
      setChange(!change);
      console.log(change);
    };
    return(
        <div>
        {change ? null : (
          <div>
            <h1>This my fu</h1>
            <h3>Get Ready For More</h3>
            <button onClick={applyChange}>View More</button>
          </div>
        )}
        <Card1
          change={change}
          setChange={setChange}
          applyChange={applyChange}
        />
      </div>
    )
}

export default Card2;