export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  allImages: string[];
  category: string;
  description: string;
  contenance?: string;
  alcohol_type?: string;
  alcool?: string;
  origin?: "Martinique" | "Réunion";
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
        contenance: "0.70L",
        alcool: "30%",
        origin: "Réunion",
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        alcohol_type: "Arrangé",
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
        id: 10,
        name: "55 Origines",
        price: 26.50,
        image: "/55_origines.webp",
        allImages: ["/55_origines.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Blanc",
        alcool: "55%",
        origin: "Martinique",
        description: "La référence de la gamme a été repensée à travers un processus de réduction tout en douceur. Exit le brassage mécanique généralement utilisé. Daniel Baudin, le maître de chai, a mis en place une réduction goutte par goutte sur une durée de 5 mois afin de garder la richesse aromatique du jus."
      },
      {
        id: 11,
        name: "Cannes brûlées",
        price: 29.50,
        image: "/cannes_brulees.webp",
        allImages: ["/cannes_brulees.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Paille",
        alcool: "43%",
        origin: "Martinique",
        description:
          "Cette référence est un rhum parcellaire, provenant de la parcelle Figuier située à Rivière Salée, et monovarietal : la canne roseau. Les cannes ont été brûlées face au vent et jusqu’à mi-hauteur pour ralentir la propagation des flammes.",
      },
      {
        id: 12,
        name: "Double wood",
        price: 35.90,
        image: "/double_wood.webp",
        allImages: ["/double_wood.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Ambre",
        alcool: "43%",
        origin: "Martinique",
        description: "Double Wood est un rhum agricole, élevé sous bois. Après une fermentation en cuves ouvertes et sa distillation en colonne créole, ce rhum passe 7 mois en foudre américain puis 9 mois en petits fûts français ayant contenu du whisky. Sa relative jeunesse le situe à mi-chemin entre un rhum blanc et un rhum vieux, il garde la fraîcheur de la canne mais développe une certaine rondeur."
      },
      {
        id: 13,
        name: "Rhum Vieux de l’Océan",
        price: 45.00,
        image: "/rhum_vieux_de_l_ocean.webp",
        allImages: ["/rhum_vieux_de_l_ocean.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Ambre",
        alcool: "54%",
        origin: "Martinique",
        description: "Le Trois Rivières - Rhum Vieux de l’Océan est une cuvée audacieuse qui met en avant l’influence maritime sur le rhum martiniquais. Élaboré par la Plantation Trois Rivières, ce rhum agricole fait partie de la collection Les Éditions du Bar, destinée aux barmen et aux amateurs de créations originales. Son procédé unique de réduction à l’eau de mer, prélevée au large du Diamant et filtrée avec soin, lui confère une touche iodée distinctive."
      },
      {
        id: 14,
        name: "Cuvée de l'Ocean",
        price: 27.00,
        image: "/cuvee_de_l_ocean.webp",
        allImages: ["/cuvee_de_l_ocean.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Blanc",
        alcool: "42%",
        origin: "Martinique",
        description: "Trois Rivières Cuvée de l’Océan présente la caractéristique singulière d’avoir été élaborée à partir du seul jus des cannes à sucre élevées « les pieds dans l’eau » sur la parcelle ensoleillée de l’Anse Trabaud, située à l’extrême Sud de la Martinique"
      },
      {
        id: 15,
        name: "Rhum blanc 50% 1L",
        price: 29.00,
        image: "/rhum_blanc_50_1L.webp",
        allImages: ["/rhum_blanc_50_1L.webp"],
        category: "Trois Rivieres",
        contenance: "1.00L",
        alcohol_type: "Blanc",
        alcool: "50%",
        origin: "Martinique",
        description: "Trois Rivières - Rhum blanc 50% 1L est un incontournable des rhums agricoles martiniquais. Distillé selon le cahier des charges strict de l’AOC Martinique, il séduit par sa puissance aromatique, son équilibre entre notes végétales et iodées, et sa finale douce et persistante."
      },
      {
        id: 16,
        name: "Triple Millésime 2006 - 2014 - 2016",
        price: 69.90,
        image: "/triple_millesime.webp",
        allImages: ["/triple_millesime.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "42%",
        origin: "Martinique",
        description: "Découvrez le Trois Rivières Triple Millésime, une symphonie de millésimes rares, révélateur du génie de Daniel Baudin. La rencontre de 2006, 2014 et 2016 promet une dégustation inoubliable."
      },
      {
        id: 17,
        name: "VSOP 40°",
        price: 49.90,
        image: "/trois_vsop.jpeg",
        allImages: ["/trois_vsop.jpeg"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "40%",
        origin: "Martinique",
        description: "Trois Rivières VSOP Réserve Spéciale se distingue par sa personalité unique, sa parfaite suavité et sa délicate opulence."
      },
      {
        id: 18,
        name: "Teeling Finish",
        price: 49.90,
        image: "/teeling_finish.webp",
        allImages: ["/teeling_finish.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "43%",
        origin: "Martinique",
        description: "Trois Rivières - Teeling Finish est un rhum vieux AOC Martinique d’au moins 3 ans, bénéficiant d’une finition originale de 8 mois en ex-fûts de whiskey irlandais Teeling. Cet affinage inédit enrichit son profil avec des notes maltées qui s’harmonisent parfaitement aux arômes fruités du rhum agricole."
      },
    ],
  },
  {
    name: "Clement",
    products: [
      {
        id: 19,
        name: "Select Barrel",
        price: 47.00,
        image: "/select_barrel.webp",
        allImages: ["/select_barrel.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "40%",
        origin: "Martinique",
        description: "Ce Rhum Vieux Clément est issu d'un assemblage de Rhums Agricoles ayant vieillis pendant un minimum de 3 ans dans des fûts de chêne neufs ayant eu des chauffes particulières et spécialement sélectionnés par le maître de chais."
      },
      {
        id: 20,
        name: "Rhum Vieux V.O 40%",
        price: 36.00,
        image: "/rhum_vieux_vo_40.webp",
        allImages: ["/rhum_vieux_vo_40.webp"],
        category: "Clément",
        contenance: "0.50L",
        alcohol_type: "Ambré",
        alcool: "40%",
        origin: "Martinique",
        description: "Ce Rhum Vieux V.O 40% est issu d'un assemblage de Rhums Agricoles ayant vieillis pendant un minimum de 3 ans dans des fûts de chêne neufs ayant eu des chauffes particulières et spécialement sélectionnés par le maître de chais."
      },
      {
        id: 222,
        name: "Ambre ESB",
        price: 27.00,
        image: "/ambre_esb.jpg",
        allImages: ["/ambre_esb.jpg"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Blanc",
        alcool: "40%",
        origin: "Martinique",
        description: "Le rhum ambré Clément est un rhum agricole martiniquais ayant vieilli pendant 12 mois dans des foudres de chêne, qui lui confèrent sa belle couleur dorée. Élaboré dans le respect des caractéristiques de l’AOC Martinique et distillé à partir du pur jus de la canne fraîche, ce rhum ambré met à l’honneur le savoir-faire de la Maison Clément, grand nom du rhum martiniquais."
      },
      {
        id: 223,
        name: "Punch coco",
        price: 19.00,
        image: "/punch_coco.webp",
        allImages: ["/punch_coco.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Arrangé",
        alcool: "18%",
        origin: "Martinique",
        description: "Ce punch est un savoureux mélange de rhum Clément, lait et noix de coco. Le Punch  Coco peut se boire frais sur glace, ou peut être utilisé dans la réalisation de cocktails."
      },
      {
        id: 21,
        name: "Bana Canne",
        price: 42.00,
        image: "/banana_canne.webp",
        allImages: ["/banana_canne.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "25%",
        origin: "Martinique",
        description: "Plongez dans l'univers exotique de Clément Bana Canne, une liqueur intense alliant rhums blancs et vieux. Ses notes de banane fraîche, subtilement relevées d'épices et de végétal, offrent une dégustation délicieusement ronde et fruitée jusqu'à la dernière gorgée."
      },
      {
        id: 22,
        name: "Créole Shrubb",
        price: 46.00,
        image: "/creole_shrubb.webp",
        allImages: ["/creole_shrubb.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "40%",
        origin: "Martinique",
        description: "Clément - Créole Shrubb est une liqueur intense et aromatique à base de rhums agricoles, de sirop de sucre de canne et de zestes d'oranges macérés. Elle offre des notes d'agrumes, de mandarine et de fleur d'oranger, idéale pure, sur glace ou en cocktails."
      },
      {
        id: 23,
        name: "Mahina Coco",
        price: 46.00,
        image: "/mahina_coco.webp",
        allImages: ["/mahina_coco.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Ambré",
        alcool: "25%",
        origin: "Martinique",
        description: "Élaborée à partir de rhum agricole et de sirop de sucre de canne, cette liqueur de noix de coco offre des arômes intenses et une bouche équilibrée entre rondeur et fraîcheur. Une véritable invitation à la dégustation."
      },
      {
        id: 24,
        name: "Canne Bleue 2023",
        price: 48.00,
        image: "/canne_bleue_2023.webp",
        allImages: ["/canne_bleue_2023.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Blanc",
        alcool: "50%",
        origin: "Martinique",
        description: "Issu d'une distillation minutieuse pendant une saison exceptionnellement sèche, ce rhum AOC Martinique révèle des notes florales captivantes de rose et jasmin, enrichies d'arômes tropicaux de mangue et banane."
      },
      {
        id: 25,
        name: "Rhum blanc 1L 50°",
        price: 48.00,
        image: "/rhum_blanc_1L_50_clement.jpg",
        allImages: ["/rhum_blanc_1L_50_clement.jpg"],
        category: "Clément",
        contenance: "1.00L",
        alcohol_type: "Blanc",
        alcool: "32%",
        origin: "Martinique",
        description: "Ce rhum blanc agricole est issu du jus frais des cannes à sucre de l'Habitation Clément. Broyage, fermentation, distillation à bas degré (70°) pour conserver un maximum d'arômes. Ses puissants arômes laissent exalter les notes fraîches, florales, citronnées et végétales des différentes variétés de cannes à sucre qui le composent. Il se consomme en long drink ou en Ti Punch."
      },
    ],
  },
];