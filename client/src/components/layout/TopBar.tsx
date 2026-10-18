import { Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="topbar">
      <a href="mailto:websolutionlumina@gmail.com">
        <Mail size={14} /> websolutionlumina@gmail.com
      </a>
      <span>
        <MapPin size={14} /> Singasandra, Bangalore
      </span>
    </div>
  );
}
