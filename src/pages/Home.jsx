import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="categories"> go to categories page</Link>
        <ul>
            <li>
                <b>file name:</b> Home.jsx
            </li>
            <li>
                <b>component name:</b> Home
            </li>
        </ul>


    </div>
  )
}

export default Home