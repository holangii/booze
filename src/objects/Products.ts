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
  origin?: "Martinique" | "Réunion" | "레위니옹" | "마르티니크";
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
        name: "아랑제 볼카니크 구아바 파인애플 고추",
        price: 66000,
        image: "/isautier_volcanique.webp",
        contenance: "0.70L",
        alcool: "30%",
        origin: "레위니옹",
        alcohol_type: "아랑제",
        allImages: [
          "/isautier_volcanique.webp",
        ],
        category: "Isautier",
        description:
          "잘 익은 바나나의 달콤함과 코코넛의 고소함이 어우러진 이 '두스 드 아랑제(Douceur d'Arrangé)'는 진정한 미식의 즐거움을 선사합니다. 이 제품은 라 레위니옹의 열대적인 매력을 담고 있으며, 섬의 전통 간식인 ‘봉봉 코코(bonbon coco)’를 떠올리게 하는 맛과 햇살 속에서 익은 바나나의 풍미가 조화를 이룹니다.",
      },
      {
        id: 2,
        name: "아랑제 카페 바닐라",
        price: 52000,
        image: "/isautier_cafe_vanille.webp",
        allImages: [
          "/isautier_cafe_vanille.webp",
        ],
        alcohol_type: "아랑제",
        category: "Isautier",
        contenance: "0.70L",
        alcool: "40%",
        origin: "레위니옹",
        description: "커피와 바닐라의 향이 완벽하게 어우러진 독창적인 아랑제입니다.\n진한 커피의 풍미 뒤에 은은한 바닐라 침출액의 부드러움이 고스란히 느껴집니다.\n저희의 아랑제 카페 바닐라를 제대로 즐기시려면, 병을 냉동실에 보관한 후 아이스 커피와 함께 시원하게 즐겨보세요!",
      },
      {
        id: 3,
        name: "아랑제 망고 카라멜라이즈",
        price: 70000,
        image: "/isautier_mangue.webp",
        allImages: [
          "/isautier_mangue.webp",
          "/isautier_mangue_caramelisee.webp",
        ],
        alcohol_type: "아랑제",
        category: "Isautier",
        contenance: "0.50L",
        alcool: "37%",
        origin: "레위니옹",
        description: "Arrangé Mangue Caramélisée : L'arrangé Mangue Caramélisée est un Arrangé à base de rhum blanc, de jus de mangue et de caramel. Il est parfumé avec des arômes de vanille et de café. Il est idéal pour les soirées en famille ou en amitié.",
      },
      {
        id: 4,
        name: "아랑제 만다린 소바주",
        price: 52000,
        image: "/isautier_mandarine_sauvage.webp",
        allImages: [
          "/isautier_mandarine_sauvage.webp",
        ],
        alcohol_type: "Arrangé",
        category: "Isautier",
        contenance: "0.50L",
        alcool: "40%",
        origin: "레위니옹",
        description: "Arrangé Mandarine Sauvage : L'arrangé Mandarine Sauvage est un Arrangé à base de rhum blanc, de jus de mandarine et de sucre. Il est parfumé avec des arômes de mandarine et de sucre. Il est idéal pour les soirées en famille ou en amitié.",
      },
      {
        id: 6,
        name: "아랑제 트로피칼 콤바바 민트",
        price: 66000,
        image: "/Isautier-Tropical.webp",
        allImages: [
          "/Isautier-Tropical.webp",
        ],
        alcohol_type: "Arrangé",
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "레위니옹",
        description: "Cette Douceur d'Arrangé mise sur la gourmandise de la banane bien mûre et de la noix de coco. La tropicalité de La Réunion est mise à l'honneur par ces saveurs qui rappellent les « bonbons coco » typiques de l'île associées à celle de la banane mûrie au soleil."
      },
      {
        id: 7,
        name: "아랑제 바나나 플랑베",
        price: 58000,
        image: "/isautier_banane.webp",
        allImages: [
          "/isautier_banane.webp",
        ],
        alcohol_type: "아랑제",
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "레위니옹",
        description: "Les arômes de bananes flambées se marient parfaitement dans cet Arrangé original. Pour savourer pleinement notre Arrangé Banane Flambée, conservez la bouteille au congélateur et servez bien frappé avec votre café ou patisserie !"
      },
      {
        id: 8,
        name: "아랑제 인텐스 레몬 생강",
        price: 60000,
        image: "/isautier_gingembre_citron.webp",
        allImages: [
          "/isautier_gingembre_citron.webp",
        ],
        alcohol_type: "아랑제",
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "레위니옹",
        description: "L'océan Indien, ses embruns marins. La Réunion, ses volcans, sa nature intense, ses sols incroyablement riches. Ici est née en 1845 la Maison Isautier, la référence des rhums de La Réunion. L'arrangé Intense comme les autres membres de la 'Fresque de la Réunion '"
      },
      {
        id: 9,
        name: "아랑제 오세아니크 코코 바닐라",
        price: 60000,
        image: "/Isautier-Arrange-Oceanique-coco-vanille-2.webp",
        allImages: [
          "/Isautier-Arrange-Oceanique-coco-vanille-2.webp",
        ],
        alcohol_type: "아랑제",
        category: "Isautier",
        contenance: "0.70L",
        alcool: "30%",
        origin: "레위니옹",
        description: "Cette Douceur d'Arrangé mise sur la gourmandise de la banane bien mûre et de la noix de coco. La tropicalité de La Réunion est mise à l'honneur par ces saveurs qui rappellent les « bonbons coco » typiques de l'île associées à celle de la banane mûrie au soleil."
      },
    ],
  },
  {
    name: "Trois Rivieres",
    products: [
      {
        id: 10,
        name: "55 올리진",
        price: 53000,
        image: "/55_origines.webp",
        allImages: ["/55_origines.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "화이트",
        alcool: "55%",
        origin: "마르티니크",
        description: "La référence de la gamme a été repensée à travers un processus de réduction tout en douceur. Exit le brassage mécanique généralement utilisé. Daniel Baudin, le maître de chai, a mis en place une réduction goutte par goutte sur une durée de 5 mois afin de garder la richesse aromatique du jus."
      },
      {
        id: 11,
        name: "칸 브륄레",
        price: 59000,
        image: "/cannes_brulees.webp",
        allImages: ["/cannes_brulees.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "페일",
        alcool: "43%",
        origin: "마르티니크",
        description:
          "Cette référence est un rhum parcellaire, provenant de la parcelle Figuier située à Rivière Salée, et monovarietal : la canne roseau. Les cannes ont été brûlées face au vent et jusqu'à mi-hauteur pour ralentir la propagation des flammes.",
      },
      {
        id: 12,
        name: "더블 우드",
        price: 72000,
        image: "/double_wood.webp",
        allImages: ["/double_wood.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "43%",
        origin: "마르티니크",
        description: "Double Wood est un rhum agricole, élevé sous bois. Après une fermentation en cuves ouvertes et sa distillation en colonne créole, ce rhum passe 7 mois en foudre américain puis 9 mois en petits fûts français ayant contenu du whisky. Sa relative jeunesse le situe à mi-chemin entre un rhum blanc et un rhum vieux, il garde la fraîcheur de la canne mais développe une certaine rondeur."
      },
      {
        id: 13,
        name: "럼 비외 드 로세앙",
        price: 90000,
        image: "/rhum_vieux_de_l_ocean.webp",
        allImages: ["/rhum_vieux_de_l_ocean.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "54%",
        origin: "마르티니크",
        description: "Le Trois Rivières - Rhum Vieux de l'Océan est une cuvée audacieuse qui met en avant l'influence maritime sur le rhum martiniquais. Élaboré par la Plantation Trois Rivières, ce rhum agricole fait partie de la collection Les Éditions du Bar, destinée aux barmen et aux amateurs de créations originales. Son procédé unique de réduction à l'eau de mer, prélevée au large du Diamant et filtrée avec soin, lui confère une touche iodée distinctive."
      },
      {
        id: 14,
        name: "큐베 드 로세앙",
        price: 54000,
        image: "/cuvee_de_l_ocean.webp",
        allImages: ["/cuvee_de_l_ocean.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "화이트",
        alcool: "42%",
        origin: "마르티니크",
        description: "Trois Rivières Cuvée de l'Océan présente la caractéristique singulière d'avoir été élaborée à partir du seul jus des cannes à sucre élevées « les pieds dans l'eau » sur la parcelle ensoleillée de l'Anse Trabaud, située à l'extrême Sud de la Martinique"
      },
      {
        id: 15,
        name: "럼 블랑 50% 1L",
        price: 58000,
        image: "/rhum_blanc_50_1L.webp",
        allImages: ["/rhum_blanc_50_1L.webp"],
        category: "Trois Rivieres",
        contenance: "1.00L",
        alcohol_type: "화이트",
        alcool: "50%",
        origin: "마르티니크",
        description: "Trois Rivières - Rhum blanc 50% 1L est un incontournable des rhums agricoles martiniquais. Distillé selon le cahier des charges strict de l'AOC Martinique, il séduit par sa puissance aromatique, son équilibre entre notes végétales et iodées, et sa finale douce et persistante."
      },
      {
        id: 16,
        name: "트리플 밀레심 2006 - 2014 - 2016",
        price: 140000,
        image: "/triple_millesime.webp",
        allImages: ["/triple_millesime.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "42%",
        origin: "마르티니크",
        description: "Découvrez le Trois Rivières Triple Millésime, une symphonie de millésimes rares, révélateur du génie de Daniel Baudin. La rencontre de 2006, 2014 et 2016 promet une dégustation inoubliable."
      },
      {
        id: 17,
        name: "VSOP 40°",
        price: 100000,
        image: "/trois_vsop.jpeg",
        allImages: ["/trois_vsop.jpeg"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "40%",
        origin: "마르티니크",
        description: "Trois Rivières VSOP Réserve Spéciale se distingue par sa personalité unique, sa parfaite suavité et sa délicate opulence."
      },
      {
        id: 18,
        name: "틸링 피니시",
        price: 100000,
        image: "/teeling_finish.webp",
        allImages: ["/teeling_finish.webp"],
        category: "Trois Rivieres",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "43%",
        origin: "마르티니크",
        description: "Trois Rivières - Teeling Finish est un rhum vieux AOC Martinique d'au moins 3 ans, bénéficiant d'une finition originale de 8 mois en ex-fûts de whiskey irlandais Teeling. Cet affinage inédit enrichit son profil avec des notes maltées qui s'harmonisent parfaitement aux arômes fruités du rhum agricole."
      },
    ],
  },
  {
    name: "Clement",
    products: [
      {
        id: 19,
        name: "셀렉트 배럴",
        price: 94000,
        image: "/select_barrel.webp",
        allImages: ["/select_barrel.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "40%",
        origin: "마르티니크",
        description: "Ce Rhum Vieux Clément est issu d'un assemblage de Rhums Agricoles ayant vieillis pendant un minimum de 3 ans dans des fûts de chêne neufs ayant eu des chauffes particulières et spécialement sélectionnés par le maître de chais."
      },
      {
        id: 20,
        name: "럼 비외 V.O 40%",
        price: 72000,
        image: "/rhum_vieux_vo_40.webp",
        allImages: ["/rhum_vieux_vo_40.webp"],
        category: "Clément",
        contenance: "0.50L",
        alcohol_type: "앰버",
        alcool: "40%",
        origin: "마르티니크",
        description: "Ce Rhum Vieux V.O 40% est issu d'un assemblage de Rhums Agricoles ayant vieillis pendant un minimum de 3 ans dans des fûts de chêne neufs ayant eu des chauffes particulières et spécialement sélectionnés par le maître de chais."
      },
      {
        id: 222,
        name: "앰버 ESB",
        price: 54000,
        image: "/ambre_esb.jpg",
        allImages: ["/ambre_esb.jpg"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "화이트",
        alcool: "40%",
        origin: "마르티니크",
        description: "Le rhum ambré Clément est un rhum agricole martiniquais ayant vieilli pendant 12 mois dans des foudres de chêne, qui lui confèrent sa belle couleur dorée. Élaboré dans le respect des caractéristiques de l'AOC Martinique et distillé à partir du pur jus de la canne fraîche, ce rhum ambré met à l'honneur le savoir-faire de la Maison Clément, grand nom du rhum martiniquais."
      },
      {
        id: 223,
        name: "펀치 코코",
        price: 38000,
        image: "/punch_coco.webp",
        allImages: ["/punch_coco.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "Arrangé",
        alcool: "18%",
        origin: "마르티니크",
        description: "Ce punch est un savoureux mélange de rhum Clément, lait et noix de coco. Le Punch  Coco peut se boire frais sur glace, ou peut être utilisé dans la réalisation de cocktails."
      },
      {
        id: 21,
        name: "바나 칸",
        price: 84000,
        image: "/banana_canne.webp",
        allImages: ["/banana_canne.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "25%",
        origin: "마르티니크",
        description: "Plongez dans l'univers exotique de Clément Bana Canne, une liqueur intense alliant rhums blancs et vieux. Ses notes de banane fraîche, subtilement relevées d'épices et de végétal, offrent une dégustation délicieusement ronde et fruitée jusqu'à la dernière gorgée."
      },
      {
        id: 22,
        name: "크리올 슈럽",
        price: 92000,
        image: "/creole_shrubb.webp",
        allImages: ["/creole_shrubb.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "40%",
        origin: "마르티니크",
        description: "Clément - Créole Shrubb est une liqueur intense et aromatique à base de rhums agricoles, de sirop de sucre de canne et de zestes d'oranges macérés. Elle offre des notes d'agrumes, de mandarine et de fleur d'oranger, idéale pure, sur glace ou en cocktails."
      },
      {
        id: 23,
        name: "마히나 코코",
        price: 92000,
        image: "/mahina_coco.webp",
        allImages: ["/mahina_coco.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "앰버",
        alcool: "25%",
        origin: "마르티니크",
        description: "Élaborée à partir de rhum agricole et de sirop de sucre de canne, cette liqueur de noix de coco offre des arômes intenses et une bouche équilibrée entre rondeur et fraîcheur. Une véritable invitation à la dégustation."
      },
      {
        id: 24,
        name: "칸 블뢰 2023",
        price: 96000,
        image: "/canne_bleue_2023.webp",
        allImages: ["/canne_bleue_2023.webp"],
        category: "Clément",
        contenance: "0.70L",
        alcohol_type: "화이트",
        alcool: "50%",
        origin: "마르티니크",
        description: "Issu d'une distillation minutieuse pendant une saison exceptionnellement sèche, ce rhum AOC Martinique révèle des notes florales captivantes de rose et jasmin, enrichies d'arômes tropicaux de mangue et banane."
      },
      {
        id: 25,
        name: "럼 블랑 1L 50°",
        price: 96000,
        image: "/rhum_blanc_1L_50_clement.jpg",
        allImages: ["/rhum_blanc_1L_50_clement.jpg"],
        category: "Clément",
        contenance: "1.00L",
        alcohol_type: "화이트",
        alcool: "32%",
        origin: "마르티니크",
        description: "Ce rhum blanc agricole est issu du jus frais des cannes à sucre de l'Habitation Clément. Broyage, fermentation, distillation à bas degré (70°) pour conserver un maximum d'arômes. Ses puissants arômes laissent exalter les notes fraîches, florales, citronnées et végétales des différentes variétés de cannes à sucre qui le composent. Il se consomme en long drink ou en Ti Punch."
      },
    ],
  },
];