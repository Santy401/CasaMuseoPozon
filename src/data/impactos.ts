export interface ImpactoNumero {
  valor: number;
  sufijo: string;
  label: string;
  icono: string;
}

export interface ODSMeta {
  numero: number;
  titulo: string;
  color: string;
  progreso: number;
  descripcion: string;
}

export interface ProyectoMapa {
  id: string;
  nombre: string;
  lat: number;
  lng: number;
  tipo: 'arqueologico' | 'social' | 'ambiental' | 'cultural';
  descripcion: string;
}

export const impactosNumericos: ImpactoNumero[] = [
  {
    valor: 1200,
    sufijo: '+',
    label: 'Familias Beneficiarias',
    icono: 'users'
  },
  {
    valor: 450,
    sufijo: '+',
    label: 'Jóvenes Formados',
    icono: 'graduation-cap'
  },
  {
    valor: 80,
    sufijo: '+',
    label: 'Especies Rescatadas',
    icono: 'leaf'
  },
  {
    valor: 5000,
    sufijo: '+',
    label: 'm² de Territorio Recuperado',
    icono: 'map-pin'
  }
];

export const odsMetas: ODSMeta[] = [
  {
    numero: 4,
    titulo: 'Educación de Calidad',
    color: '#C5192A',
    progreso: 75,
    descripcion: 'Talleres pedagógicos y formación comunitaria'
  },
  {
    numero: 10,
    titulo: 'Reducción de las Desigualdades',
    color: '#EB6120',
    progreso: 68,
    descripcion: 'Inclusión social y dignificación del territorio'
  },
  {
    numero: 11,
    titulo: 'Ciudades y Comunidades Sostenibles',
    color: '#F99D26',
    progreso: 82,
    descripcion: 'Recuperación del espacio público y patrimonial'
  },
  {
    numero: 17,
    titulo: 'Alianzas para los Objetivos',
    color: '#1A4787',
    progreso: 90,
    descripcion: 'Trabajo articulado con instituciones públicas y privadas'
  }
];

export const proyectosMapa: ProyectoMapa[] = [
  {
    id: '1',
    nombre: 'Sitio Arqueológico La Islita',
    lat: 10.3910,
    lng: -75.4790,
    tipo: 'arqueologico',
    descripcion: 'Zona de hallazgos concheros y cerámicos precolombinos'
  },
  {
    id: '2',
    nombre: 'Casa Museo Pozón',
    lat: 10.3925,
    lng: -75.4780,
    tipo: 'cultural',
    descripcion: 'Sede principal y estaciones museales activas'
  },
  {
    id: '3',
    nombre: 'Huerta de la Memoria',
    lat: 10.3935,
    lng: -75.4775,
    tipo: 'ambiental',
    descripcion: 'Espacio agroecológico y botica pozonera'
  },
  {
    id: '4',
    nombre: 'Estación Cartográfica',
    lat: 10.3915,
    lng: -75.4800,
    tipo: 'social',
    descripcion: 'Archivo vivo y cartografía social comunitaria'
  }
];
