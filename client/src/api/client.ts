import type { ApiList, Plan, Product, Project } from "../types";

const fallbackProjects: Project[] = [
  {
    slug: "clim-arctique",
    title: "Clim-Arctique",
    category: "HVAC & Climate",
    url: "https://www.clim-arctique.com/",
    previewImage:
      "https://image.thum.io/get/width/1400/crop/2800/noanimate/https://www.clim-arctique.com/",
    description:
      "A conversion-focused site for Québec’s HVAC specialists — heat pumps, ventilation, and seasonal maintenance, with a calm winter-luxury visual language.",
    tags: ["Local SEO", "Service business", "Québec"],
    featured: true,
  },
  {
    slug: "samuel-richard",
    title: "Samuel Richard",
    category: "Real Estate",
    url: "https://www.vendreavecsamuel.com/",
    previewImage:
      "https://image.thum.io/get/width/1400/crop/2800/noanimate/https://www.vendreavecsamuel.com/",
    description:
      "A residential broker brand in Québec: listings, buyer/seller journeys, free evaluations and property alerts in a cinematic, high-trust layout.",
    tags: ["Listings", "Lead capture", "Brand site"],
    featured: true,
  },
  {
    slug: "clinique-lona",
    title: "Clinique Lona",
    category: "Médico-esthétique",
    url: "https://www.cliniquelonamedicoesthetique.com/",
    previewImage:
      "https://image.thum.io/get/width/1400/crop/2800/noanimate/https://www.cliniquelonamedicoesthetique.com/",
    description:
      "A Gatineau clinic showcase for CoolSculpting, injectables and laser — editorial photography, treatment storytelling, and appointment-ready CTAs.",
    tags: ["Clinic", "Treatments", "Gatineau"],
    featured: true,
  },
];

async function getJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    const json = (await res.json()) as ApiList<T>;
    return json.data ?? fallback;
  } catch {
    return fallback;
  }
}

export const api = {
  projects: () => getJson<Project[]>("/api/projects", fallbackProjects),
  products: () =>
    getJson<Product[]>("/api/projects/products", [
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
    ]),
  plans: () =>
    getJson<Plan[]>("/api/plans", [
      {
        name: "Spark",
        price: 21999,
        cadence: "project",
        tagline: "Launch a sharp presence",
        featured: false,
        accent: "#9be21a",
        features: [
          "5-page marketing site",
          "Mobile-first UI system",
          "Contact + SEO basics",
          "2 revision rounds",
          "14-day delivery window",
        ],
      },
      {
        name: "Orbit",
        price: 31999,
        cadence: "project",
        tagline: "The studio favourite",
        featured: true,
        accent: "#c8f542",
        features: [
          "Custom design system",
          "CMS / dashboard hooks",
          "Motion + scroll stories",
          "Lead capture + analytics",
          "Priority support 45 days",
        ],
      },
      {
        name: "Nova",
        price: 51999,
        cadence: "project",
        tagline: "Product-grade platforms",
        featured: false,
        accent: "#7cf4d4",
        features: [
          "Web app or multi-role portal",
          "API + MongoDB architecture",
          "Auth, roles, billing-ready",
          "QA, UAT & launch runbook",
          "90-day growth retainer option",
        ],
      },
    ]),
  submitLead: async (payload: Record<string, string>) => {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.json() as Promise<{ ok: boolean; message?: string; error?: string }>;
  },
};
