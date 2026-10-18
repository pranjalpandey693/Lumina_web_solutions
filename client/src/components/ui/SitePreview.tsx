import { useState } from "react";
import type { Project } from "../../types";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

function shot(url: string) {
  return `https://image.thum.io/get/width/1400/crop/3200/noanimate/${url}`;
}

export default function SitePreview({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const [src, setSrc] = useState(project.previewImage || shot(project.url));

  return (
    <article className={`work-row ${reverse ? "reverse" : ""}`}>
      <div className="browser">
        <div className="browser-bar">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
          <div className="browser-url">{project.url}</div>
        </div>
        <div className="viewport" aria-label={`${project.title} preview`}>
          <img
            src={src}
            alt={`${project.title} website preview`}
            onError={() =>
              setSrc(
                `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=1280`
              )
            }
          />
        </div>
      </div>
      <div className="desc-box">
        <span className="tag">{project.category}</span>
        <h3 style={{ fontFamily: "var(--display)", fontSize: 32, margin: "6px 0" }}>
          {project.title}
        </h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{project.description}</p>
        <div className="chip-row">
          {project.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btn-lime" href={project.url} target="_blank" rel="noreferrer">
            Visit live site <ExternalLink size={16} />
          </a>
          <Link className="btn btn-ghost" to="/contact">
            Build something similar
          </Link>
        </div>
        <p style={{ fontSize: 12, color: "#7f887e", marginTop: 16 }}>
          Hover the preview — it scrolls the full landing page.
        </p>
      </div>
    </article>
  );
}
