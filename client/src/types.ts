export type Project = {
  slug: string;
  title: string;
  category: string;
  url: string;
  previewImage: string;
  description: string;
  tags: string[];
  featured: boolean;
};

export type Plan = {
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  featured: boolean;
  accent: string;
  features: string[];
};

export type Product = {
  key: string;
  name: string;
  label: string;
  benefits: string[];
};

export type ApiList<T> = { ok: boolean; data: T };
