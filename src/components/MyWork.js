import React from 'react'
import './MyWork.css'

const MyWork = () => (
  <div className="my-work">
    <div className="my-work-flex">
      <h1>Welcome to My Work page!</h1>
    </div>
    <div className="my-work-flex">
      <div>
        <p>
          This is where people will to see what you have worked on in more
          detail!
        </p>
        <p>Here is a few things I have worked on:</p>
        <ul className="my-work-list">
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </div>
)

export default MyWork
