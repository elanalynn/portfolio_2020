import React, { useState } from "react"
import { Navigation } from "../Navigation/Navigation"
import { Burger } from "../Burger/Burger"

import "./index.scss"

export const MobileMenu = ({ path }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile">
      <button onClick={() => setOpen(!open)}>
        <Burger />
      </button>
      <Navigation navClass={open ? "open" : "closed"} path={path} />
    </div>
  )
}
