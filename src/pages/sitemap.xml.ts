import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://www.casapozonmuseo.site/</loc></url>
      <url><loc>https://www.casapozonmuseo.site/quienes-somos</loc></url>
      <url><loc>https://www.casapozonmuseo.site/modelo-museal</loc></url>
      <url><loc>https://www.casapozonmuseo.site/nodos-museales</loc></url>
      <url><loc>https://www.casapozonmuseo.site/recorrido-museal</loc></url>
      <url><loc>https://www.casapozonmuseo.site/proyectos-sociales</loc></url>
      <url><loc>https://www.casapozonmuseo.site/portafolio</loc></url>
      <url><loc>https://www.casapozonmuseo.site/eventos</loc></url>
      <url><loc>https://www.casapozonmuseo.site/representante-legal</loc></url>
      <url><loc>https://www.casapozonmuseo.site/socios</loc></url>
      <url><loc>https://www.casapozonmuseo.site/pedagogia-territorial</loc></url>
    </urlset>
  `.trim(), {
    headers: { 'Content-Type': 'application/xml' }
  });
};
