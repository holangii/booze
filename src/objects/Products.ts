export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  allImages: string[];
  category: string;
  description: string;
  contenance?: string;
  alcool?: string;
  origin?: string;
};

export const productsByCategories: {
  name: string;
  products: Product[];
}[] = [
  {
    name: "Isautier",
    products: [
      {
        id: 1,
        name: "Arrangé Volcanique Goyavier Ananas Piment",
        price: 33.00,
        image: "/isautier_volcanique.webp",
        contenance: "0.50L",
        alcool: "30%",
        origin: "Réunion",
        allImages: [
          "/isautier_volcanique.webp",
        ],
        category: "Isautier",
        description:
          "Cette Douceur d’Arrangé mise sur la gourmandise de la banane bien mûre et de la noix de coco. La tropicalité de La Réunion est mise à l’honneur par ces saveurs qui rappellent les « bonbons coco » typiques de l’île associées à celle de la banane mûrie au soleil",
      },
      {
        id: 2,
        name: "Arrangé Café Vanille",
        price: 25.99,
        image: "/isautier_cafe_vanille.webp",
        allImages: [
          "/isautier_cafe_vanille.webp",
        ],
        category: "Isautier",
        contenance: "0.70L",
        alcool: "40%",
        origin: "Réunion",
        description: "Les arômes café et vanille se marient parfaitement dans cet Arrangé original : la robustesse du café laisse place à la douceur subtile du macérât de vanille.Pour savourer pleinement notre Arrangé Café Vanille, conservez la bouteille au congélateur et servez bien frappé avec votre café !",
      },
      {
        id: 3,
        name: "Arrangé Mangue Caramélisée",
        price: 35.00,
        image: "/isautier_mangue.webp",
        allImages: [
          "isautier_mangue.webp",
          "/isautier_mangue_caramelisee.webp",
        ],
        category: "Isautier",
        contenance: "0.50L",
        alcool: "37%",
        origin: "Réunion",
        description: "Arrangé Mangue Caramélisée : L’arrangé Mangue Caramélisée est un Arrangé à base de rhum blanc, de jus de mangue et de caramel. Il est parfumé avec des arômes de vanille et de café. Il est idéal pour les soirées en famille ou en amitié.",
      },
      {
        id: 4,
        name: "Arrangé Mandarine Sauvage",
        price: 25.99,
        image: "/isautier_mandarine_sauvage.webp",
        allImages: [
          "/isautier_mandarine_sauvage.webp",
        ],
        category: "Isautier",
        contenance: "0.50L",
        alcool: "40%",
        origin: "Réunion",
        description: "Arrangé Mandarine Sauvage : L’arrangé Mandarine Sauvage est un Arrangé à base de rhum blanc, de jus de mandarine et de sucre. Il est parfumé avec des arômes de mandarine et de sucre. Il est idéal pour les soirées en famille ou en amitié.",
      },
      {
        id: 6,
        name: "Arrangé Tropical Combava Menthe",
        price: 33.00,
        image: "/Isautier-Tropical.webp",
        allImages: [
          "/Isautier-Tropical.webp",
        ],
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "Réunion",
        description: "Cette Douceur d’Arrangé mise sur la gourmandise de la banane bien mûre et de la noix de coco. La tropicalité de La Réunion est mise à l’honneur par ces saveurs qui rappellent les « bonbons coco » typiques de l’île associées à celle de la banane mûrie au soleil."
      },
      {
        id: 7,
        name: "Arrangé Banane Flambée",
        price: 29.00,
        image: "/isautier_banane.webp",
        allImages: [
          "/isautier_banane.webp",
        ],
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "Réunion",
        description: "Les arômes de bananes flambées se marient parfaitement dans cet Arrangé original. Pour savourer pleinement notre Arrangé Banane Flambée, conservez la bouteille au congélateur et servez bien frappé avec votre café ou patisserie !"
      },
      {
        id: 8,
        name: "Arrangé Intense Citron Gingembre",
        price: 29.90,
        image: "/isautier_gingembre_citron.webp",
        allImages: [
          "/isautier_gingembre_citron.webp",
        ],
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "Réunion",
        description: "L’océan Indien, ses embruns marins. La Réunion, ses volcans, sa nature intense, ses sols incroyablement riches. Ici est née en 1845 la Maison Isautier, la référence des rhums de La Réunion. L’arrangé Intense comme les autres membres de la ‘Fresque de la Réunion ’"
      },
      {
        id: 9,
        name: "Arrangé Océanique Coco Vanille",
        price: 29.90,
        image: "/Isautier-Arrange-Oceanique-coco-vanille-2.webp",
        allImages: [
          "/Isautier-Arrange-Oceanique-coco-vanille-2.webp",
        ],
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "Réunion",
        description: "Cette Douceur d’Arrangé mise sur la gourmandise de la banane bien mûre et de la noix de coco. La tropicalité de La Réunion est mise à l’honneur par ces saveurs qui rappellent les « bonbons coco » typiques de l’île associées à celle de la banane mûrie au soleil."
      },
    ],
  },
  {
    name: "Trois Rivieres",
    products: [
      {
        id: 5,
        name: "Cotton T-Shirt",
        price: 29.99,
        image: "/mangue.png",
        allImages: ["/mangue.png", "/mangue.png", "/mangue.png"],
        category: "Fashion",
        description:
          "Crafted from premium organic cotton, this versatile t-shirt offers unmatched comfort and style. The breathable fabric and relaxed fit make it perfect for everyday wear, while the reinforced stitching ensures long-lasting durability. Available in multiple colors to suit your style.",
      },
      {
        id: 6,
        name: "Denim Jeans",
        price: 79.99,
        image: "/mangue.png",
        allImages: ["/mangue.png", "/mangue.png", "/mangue.png"],
        category: "Fashion",
        description:
          "Classic denim jeans made from high-quality stretch denim that moves with you. The perfect balance of style and comfort, featuring a modern fit and vintage-inspired washing. Reinforced pocket bags and durable hardware ensure these jeans will be your go-to pair for years to come.",
      },
      {
        id: 7,
        name: "Sneakers",
        price: 129.99,
        image: "/mangue.png",
        allImages: ["/mangue.png", "/mangue.png", "/mangue.png"],
        category: "Fashion",
        description:
          "Step into comfort with these innovative sneakers featuring advanced cushioning technology and breathable mesh upper. The ergonomic design provides excellent support for all-day wear, while the stylish aesthetics make them perfect for both athletic activities and casual outings.",
      },
      {
        id: 8,
        name: "Baseball Cap",
        price: 19.99,
        image: "/mangue.png",
        allImages: ["/mangue.png", "/mangue.png"],
        category: "Fashion",
        description:
          "A timeless baseball cap crafted from durable cotton twill with an adjustable strap for the perfect fit. Features moisture-wicking sweatband and ventilation eyelets to keep you cool. The curved brim provides excellent sun protection while maintaining a classic sporty look.",
      },
    ],
  },
  {
    name: "Clement",
    products: [
      {
        id: 9,
        name: "Throw Pillow",
        price: 34.99,
        image: "/trois.png",
        allImages: ["/trois.png", "/trois.png", "/trois.png"],
        category: "Home & Living",
        description:
          "Add a touch of luxury to your living space with our decorative throw pillow. Made from premium materials with intricate detailing and hidden zipper closure. The hypoallergenic filling provides perfect support while maintaining its shape through regular use.",
      },
      {
        id: 10,
        name: "Table Lamp",
        price: 89.99,
        image: "/trois.png",
        allImages: ["/trois.png", "/trois.png", "/trois.png"],
        category: "Home & Living",
        description:
          "Illuminate your space with this elegant table lamp featuring a unique architectural design. The adjustable arm and rotating shade provide directed lighting perfect for reading or ambient illumination. Energy-efficient LED technology ensures long-lasting, cost-effective operation.",
      },
      {
        id: 11,
        name: "Wall Art",
        price: 49.99,
        image: "/trois.png",
        allImages: ["/trois.png", "/trois.png"],
        category: "Home & Living",
        description:
          "Transform your walls with this stunning piece of contemporary art. Printed on museum-quality canvas using fade-resistant inks, this piece adds sophistication to any room. The gallery-wrapped edges and included mounting hardware make it ready to hang right out of the box.",
      },
      {
        id: 12,
        name: "Ceramic Mug",
        price: 14.99,
        image: "/trois.png",
        allImages: ["/trois.png", "/trois.png"],
        category: "Home & Living",
        description:
          "Enjoy your favorite beverages in this handcrafted ceramic mug. The double-wall construction keeps drinks at the perfect temperature while preventing condensation. The ergonomic handle and balanced weight make it comfortable to hold, while the glazed finish resists stains and scratches.",
      },
    ],
  },
];