import { useEffect, useState } from "react";
import PageMotion from "./PageMotion";
import SitePreview from "../components/ui/SitePreview";
import { api } from "../api/client";
import type { Project } from "../types";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.projects().then(setProjects);
  }, []);

  return (
    <PageMotion>
      <div className="page">
        <div className="page-hero">
          <div className="section-kicker">Selected work</div>
          <h1>Live sites, not mockups.</h1>
          <p className="sub">
            Three production websites — hover each frame to scroll the landing page, then open the
            live URL. Cards on the side lift and glow on hover.
          </p>
        </div>
        <div className="preview-wrap" style={{ marginTop: 40 }}>
          {projects.map((p, i) => (
            <SitePreview key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </PageMotion>
  );
}
