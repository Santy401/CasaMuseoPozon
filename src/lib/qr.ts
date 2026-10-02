import qrcode from "qrcode-generator";

/**
 * Genera un QR Code como SVG inline (se ejecuta en build/SSG, no en el cliente).
 * Se usa un único <path> para mantener el DOM liviano dentro de las tarjetas.
 */
export function qrSvg(
  value: string,
  {
    size = 132,
    margin = 2,
    dark = "#1a1a1a",
    light = "#ffffff",
  }: {
    size?: number;
    margin?: number;
    dark?: string;
    light?: string;
  } = {},
): string {
  // typeNumber 0 = automático; nivel "M" aguanta rayones/grano de una credencial impresa.
  const qr = qrcode(0, "M");
  qr.addData(value);
  qr.make();

  const count = qr.getModuleCount();
  const total = count + margin * 2;
  // Un path por módulo oscuro, Butt linecap y ancho 1 = módulos cuadrados exactos.
  const parts: string[] = [];

  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (qr.isDark(row, col)) {
        parts.push(`M${col + margin} ${row + margin}h1v1h-1z`);
      }
    }
  }

  const vb = `0 0 ${total} ${total}`;

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${size}" height="${size}"`,
    ` role="img" aria-label="Código QR" shape-rendering="crispEdges">`,
    `<rect width="${total}" height="${total}" fill="${light}"/>`,
    `<path d="${parts.join("")}" fill="${dark}"/>`,
    `</svg>`,
  ].join("");
}
