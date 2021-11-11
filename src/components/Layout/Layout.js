import React from "react"

import { Header } from "../Header/Header"
import { SEO } from "../SEO/SEO"
import { ExternalLink } from "../ExternalLink/ExternalLink"

import "./index.scss"

export const Layout = ({ children, pageTitle, path }) => {
  const className = pageTitle => {
    if (["Home"].includes(pageTitle)) return "cow-background"
    if (["Connect"].includes(pageTitle)) return "pigeon-background"
  }

  return (
    <div className={`${className(pageTitle)} background-image`}>
      <div className="wrapper">
        <SEO title={pageTitle} />
        <Header path={path} />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </div>
  )
}
