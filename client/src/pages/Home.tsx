import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeadForm from "../components/ui/LeadForm";
import PageMotion from "./PageMotion";
import { api } from "../api/client";
import type { Product } from "../types";
import product1 from "../images/prouduct_1.webp";
import product2 from "../images/prouduct_2.webp";
import product3 from "../images/prouduct_3.webp";
import product4 from "../images/prouduct_4.webp";
import product5 from "../images/prouduct_5.webp";
import product6 from "../images/prouduct_6.webp";
import product7 from "../images/prouduct_7.webp";
import product8 from "../images/prouduct_8.webp";

const productImages: Record<string, string> = {
  hrms: product1,
  onboarding: product2,
  restro: product3,
  logistics: product4,
  fintech: product5,
  ecom: product6,
  lms: product7,
  invoice: product8,
};

const defaultProducts: Product[] = [
  {
    key: "hrms",
    name: "HRMS Portal",
    label: "HRMS",
    benefits: [
      "Complete employee management in one secure system",
      "Smart leave & attendance with late-login reasons",
      "Task assignment and performance tracking",
      "Expense claims with document approvals",
      "Automated payslip generation",
    ],
  },
  {
    key: "onboarding",
    name: "Employee Onboarding",
    label: "EMP Onboarding",
    benefits: [
      "Centralized employee data, certificates and BGV",
      "Auto employee ID and profile creation",
      "Email verification workflow",
      "Joining letter, PF and declaration generation",
      "Faster, error-free hiring handoff",
    ],
  },
  {
    key: "restro",
    name: "Restrobills",
    label: "Restrobills",
    benefits: [
      "Captain and order apps with live menu updates",
      "POS billing, split payments and table control",
      "Owner + cashier web portal",
      "Realtime sales dashboards",
      "Inventory and kitchen workflow",
    ],
  },
  {
    key: "logistics",
    name: "Logistics Platform",
    label: "Logistics",
    benefits: [
      "End-to-end order placement and tracking",
      "Ops panel for drivers, routes and status",
      "Driver app with proof of delivery",
      "Admin dashboard for the full network",
      "Transparent workflow from pickup to drop",
    ],
  },
  {
    key: "fintech",
    name: "Financial Management",
    label: "Fintech",
    benefits: [
      "Loan creation, tracking and repayment",
      "Employee-based collection workflows",
      "Pigmy / daily collection integration",
      "Automated payment posting",
      "Realtime visibility of dues and collections",
    ],
  },
  {
    key: "ecom",
    name: "E-commerce Platform",
    label: "Ecom",
    benefits: [
      "Catalog, categories, pricing and inventory",
      "Smooth cart and checkout experience",
      "Secure payment gateway integration",
      "Order and delivery management",
      "Built to scale catalogs and traffic",
    ],
  },
  {
    key: "lms",
    name: "Learning Platform",
    label: "Education",
    benefits: [
      "Chapter-based video learning paths",
      "Auto assessments after every module",
      "Instant certificate generation",
      "Accurate evaluation without manual grading",
      "Fully automated learning workflow",
    ],
  },
  {
    key: "invoice",
    name: "Invoice & Payments",
    label: "Invoice Portal",
    benefits: [
      "Milestone-based invoice generation",
      "Instant paid / pending tracking",
      "Smart reminders before due dates",
      "Auto confirmation and status updates",
      "Final ledger invoice consolidation",
    ],
  },
];

const brands = ["BEL", "ENERPARC", "SHINE", "IRUSHH", "QUBI", "CTS", "HOMEX", "SHARK", "GEHNA"];
const recent = [
  { name: "SHARK PLUS", cat: "E-commerce", blurb: "Scalable store with payments and order ops." },
  { name: "Parame", cat: "GHG Monitoring", blurb: "Emissions tracking and sustainability reporting." },
  { name: "All About Fostering", cat: "Foster Training", blurb: "Learning, applications and certification." },
  { name: "GEHNA", cat: "Internal Software", blurb: "Secure workflows that lift team productivity." },
  { name: "Anand Laxmi Finance", cat: "FinTech", blurb: "Digital records and financial operations." },
  { name: "IRUSHH", cat: "Logistics", blurb: "Website + driver app for live tracking." },
];
const why = [
  "Skilled expert team",
  "Reliable project execution",
  "Budget-friendly solutions",
  "Business driven development",
  "Scalable modern solutions",
  "Client centric approach",
];
const process = [
  "Requirement Analysis",
  "Market Insight",
  "Design Blueprint",
  "UI Finalization",
  "Logic Development",
  "Responsive Testing",
  "SEO Security",
  "UAT & Launch",
];
const reviews = [
  {
    name: "Shri Naik",
    text: "One of the best software studios in Bangalore. Recommended after seeing their HRMS — delivery cost was far more reasonable than others.",
  },
  {
    name: "Abhi",
    text: "Professional, responsive, and they actually understood the brief. Clean, user-friendly website shipped on time.",
  },
  {
    name: "shivakumar Shiv",
    text: "At IRUSHH we run end-to-end logistics on their platform. Ops visibility and transport management improved overnight.",
  },
  {
    name: "B Karthikeswara Reddy",
    text: "Supportive from discovery to launch. Always available, always professional — our website journey felt easy.",
  },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [active, setActive] = useState(0);

  useEffect(() => {
    api.products().then((p) => {
      if (p.length) setProducts(p);
    });
  }, []);

  const product = products[active];

  return (
    <PageMotion>
      <section className="hero">
        <div className="stars" />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Top Website & App
            <br />
            Development <span>Company</span>
            <br />
            in Bangalore
          </motion.h1>
     


          <p className="lead">We Build Platforms That Move Businesses Forward.</p>
          <p className="chips">Custom Website | ERP / CRM Solutions | Mobile App Development | SEO</p>
          <div className="hero-actions">
            <Link className="btn btn-lime" to="/contact">
              Discuss Project
            </Link>
            <Link className="btn btn-ghost" to="/portfolio">
              Our Works
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <LeadForm source="home-hero" />
        </motion.div>
      </section>

      <div className="ratings">
        {[
          ["Clutch", "5.0 Rating"],
          ["GoodFirms", "5.0 Rating"],
          ["Google Reviews", "4.9 Rating"],
        ].map(([k, v]) => (
          <div className="rating" key={k}>
            <div>
              <small>Rated On {k}</small>
              <div>
                <strong>{v.split(" ")[0]}</strong> {v.replace(/^[0-9.]+ /, "")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <div className="logo-pill" key={`${b}-${i}`}>
              {b}
            </div>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="section-kicker">Trusted brands</div>
        <h2>Brands That Trust Our Technology</h2>
        <div className="stats-row">
          <span className="stat">20+ Satisfied Customers</span>
          <span className="stat">10+ Achievements</span>
          <span className="stat">4+ Years Experience</span>
        </div>
      </section>

      <section className="section alt">
        <div className="section-kicker">Products</div>
        <h2>Powerful Products Built to Simplify Business Operations</h2>
        <div className="product-tabs">
          {products.map((p, i) => (
            <button
              key={p.key}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
        {product && (
          <motion.div
            className="product-panel"
            key={product.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="product-visual">
            <img
  src={productImages[product.key]}
  alt={product.name}
  className="product-image"
/>
              </div>
            <div>
              <h3>{product.name}</h3>
              <p className="sub">Benefits</p>
              <ul className="benefits">
                {product.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </section>


      {/* <section className="section">
        <div className="section-kicker">Recent projects</div>
        <h2>Digital Projects We’re Currently Working On</h2>
        <p className="sub">
          Scalable, secure, user-friendly platforms tailored to each client — plus selected live
          work on the portfolio page.
        </p>
        <div className="project-grid">
          {recent.map((r) => (
            <Link to="/portfolio" className="project-card" key={r.name}>
              <div className="thumb">{r.name.split(" ")[0]}</div>
              <div className="body">
                <span className="tag">{r.cat}</span>
                <h3>{r.name}</h3>
                <p className="sub">{r.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      <section className="section alt">
        <div className="why-grid">
          <div>
            <div className="section-kicker">Why businesses choose us</div>
            <h2>Technology expertise, strategy, and reliable support.</h2>
            <div className="why-list">
              {why.map((w, i) => (
                <div className="why-item" key={w}>
                  <span className="n">{i + 1}</span>
                  <div>
                    <strong>{w}</strong>
                    <p className="sub" style={{ margin: "6px 0 0" }}>
                      Built to help teams grow faster and operate smarter.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="product-visual" style={{ minHeight: 420 }}>
            8 Easy
            <br />
            Delivery
            <br />
            Process
          </div> */}
        </div>
        <div className="process">
          {process.map((step, i) => (
            <div className="process-step" key={step}>
              <b>0{i + 1}</b>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reviews">
          <div className="review-score">
            <p>Excellent</p>
            <div className="stars-row">★★★★★</div>
            <p className="big">4.9</p>
            <p>Google Reviews · 111 reviews</p>
          </div>
          <div className="review-cards">
            {reviews.map((r) => (
              <article className="review-card" key={r.name}>
                <strong>{r.name}</strong>
                <p className="sub">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <h2>Ready to build your next big idea?</h2>
        <Link className="btn" to="/contact">
          Let’s Connect →
        </Link>
      </div>
    </PageMotion>
  );
}
