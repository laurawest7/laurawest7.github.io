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
    title: "V4 Safe Lift Suit",
    pageTitle: "Verve Motion · Laura West",
    lede: "Verve Motion is a robotics start-up that develops wearable devices to help warehouse workers lift with less strain. Recent development work is confidential, so this page covers the suit that is on the market now and my quality improvement work on it.",
    spec: [
      ["Product", "V4 Safe Lift Suit"],
      ["Type", "Soft wearable exosuit"],
      ["My work", "Lab testing, data assessment, supplier collaboration"],
      ["Status", "In market"],
    ],
    card: {
      co: "Verve Motion · Wearable robotics",
      blurb:
        "Quality improvement on a soft exosuit that helps warehouse workers lift: tensile testing on force-path hardware, abrasion testing on cover fabrics, and supplier changes that followed.",
      tags: ["Tensile testing", "EN-388 abrasion", "Supplier collaboration"],
      feature: true,
      images: [
        {
          src: "/img/verve-lift-side.jpg",
          alt: "Worker lifting a box in the Safe Lift Suit",
          width: 332,
          height: 547,
        },
        {
          src: "/img/verve-back.jpg",
          alt: "Back view of the suit's thigh wraps",
          width: 400,
          height: 384,
          style: "object-position:40% 70%",
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
      ["Role", "Co-founder"],
      ["Structure", "Flexible, cantilevered, articulating nylon"],
      ["Process", "Injection molded, over-molded into foam cups"],
      ["Range", "32F to 42G"],
    ],
    card: {
      co: "Trusst Lingerie · Co-founder",
      blurb:
        "A cantilevered nylon structure, over-molded into foam cups, that moves bust weight off the shoulders.",
      tags: ["Injection molding", "Foam cup molding", "Cut and sew"],
      images: [
        {
          src: "/img/trusst-illustration.jpg",
          alt: "Cutaway illustration of the Trusst support structure",
          width: 598,
          height: 482,
        },
      ],
    },
  },
  {
    slug: "thule-sapling",
    company: "Thule",
    title: "Sapling child carrier",
    pageTitle: "Thule Sapling · Laura West",
    lede: "As a Product Developer at Thule I worked on technical backpacks, luggage and roof top tents. The Sapling is a framed child carrier that combines injection molded parts, extruded aluminum profiles, apparel fabrics and technical fabrics.",
    spec: [
      ["Role", "Product Developer"],
      ["Category", "Technical carry"],
      ["Materials", "Injection molded parts, extruded aluminum, technical fabrics"],
      ["QC", "95 critical-to-quality items"],
    ],
    card: {
      co: "Thule · Product Developer",
      blurb:
        "Finding a squeak in the frame late in sampling, and a 95-item Critical to Quality document for production.",
      tags: ["Wear testing", "Costing", "CTQ / QC"],
      contain: true,
      images: [
        {
          src: "/img/sapling-back.jpg",
          alt: "Thule Sapling child carrier",
          width: 383,
          height: 421,
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
      ["Focus", "Fabric-to-base attachment, seam durability"],
    ],
    card: {
      co: "Thule · Product Developer",
      blurb: "A removable tent body on a zipper gimp, with flat felled, seam-taped seams.",
      tags: ["Technical fabrics", "Seam taping", "Extrusions"],
      contain: true,
      images: [
        {
          src: "/img/approach-deployed.jpg",
          alt: "Thule Approach roof top tent deployed",
          width: 510,
          height: 527,
        },
      ],
    },
  },
  {
    slug: "lasell-footwear",
    company: "Lasell University",
    title: "Reverse tech pack",
    pageTitle: "Reverse Tech Pack · Laura West",
    lede: "I wanted a deeper understanding of soft and hard material manufacturing in footwear, so I took the Lasell Professional Development Footwear Product Development course, taught by Elizabeth Brock-Jones, Principal Innovator at Nike. I received an A. The final assignment was a reverse tech pack of a women's running shoe.",
    spec: [
      ["Program", "Footwear Product Development, 4 weeks"],
      ["Instructor", "Elizabeth Brock-Jones"],
      ["Grade", "A"],
      ["Completed", "Nov 4, 2025"],
    ],
    card: {
      co: "Lasell University · Coursework",
      blurb:
        "A full tech pack for a women's running shoe: brief, costing, construction, views and pattern.",
      tags: ["Footwear", "Tech packs", "FOB costing"],
      contain: true,
      images: [
        {
          src: "/img/lasell-views.jpg",
          alt: "Technical drawings of a running shoe",
          width: 1260,
          height: 943,
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
