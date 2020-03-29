import React from "react"
import { Link } from "gatsby"

import { Navigation } from "../Navigation/Navigation"

import "./index.scss"

export const Header = () => (
  <header className="page-header">
    <h1>
      <Link to="/">Elana Kopelevich</Link>
    </h1>
    <Navigation />
  </header>
)
