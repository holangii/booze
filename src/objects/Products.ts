export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  allImages: string[];
  category: string;
  description: string;
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
        name: "Wireless Headphones",
        price: 99.99,
        image: "/trois.png",
        allImages: [
          "/trois.png",
          "/trois.png",
          "/trois.png"
        ],
        category: "Electronics",
        description:
          "Experience unparalleled audio quality with our premium wireless headphones. Featuring advanced noise-cancellation technology, plush memory foam ear cushions, and up to 30 hours of battery life. Perfect for immersive music listening, gaming, or focused work sessions.",
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "/mangue.png",
        allImages: [
          "/mangue.png",
          "/mangue.png",
          "/mangue.png"
        ],
        category: "Electronics",
        description:
          "Stay connected and track your fitness goals with this feature-packed smartwatch. Monitor your heart rate, sleep patterns, and daily activity while enjoying seamless notifications from your smartphone. Water-resistant design and customizable watch faces make this the perfect everyday companion.",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "/trois.png",
        allImages: [
          "/trois.png",
          "/trois.png",
          "/trois.png"
        ],
        category: "Electronics",
        description:
          "Fill any room with rich, immersive sound using our portable Bluetooth speaker. With 360-degree audio projection, waterproof construction, and 12 hours of playtime, it's perfect for both indoor and outdoor entertainment. Easily connects to any Bluetooth-enabled device.",
      },
      {
        id: 4,
        name: "Phone Case",
        price: 24.99,
        image: "/trois.png",
        allImages: [
          "/trois.png",
          "/trois.png"
        ],
        category: "Electronics",
        description:
          "Protect your smartphone in style with our durable and sleek phone case. Military-grade drop protection combined with a slim profile ensures your device stays safe without adding bulk. Features precise cutouts for all ports and raised edges to protect your screen and camera.",
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