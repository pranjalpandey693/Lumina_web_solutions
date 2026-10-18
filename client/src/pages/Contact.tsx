import { Mail, MapPin, Phone, Clock } from "lucide-react";
import LeadForm from "../components/ui/LeadForm";
import PageMotion from "./PageMotion";

export default function Contact() {
  return (
    <PageMotion>
      <div className="page">
        <div className="page-hero">
          <div className="section-kicker">Let’s build</div>
          <h1>Contact us</h1>
          <p className="sub">
            Tell us the product, the constraint, and the date it has to feel inevitable. We’ll
            reply with a scoped plan.
          </p>
        </div>
        <div className="contact-grid" style={{ marginTop: 36 }}>
          <div>
            <div className="info-card">
              <Phone size={18} color="var(--lime)" />
              <h3>Call</h3>
              <a href="tel:+919389426262">+91 9389426262</a>
            </div>
            <div className="info-card">
              <Mail size={18} color="var(--lime)" />
              <h3>Email</h3>
              <a href="mailto:websolutionlumina@gmail.com">websolutionlumina@gmail.com</a>
            </div>
            <div className="info-card">
              <MapPin size={18} color="var(--lime)" />
              <h3>Studio</h3>
              <p>Singasandra, Bengaluru 560068</p>
            </div>
            <div className="info-card">
              <Clock size={18} color="var(--lime)" />
              <h3>Hours</h3>
              <p>Mon – Fri: 09:00 – 18:00 · Weekends closed</p>
            </div>
          </div>
          <LeadForm source="contact-page" dark />
        </div>
      </div>
    </PageMotion>
  );
}
