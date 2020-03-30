import React from "react"

import { Header } from "../Header/Header"
import { SEO } from "../SEO/SEO"

import "./index.scss"

export const Layout = ({ children, pageTitle }) => (
  <div className={["Home"].includes(pageTitle) ? "background-image" : ""}>
    <div className="wrapper">
      <SEO title={pageTitle} />
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {["Home"].includes(pageTitle) ? (
          <span>
            &nbsp;|
            <a
              href="https://unsplash.com/photos/tz87qQK9n58"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image by Shane Rounce
            </a>
          </span>
        ) : (
          ""
        )}
      </footer>
    </div>
  </div>
)
