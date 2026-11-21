export interface Red {
    name: string;
    href: string;
    /** Contenido interno del <svg> (viewBox 24x24, trazo). */
    icon: string;
}

export const redes: Red[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61573050221655&locale=es_LA",
        icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/casapozonmuseo/",
        icon: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@Casapozonmuseo",
        icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>',
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@casapozonmuseo",
        icon: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />',
    },
];

export const contacto = {
    telefono: "(+57) 312 615 3148",
    whatsapp: "573126153148",
    fijo: "605 692 1750",
    email: "fundacioncasamuseopozon@gmail.com",
};
