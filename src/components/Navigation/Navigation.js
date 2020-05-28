import React from "react"
import { Link } from "gatsby"

import "./index.scss"

export const Navigation = ({ navClass, path }) => {
  const isActive = page => (path.includes(page) ? "active" : "")
  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link to="/about" className={isActive("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/writing" className={isActive("writing")}>
            Writing
          </Link>
        </li>
        <li>
          <Link to="/art" className={isActive("art")}>
            Art
          </Link>
        </li>
        <li>
          <Link to="/code" className={isActive("code")}>
            Code
          </Link>
        </li>
        <li>
          <Link to="/connect" className={isActive("connect")}>
            Connect
          </Link>
        </li>
      </ul>
    </nav>
  )
}
