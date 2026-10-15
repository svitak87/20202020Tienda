import { fileURLToPath } from "node:url";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const BACKGROUND = "#272727";
const ACCENT = "#faf9fc";
const LOGO_FOR_DARK = new URL(
  "../src/assets/images/logo/20202020-tienda-logo-dark.png",
  import.meta.url,
);
const LOGO_LIGHT = new URL(
  "../src/assets/images/logo/20202020-tienda-logo.png",
  import.meta.url,
);
const OUTPUT = new URL("../public/20202020-tienda-og.png", import.meta.url);

const contrastAgainstBackground = async (logoPath) => {
  const flat = await sharp(logoPath)
    .resize(200, 200, { fit: "inside" })
    .flatten({ background: BACKGROUND })
    .greyscale()
    .raw()
    .toBuffer();

  let sum = 0;
  let sumSquares = 0;
  for (const value of flat) {
    sum += value;
    sumSquares += value * value;
  }
  const mean = sum / flat.length;
  const variance = sumSquares / flat.length - mean * mean;
  return Math.sqrt(Math.max(variance, 0));
};

const logoContrast = await contrastAgainstBackground(
  fileURLToPath(LOGO_FOR_DARK),
);
const altLogoContrast = await contrastAgainstBackground(
  fileURLToPath(LOGO_LIGHT),
);

console.log(
  `Contraste sobre fondo #272727 — logo-dark: ${logoContrast.toFixed(2)}, logo: ${altLogoContrast.toFixed(2)}`,
);

const logoUrl =
  logoContrast >= altLogoContrast ? LOGO_FOR_DARK : LOGO_LIGHT;
const logoPath = fileURLToPath(logoUrl);
console.log(
  `Logo elegido: ${logoPath.replace(/^.*[\\/]/, "")} (${logoContrast >= altLogoContrast ? "variante para fondo oscuro" : "variante clara"})`,
);

const metadata = await sharp(logoPath).metadata();
const targetHeight = 300;
const targetWidth = Math.min(
  700,
  Math.round((metadata.width / metadata.height) * targetHeight),
);
const logoBuffer = await sharp(logoPath)
  .resize(targetWidth, targetHeight)
  .png()
  .toBuffer();

const card = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BACKGROUND}" />
  <rect x="${WIDTH / 2 - 60}" y="${HEIGHT - 90}" width="120" height="6" fill="${ACCENT}" />
</svg>
`);

await sharp(card)
  .composite([
    {
      input: logoBuffer,
      left: Math.round((WIDTH - targetWidth) / 2),
      top: Math.round((HEIGHT - targetHeight) / 2) - 25,
    },
  ])
  .png()
  .toFile(fileURLToPath(OUTPUT));

const outputInfo = await sharp(fileURLToPath(OUTPUT)).metadata();
console.log(
  `Generado: public/20202020-tienda-og.png (${outputInfo.width}x${outputInfo.height}, ${outputInfo.format})`,
);
