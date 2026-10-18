import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 12 }}>
            <span className="brand-mark">L</span>
            <span>Lumina Web Solutions</span>
          </div>
          <p>
            We provide a wide range of digital services to businesses and
            individuals — custom websites, product platforms, and growth-ready
            apps from Bangalore.
          </p>
          <a href="mailto:websolutionlumina@gmail.com">
            websolutionlumina@gmail.com
          </a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div>
          <h4>Services</h4>
          <p>Product Development</p>
          <p>Web Application</p>
          <p>Full Stack / MERN</p>
          <p>CRM Development</p>
          <p>SEO & Paid Ads</p>
        </div>
        <div>
          <h4>Studios</h4>
          <p>India — Singasandra, Bengaluru</p>
          <p>(+91) 9389426262</p>
        </div>
      </div>
      <div className="legal">© {new Date().getFullYear()} Lumina Web Solutions. All rights reserved.</div>
    </footer>
  );
}
