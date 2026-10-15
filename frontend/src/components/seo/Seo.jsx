const SITE_NAME = "20202020Tienda";
const SITE_TITLE = `${SITE_NAME} | Streetwear retro, upcycling y ropa vintage`;
const SITE_DESCRIPTION =
  "Streetwear retro y contracultural: rompevientos, camisetas retro y accesorios vintage de 20202020Tienda. Ropa vintage de segunda mano y upcycling en Bogotá.";
const LOGO_PATH = "/20202020-tienda-logo.png";
const OG_IMAGE_PATH = "/20202020-tienda-og.png";
const WHATSAPP_PHONE = "+573005019461";
const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/+$/, "");
const ORG_ID = SITE_URL ? `${SITE_URL}/#organization` : null;
const WEBSITE_ID = SITE_URL ? `${SITE_URL}/#website` : null;

const STORES = [
  {
    "@type": "ClothingStore",
    name: "Sonora Showroom",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 69 #11a - 42",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "19:00",
      },
    ],
  },
  {
    "@type": "ClothingStore",
    name: "Cubo Colectivo",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cra. 7 #54a-36, Local 101",
      addressLocality: "Bogotá",
      postalCode: "110231",
      addressCountry: "CO",
    },
  },
];

const buildJsonLd = ({ breadcrumbs }) => {
  const organization = {
    "@type": "Organization",
    ...(ORG_ID && { "@id": ORG_ID }),
    name: SITE_NAME,
    alternateName: "20202020",
    description:
      "Marca de streetwear retro y contracultural con rompevientos, camisetas retro y accesorios vintage, ropa vintage y upcycling.",
    ...(SITE_URL && { url: `${SITE_URL}/` }),
    ...(SITE_URL && { logo: `${SITE_URL}${LOGO_PATH}` }),
    sameAs: [
      "https://www.instagram.com/20202020.tienda",
      "https://www.facebook.com/veinteveinteveinteveinte",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: WHATSAPP_PHONE,
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: ["es"],
    },
  };

  const website = {
    "@type": "WebSite",
    ...(WEBSITE_ID && { "@id": WEBSITE_ID }),
    name: SITE_NAME,
    inLanguage: "es",
    ...(SITE_URL && { url: `${SITE_URL}/` }),
  };

  const graph = [
    organization,
    ...STORES.map((store) => ({
      ...store,
      ...(ORG_ID && { parentOrganization: { "@id": ORG_ID } }),
    })),
    website,
  ];

  if (SITE_URL && breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

export const Seo = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path = "/",
  breadcrumbs,
}) => {
  const pageUrl = SITE_URL ? `${SITE_URL}${path}` : null;
  const jsonLd = buildJsonLd({ breadcrumbs });

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {pageUrl && <link rel="canonical" href={pageUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {pageUrl && <meta property="og:url" content={pageUrl} />}
      {SITE_URL && (
        <meta property="og:image" content={`${SITE_URL}${OG_IMAGE_PATH}`} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {SITE_URL && (
        <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGE_PATH}`} />
      )}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};
