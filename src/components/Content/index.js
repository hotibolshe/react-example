import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => (
  <div>
    <h2>Content</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Content
