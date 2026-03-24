import "./Contact.css";


function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p className="contact-text">
        We’d love to hear from you! Whether you have questions about our products,
        need help with your order, or want to place a custom request, feel free
        to reach out.
      </p>

      <div className="contact-section">
        <h3>Customer Support</h3>
        <p>
          Our support team is available to assist you with browsing, cart issues,
          and general inquiries related to Casualcravers.
        </p>
        <p><strong>Email:</strong> support@casualcravers.com</p>
      </div>

      <div className="contact-section">
        <h3>Custom Orders</h3>
        <p>
          Looking for something unique? You can directly chat with sellers for
          custom sizes, designs, or bulk orders. We encourage communication to
          ensure the best shopping experience.
        </p>
      </div>

      <div className="contact-section">
        <h3>Business & Collaboration</h3>
        <p>
          Interested in collaborating with Casualcravers or featuring your
          products on our platform? Reach out to us via email for partnership
          opportunities.
        </p>
      </div>

      <div className="contact-section">
        <h3>Follow Us on Instagram</h3>
        <p>
          Stay updated with our latest collections, offers, and casual fashion
          trends.
        </p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img src="/images/insta.jpg" alt="Instagram" />
          <span>@casualcravers</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
