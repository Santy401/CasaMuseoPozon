import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://www.casapozonmuseo.org/</loc></url>
      <url><loc>https://www.casapozonmuseo.org/quienes-somos</loc></url>
      <url><loc>https://www.casapozonmuseo.org/modelo-museal</loc></url>
      <url><loc>https://www.casapozonmuseo.org/nodos-museales</loc></url>
      <url><loc>https://www.casapozonmuseo.org/recorrido-museal</loc></url>
      <url><loc>https://www.casapozonmuseo.org/proyectos-sociales</loc></url>
      <url><loc>https://www.casapozonmuseo.org/portafolio</loc></url>
      <url><loc>https://www.casapozonmuseo.org/eventos</loc></url>
      <url><loc>https://www.casapozonmuseo.org/representante-legal</loc></url>
      <url><loc>https://www.casapozonmuseo.org/socios</loc></url>
      <url><loc>https://www.casapozonmuseo.org/pedagogia-territorial</loc></url>
      <url><loc>https://www.casapozonmuseo.org/noticias</loc></url>
      <url><loc>https://www.casapozonmuseo.org/galeria</loc></url>
      <url><loc>https://www.casapozonmuseo.org/infraestructura</loc></url>
      <url><loc>https://www.casapozonmuseo.org/coleccion</loc></url>
      <url><loc>https://www.casapozonmuseo.org/como-apoyar</loc></url>
      <url><loc>https://www.casapozonmuseo.org/politica-privacidad</loc></url>
    </urlset>
  `.trim(), {
    headers: { 'Content-Type': 'application/xml' }
  });
};
