import React from "react"

import { Layout } from "../components/Layout/Layout"

const contact = () => (
  <Layout pageTitle="Contact">
    <h1>Contact</h1>
    <form
      className="contact"
      method="post"
      name="contact"
      netlify-honeypot="bot-field"
      data-netlify="true"
      data-netlify-recaptcha="true"
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
        <textarea rows="10" type="text" name="message" required />
      </label>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default contact
