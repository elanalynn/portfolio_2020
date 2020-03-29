import React from "react"

import { Layout } from "../components/Layout/Layout"

const contact = () => (
  <Layout pageTitle="Contact">
    <h1>Contact</h1>
    <form
      className="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Message
        <textarea rows="10" type="text" name="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default contact
