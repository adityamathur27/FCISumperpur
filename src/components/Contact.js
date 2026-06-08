import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope, FaPen, FaClock } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', mobile: '', address: '', email: '', query: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';

    if (!form.mobile.trim()) {
      errs.mobile = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      errs.mobile = 'Invalid mobile number. Must be a 10-digit number.';
    }

    if (!form.address.trim()) errs.address = 'Address is required.';

    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
      errs.email = 'Invalid email address.';
    }

    if (!form.query.trim()) errs.query = 'Query is required.';

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

    setIsSubmitting(true);

    // Configure new account noreply.fcisumerpur@gmail.com
    emailjs.send(
      'service_htjrenz', // EmailJS Service ID
      'template_rqw094k', // EmailJS Template ID
      {
        from_name: form.name,
        from_email: form.email,
        mobile_no: form.mobile,
        address: form.address,
        message: form.query, // Mapped query to message for template compatibility
      },
      'ejS-mq55jK-s0LeHH' // EmailJS Public Key
    )
      .then((result) => {
        window.alert('Your query has been sent successfully!');
        setForm({ name: '', mobile: '', address: '', email: '', query: '' });
        setIsSubmitting(false);
        navigate('/');
      }, (error) => {
        window.alert('Failed to send your query. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">We would love to hear from you. Please submit your queries below and our team will get back to you shortly.</p>

      <div className="contact-layout">

        {/* Left Column: Contact Card */}
        <div className="contact-info-card">
          <h3>Institute Directory</h3>
          <div className="info-card-divider"></div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Our Location</h4>
              <p>Opp. 132 KV GSS, National Highway Bypass, Jakha Nagar, Sumerpur, Pali, Rajasthan - 306902</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Call Helpline</h4>
              <p>02933-255030</p>
              <p>+91 9413592614, +91 9694994586</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email Inquiries</h4>
              <p><a href="mailto:fcisumerpur@gmail.com">fcisumerpur@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <div>
              <h4>Office Timings</h4>
              <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sundays: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-card">
          <h3>Submit Query</h3>
          <div className="info-card-divider"></div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="input-field-wrapper">
              <div className="input-icon-box"><FaUser /></div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            {errors.name && <span className="error-msg">{errors.name}</span>}

            <div className="input-field-wrapper">
              <div className="input-icon-box"><FaPhone /></div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </div>
            {errors.mobile && <span className="error-msg">{errors.mobile}</span>}

            <div className="input-field-wrapper">
              <div className="input-icon-box"><FaMapMarkerAlt /></div>
              <input
                type="text"
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            {errors.address && <span className="error-msg">{errors.address}</span>}

            <div className="input-field-wrapper">
              <div className="input-icon-box"><FaEnvelope /></div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            {errors.email && <span className="error-msg">{errors.email}</span>}

            <div className="input-field-wrapper textarea-wrapper">
              <div className="input-icon-box"><FaPen /></div>
              <textarea
                name="query"
                placeholder="Your Query / Message"
                value={form.query}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {errors.query && <span className="error-msg">{errors.query}</span>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
