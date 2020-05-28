import React from "react"

import { ExternalLink } from "../components/ExternalLink/ExternalLink"
import { Layout } from "../components/Layout/Layout"

const connect = ({ path }) => (
  <Layout pageTitle="Connect" path={path}>
    <h1>Connect</h1>
    <div className="social-icons">
      <ExternalLink href="https://github.com/elanalynn">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/github.svg"
          alt="github"
        />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/elanalynn/">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
          alt="linkedin"
        />
      </ExternalLink>
      <ExternalLink href="https://www.twitter.com/elanalynn/">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
          alt="twitter"
        />
      </ExternalLink>
    </div>
    <form
      className="contact"
      name="Contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="Contact" />
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Message
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default connect
