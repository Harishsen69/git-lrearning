import React from 'react'
import { useState } from 'react'
function Home() {
  const [mydata,setData]=useState([])

  const Data =
    [
      { id: 1, name: 'watch', cat: 'fashion' },
      { id: 2, name: 'ring', cat: 'fashion' },
      { id: 3, name: 'tv', cat: 'electric' },
      { id: 4, name: 'dress', cat: 'fashion' }
    ]

  function Demo(event) {
    const FilterData=Data.filter(i=>(i.cat==event.target.value))
    console.log(FilterData)
    setData(FilterData)
  }

  return (
    <div>
      <select onChange={Demo}>
        {Data.map(i => (
          <option>{i.cat}</option>
        ))}
      </select>

      {mydata.map(i=>(
        <div>
          <h2>{i.name}</h2>
          <p>{i.cat}</p>
        </div>
      ))}
    </div>
  )
}

export default Home