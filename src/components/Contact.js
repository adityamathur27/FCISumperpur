import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    emailjs.send(
      'service_hsv3bro', // Replace with your EmailJS Service ID
      'template_nxwfle2', // Replace with your EmailJS Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'XMMn9UMuGFToboG2H' // Replace with your EmailJS Public Key
    )
    .then((result) => {
      window.alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      navigate('/');
    }, (error) => {
      window.alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>FCI Sumerpur</strong></p>
        <p>Opp. 132 kv GSS, National Highway Bypass, Jakha Nagar, Sumerpur, Pali, Rajasthan.</p>
        <p>Email: fcisumerpur@gmail.com</p>
        <p>Phone: 02933-255030, 9413592614, 9694994586, 9680675153</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error-msg">{errors.message}</span>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
