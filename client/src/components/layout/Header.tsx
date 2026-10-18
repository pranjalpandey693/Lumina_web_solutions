import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/" className="brand">
        <span className="brand-mark">L</span>
        <span>
        Lumina 
          <small>Web Solutions</small>
        </span>
      </NavLink>
      <nav className={`nav ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <a className="call-pill" href="tel:+919389426262">
          <span className="icon">
            <Phone size={16} color="#fff" />
          </span>
          <span>
            <small>Call Anytime</small>
            <b>Tel: +91 9389426262</b>
          </span>
        </a>
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
