import React, { useState, useEffect } from 'react'

function App() {

  const [data, serData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        serData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>loading ...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )

}

export default App