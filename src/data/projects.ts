export type CardImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: string;
};

export type Project = {
  /** URL slug; also the filename of the page in src/pages. */
  slug: string;
  /** Doubles as the page eyebrow, the breadcrumb tail and the next-project kicker. */
  company: string;
  title: string;
  /** Kept verbatim — these do not derive cleanly from company + title. */
  pageTitle: string;
  lede: string;
  /** dt/dd pairs for the tech-pack title block. */
  spec: [string, string][];
  card: {
    co: string;
    blurb: string;
    tags: string[];
    /** The full-width hero card on the home page. */
    feature?: boolean;
    /** object-fit: contain on the card image. */
    contain?: boolean;
    images: CardImage[];
  };
};

export const projects: Project[] = [
  {
    slug: "verve-motion",
    company: "Verve Motion",
    title: "Safelift Soft Exoskeleton V4 & V5",
    pageTitle: "Verve Motion · Laura West",
    lede: "Verve Motion is a robotics start-up that develops wearable devices to help warehouse workers lift with less strain. Through my tenure at Verve, I developed both the V4 and V5 versions of the suit.",
    spec: [
      ["Role", "Product Development Manager"],
      ["Category", "Soft Robotic Exoskeleton"],
      ["Project Highlights", "Material Sourcing and Testing. Factory Onboarding and Quality improvement. Continuous Product Innovation. Team Leadership"],
      ["Status", "In market"],
    ],
    card: {
      co: "Verve Motion · Wearable robotics",
      blurb:
        "A powered suit that reduces strain on the lower back during lifting activities.",
      tags: ["Material Sourcing and Testing", "Factory Onboarding and Quality Improvement", "Continuous Product Innovation", "Team Leadership"],
      feature: true,
      images: [
        {
          src: "/img/verve-v5-4.jpg",
          alt: "Back view of a person wearing the V5 Safelift suit",
          width: 1060,
          height: 1060,
        },
      ],
    },
  },
  {
    slug: "trusst",
    company: "Trusst Lingerie",
    title: "Trusst support structure",
    pageTitle: "Trusst · Laura West",
    lede: "I co-founded Trusst Lingerie to design better bras for fuller-busted women. Existing bras don't fully support them: underwires cause pain and too much weight goes to the shoulder straps. We built a support system that moves the weight of a larger bust onto the core of the body.",
    spec: [
      ["Role", "Founder and Chief Product Officer"],
      ["Category", "Engineered Apparel"],
      ["Project Highlights", "Flexible, cantilevered nylon structure, injection molded and over-molded into foam cups. Sizes 32F to 42G"],
      ["Status", "Off Market"],
    ],
    card: {
      co: "Trusst Lingerie · Co-founder",
      blurb:
        "A cantilevered nylon structure, over-molded into foam cups, that moves bust weight off the shoulders.",
      tags: ["Injection Molding", "New Process Development", "Foam Molding", "Cut and Sew", "Technical Apparel Fabrics"],
      images: [
        {
          src: "/img/trusst-illustration.jpg",
          alt: "Cutaway illustration of the Trusst support structure",
          width: 1500,
          height: 1226,
        },
      ],
    },
  },
  {
    slug: "thule-sapling",
    company: "Thule",
    title: "Sapling child carrier",
    pageTitle: "Thule Sapling · Laura West",
    lede: "The Sapling is a framed child carrier that combines injection molded parts, extruded aluminum profiles, apparel fabrics and technical fabrics.",
    spec: [
      ["Role", "Product Developer"],
      ["Category", "Technical carry"],
      ["Project Highlights", "Injection molded parts, extruded aluminum and technical fabrics. 95-item critical-to-quality document"],
      ["Status", "In market"],
    ],
    card: {
      co: "Thule · Product Developer",
      blurb:
        "A washable child carrier compliant with international safety standards.",
      tags: ["CTQ", "Quality Improvement", "Supplier Communication", "Product Testing"],
      contain: true,
      images: [
        {
          src: "/img/sapling-back.jpg",
          alt: "Thule Sapling child carrier",
          width: 1097,
          height: 1200,
        },
      ],
    },
  },
  {
    slug: "thule-approach",
    company: "Thule",
    title: "Approach roof top tent",
    pageTitle: "Thule Approach · Laura West",
    lede: "Thule Approach is a redesigned roof top tent. My development work focused on the tent fabric: how it attaches to the hard base, how it comes off for cleaning, and how its seams hold up to weather.",
    spec: [
      ["Role", "Product Developer"],
      ["Category", "Roof top tents"],
      ["Project Highlights", "Fabric-to-base attachment and seam durability"],
      ["Status", "In market"],
    ],
    card: {
      co: "Thule · Product Developer",
      blurb: "A removable tent body on a zipper gimp, with flat felled, seam-taped seams.",
      tags: ["Industrial Sewing", "Material Development", "Soft and Hard Molding", "Product Testing"],
      contain: true,
      images: [
        {
          src: "/img/approach-deployed.jpg",
          alt: "Thule Approach roof top tent deployed",
          width: 1164,
          height: 1200,
        },
      ],
    },
  },
  {
    slug: "personal-projects",
    company: "Personal",
    title: "Personal Projects",
    pageTitle: "Personal Projects · Laura West",
    lede: "Projects I take on outside of my day job to learn new materials and processes.",
    /** One row per project on the page; add a row when you add a project. */
    spec: [
      ["Reverse tech pack", "Lasell University, 2025"],
      ["Felt rocketship", "Toy design"],
      ["Teddy bears", "Soft toys"],
      ["Wall hanging", "Knitting and weaving"],
    ],
    card: {
      co: "Personal · Independent work",
      blurb:
        "Work outside my day job: a footwear reverse tech pack, a felt fastener toy, miniature teddy bears and a woven wall hanging.",
      tags: ["Continued Learning", "Patterning", "Process Development", "Material Development"],
      contain: true,
      images: [
        {
          src: "/img/lasell-construction.jpg",
          alt: "Lateral view of the running shoe with construction callouts",
          width: 1370,
          height: 870,
        },
      ],
    },
  },
];

export const href = (p: Project) => `/${p.slug}/`;

export const bySlug = (slug: string): Project => {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project slug: ${slug}`);
  return found;
};

/** The next-project chain wraps around, so the last project points back at the first. */
export const nextOf = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) throw new Error(`Unknown project slug: ${slug}`);
  return projects[(i + 1) % projects.length]!;
};

export const SITE_DESCRIPTION = "Portfolio of Laura West, product developer.";
