import { FormEvent, useState } from "react";
import { api } from "../../api/client";

const budgets = [
  "Select Budget",
  "less than 10 thousand",
  "10 thousand - 20 thousand",
  "20 thousand - 50 thousand",
  "More than 50 thousand",
];

export default function LeadForm({
  source = "home",
  dark = false,
}: {
  source?: string;
  dark?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries()) as Record<string, string>;
    payload.source = source;
    const res = await api.submitLead(payload);
    if (res.ok) {
      setStatus("ok");
      setMsg(res.message || "Request received.");
      e.currentTarget.reset();
    } else {
      setStatus("err");
      setMsg(res.error || "Could not send. Try again.");
    }
  }

  return (
    <div className="lead-card" style={dark ? { background: "#121920", color: "#fff" } : undefined}>
      <h3>Begin Your Growth</h3>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <input name="phone" placeholder="Phone Number" />
        <select name="budget" defaultValue="Select Budget">
          {budgets.map((b) => (
            <option key={b} value={b} disabled={b === "Select Budget"}>
              {b === "Select Budget" ? "Project Budget" : b}
            </option>
          ))}
        </select>
        <textarea name="message" placeholder="Enter a message..." />
        <button className="btn btn-lime" type="submit">
          Submit Request
        </button>
        {status === "ok" && <p className="form-ok">{msg}</p>}
        {status === "err" && <p className="form-err">{msg}</p>}
      </form>
    </div>
  );
}
