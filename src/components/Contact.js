import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contact">
    <div className="contact-flex">
      <h1>Welcome to the contact me page!</h1>
    </div>
    <div className="contact-flex">
      <div>
        <p>This is where people will come to contact you!</p>
        <p>Here's a few ways to contact me:</p>
        <ul className="contact-list">
          <li>Email: andyolson09@gmail.com</li>
          <li>Phone: 8325883933</li>
          <li>LinkedIn: mylinkedinthatidontknowo.com</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Contact
