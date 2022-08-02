import React, { useState } from 'react';

const Movie = [
  {
    MovieName: "",
    Image: "",
    directorName: "",
    link: ""
  }
]

function HookuseState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(Movie)
  const [items, setItems] = useState([])

  const addItem = () => {
    // setItems([...items, {
    //   name: items.length+1,
    //   value: items.length+1
    // }])
    setItems([...items, {
      name: name.MovieName,
      drectorName: name.directorName
    }])
  }
  console.log(items)
  return (
    <>
      <div><br></br>
        <button onClick={() => setCount(count + 1)}> count {count}</button>
      </div>
      <br></br>
      <div>
        <input type="text" value={name.MovieName} onChange={e => setName({ ...name, MovieName: e.target.value })} />
        <input type="text" value={name.directorName} onChange={e => setName({ ...name, directorName: e.target.value })} />
        <h2> Movie name is : {name.MovieName}</h2>
        <h2> Movie directorName is : {name.directorName}</h2>
      </div>
      <br></br>
      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {
            items.map(item => (<li key={item.name}>{item.name} {item.drectorName}</li>
            ))
          }
        </ul>
      </div>


    </>
  )
}

export default HookuseState;