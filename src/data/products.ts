export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // Imagen principal
  images: string[]; // Galería de imágenes (carrusel)
  badge?: "BESTSELLER" | "NUEVO" | "EDICIÓN LIMITADA";
  description: string;
  notes: string[];
  family: "Oriental" | "Floral" | "Amaderado" | "Cítrico" | "Dulce";
  details: {
    longevity: string; // Ej: "Duradera (8h)"
    projection: string; // Ej: "Estela Pesada"
    idealTime: string; // Ej: "Noche"
    season: string; // Ej: "Otoño / Invierno"
  };
}

export const products: Product[] = [
  {
    id: "01",
    name: "Noir de Minuit",
    price: 85,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600&q=85",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85"
    ],
    badge: "BESTSELLER",
    description: "Una noche de oud y vainilla negra que envuelve la piel en un velo misterioso de calidez pura.",
    notes: ["OUD", "VAINILLA", "ÁMBAR", "MUSGO"],
    family: "Oriental",
    details: {
      longevity: "Extrema (9-11h)",
      projection: "Poderosa / Pesada",
      idealTime: "Noche / Gala 🌙",
      season: "Otoño / Invierno ❄️"
    }
  },
  {
    id: "02",
    name: "Jardin Blanc",
    price: 92,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&q=85",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=85"
    ],
    badge: "NUEVO",
    description: "Pétalos de jazmín de Grasse y leche de seda traídos de jardines ocultos al amanecer.",
    notes: ["JAZMÍN", "SEDA", "ROSA", "ALMIZCLE"],
    family: "Floral",
    details: {
      longevity: "Duradera (7-9h)",
      projection: "Estela Moderada",
      idealTime: "Día / Tarde ☀️",
      season: "Primavera / Verano 🌸"
    }
  },
  {
    id: "03",
    name: "Terre Dorée",
    price: 78,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=85",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600&q=85"
    ],
    description: "La calidez de la tierra mojada, el sándalo y el vetiver forman una fragancia de raíces profundas.",
    notes: ["SÁNDALO", "VETIVER", "CEDRO", "TIERRA"],
    family: "Amaderado",
    details: {
      longevity: "Excelente (8-10h)",
      projection: "Marcada / Terrosa",
      idealTime: "Día / Noche 🌓",
      season: "Otoño / Primavera 🍂"
    }
  },
  {
    id: "04",
    name: "Citrus d'Or",
    price: 72,
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=600&q=85",
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&q=85",
      "https://images.unsplash.com/photo-1592945409344-93e1f0e4b85c?w=600&q=85"
    ],
    badge: "NUEVO",
    description: "Un destello radiante de bergamota de Calabria y hojas frescas de verbena bajo el sol del mediterráneo.",
    notes: ["BERGAMOTA", "POMELO", "NEROLI", "VERBENA"],
    family: "Cítrico",
    details: {
      longevity: "Moderada (5-7h)",
      projection: "Fresca / Radiante",
      idealTime: "Mañana / Tarde ☀️",
      season: "Verano / Primavera ☀️"
    }
  },
  {
    id: "05",
    name: "Rêve Sucré",
    price: 95,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=600&q=85",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=85"
    ],
    badge: "EDICIÓN LIMITADA",
    description: "Una infusión deliciosa de praliné tostado y caramelo salado que evoca la dulzura de un sueño eterno.",
    notes: ["PRALINÉ", "COCO", "CARAMELO", "TONKA"],
    family: "Dulce",
    details: {
      longevity: "Extrema (10h+)",
      projection: "Poderosa / Dulce",
      idealTime: "Tarde / Noche 🌙",
      season: "Otoño / Invierno ❄️"
    }
  },
  {
    id: "06",
    name: "Cuir Impérial",
    price: 110,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=85"
    ],
    description: "Una fragancia majestuosa y ahumada con notas dominantes de cuero curtido y tabaco dulce de Virginia.",
    notes: ["CUERO", "TABACO", "PATCHOULI", "SAFRÁN"],
    family: "Amaderado",
    details: {
      longevity: "Excepcional (10-12h)",
      projection: "Estela Pesada",
      idealTime: "Noche / Gala 🌙",
      season: "Invierno / Otoño ❄️"
    }
  }
];
