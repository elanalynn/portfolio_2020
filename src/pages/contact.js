import React from "react"

import { Layout } from "../components/Layout/Layout"

const contact = () => (
  <Layout pageTitle="Contact">
    <h1>Contact</h1>
    <div className="social-icons">
      <a href="https://github.com/elanalynn" target="_blank">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/github.svg"
        />
      </a>
      <a href="https://www.linkedin.com/in/elanalynn/" target="_blank">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
        />
      </a>
      <a href="https://www.twitter.com/elanalynn/" target="_blank">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
        />
      </a>
    </div>
    <form
      className="contact"
      method="post"
      action="/success"
      name="contact"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Message
        <textarea rows="5" type="text" name="message" required />
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default contact
