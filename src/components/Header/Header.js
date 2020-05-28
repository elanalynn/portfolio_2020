import React from "react"
import { Link } from "gatsby"

import { MobileMenu } from "../MobileMenu/MobileMenu"
import { Navigation } from "../Navigation/Navigation"

import "./index.scss"

export const Header = ({ path }) => {
  let mobile

  if (typeof window !== `undefined`) {
    mobile = window.innerWidth < 640
  }

  return (
    <header className="page-header">
      <h1>
        <Link to="/">Elana Kopelevich</Link>
      </h1>
      {mobile ? <MobileMenu path={path} /> : <Navigation path={path} />}
    </header>
  )
}
