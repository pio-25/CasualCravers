import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Casualcravers</h1>

      <p className="about-intro">
        Casualcravers is a modern marketplace focused on trendy, comfortable,
        and affordable casual wear. We aim to bring quality fashion that fits
        everyday lifestyles.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make casual fashion accessible to everyone by
          offering stylish clothing at fair prices, without compromising on
          comfort or quality.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✔ Trendy casual wear for daily use</li>
          <li>✔ Comfortable and quality fabrics</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Easy browsing and simple cart experience</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          Casualcravers focuses on simplicity, style, and user experience. This
          platform is designed as a clean and static ecommerce project that
          demonstrates product browsing and cart functionality.
        </p>
      </div>
    </div>
  );
}

export default About;
