import React from "react"
import { Link } from "gatsby"

import "./index.scss"

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/writing">Writing</Link>
      </li>
      <li>
        <Link to="/art">Art</Link>
      </li>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
