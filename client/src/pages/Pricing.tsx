import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageMotion from "./PageMotion";
import { api } from "../api/client";
import type { Plan } from "../types";

const extras = [
  ["Motion system", "Spark add-on", "Orbit incl.", "Nova incl."],
  ["CMS / admin", "—", "Starter", "Full"],
  ["Native-feel PWA", "—", "Optional", "Included"],
  ["SLA response", "48h", "24h", "4h"],
];

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    api.plans().then(setPlans);
  }, []);

  return (
    <PageMotion>
      <div className="page">
        <div className="page-hero">
          <div className="section-kicker">Transparent retainers of effort</div>
          <h1>
            Pricing that feels
            <br />
            like a product.
          </h1>
          <p className="sub">
            Three orbits. Pick a starting mass — we can always expand the universe later. These
            numbers are placeholders you can edit.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              className={`plan ₹{plan.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -12 }}
            >
              <div className="glow" />
              {plan.featured && (
                <span className="tag" style={{ marginBottom: 8 }}>
                  Most chosen
                </span>
              )}
              <h3 style={{ fontFamily: "var(--display)", fontSize: 28, margin: 0 }}>{plan.name}</h3>
              <p className="sub">{plan.tagline}</p>
              <div className="price">
              ₹{plan.price.toLocaleString()}
                <small style={{ fontSize: 14, color: "var(--muted)" }}> / {plan.cadence}</small>
              </div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                className="btn btn-lime"
                to="/contact"
                style={{ width: "100%", marginTop: 12 }}
              >
                Start with {plan.name}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="compare">
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th>Spark</th>
                <th>Orbit</th>
                <th>Nova</th>
              </tr>
            </thead>
            <tbody>
              {extras.map((row) => (
                <tr key={row[0]}>
                  {row.map((c) => (
                    <td key={c}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cta-band" style={{ margin: "48px 0 0" }}>
          <h2>Need a custom constellation?</h2>
          <Link className="btn" to="/contact">
            Talk numbers →
          </Link>
        </div>
      </div>
    </PageMotion>
  );
}
