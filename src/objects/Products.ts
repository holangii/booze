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
        description:
          "아랑제 망고 카라멜라이즈: 아랑제 망고 카라멜라이즈는 화이트 럼, 망고 주스, 카라멜을 베이스로 한 아랑제입니다. 바닐라와 커피 향이 가미되어 있습니다. 가족이나 친구와 함께하는 저녁에 이상적입니다.",
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
        description:
          "아랑제 만다린 소바주: 아랑제 만다린 소바주는 화이트 럼, 만다린 주스, 설탕을 베이스로 한 아랑제입니다. 만다린과 설탕 향이 가미되어 있습니다. 가족이나 친구와 함께하는 저녁에 이상적입니다.",
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
        description:
          "이 '두스 드 아랑제(Douceur d'Arrangé)'는 잘 익은 바나나의 달콤함과 코코넛의 고소함에 중점을 둡니다. 레위니옹의 열대적인 특성은 섬의 전형적인 '봉봉 코코'를 연상시키는 맛과 햇볕에 익은 바나나의 맛이 어우러져 강조됩니다.",
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
        description:
          "플랑베한 바나나의 아로마가 이 독창적인 아랑제에 완벽하게 어우러집니다. 아랑제 바나나 플랑베를 제대로 즐기려면 병을 냉동실에 보관하고 커피나 페이스트리와 함께 차갑게 드세요!",
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
        description:
          "인도양, 그 바다의 물보라. 레위니옹, 그 화산, 강렬한 자연, 놀랍도록 풍부한 토양. 이곳에서 1845년 레위니옹 럼의 기준이 되는 메종 이소티에가 탄생했습니다. '프레스크 드 라 레위니옹'의 다른 멤버들과 같은 강렬한 아랑제입니다.",
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
        description:
          "이 '두스 드 아랑제(Douceur d'Arrangé)'는 잘 익은 바나나의 달콤함과 코코넛의 고소함에 중점을 둡니다. 레위니옹의 열대적인 특성은 섬의 전형적인 '봉봉 코코'를 연상시키는 맛과 햇볕에 익은 바나나의 맛이 어우러져 강조됩니다.",
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
        description:
          "이 제품군의 기준은 매우 부드러운 환원 과정을 통해 재설계되었습니다. 일반적으로 사용되는 기계적 혼합 방식은 사용하지 않았습니다. 셀러 마스터인 다니엘 보댕은 주스의 풍부한 아로마를 유지하기 위해 5개월에 걸쳐 한 방울씩 환원하는 방식을 도입했습니다.",
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
          "이 레퍼런스는 리비에르 살레에 위치한 피기에 구획에서 생산된 구획 럼이며, 단일 품종인 로조 케인으로 만들어졌습니다. 사탕수수는 바람을 마주하고 불길의 확산을 늦추기 위해 중간 높이까지 태워졌습니다.",
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
        description:
          "더블 우드는 오크통에서 숙성된 농업 럼입니다. 개방형 탱크에서 발효하고 크리올 컬럼에서 증류한 후, 이 럼은 미국산 대형 오크통에서 7개월, 위스키를 담았던 프랑스산 소형 오크통에서 9개월을 보냅니다. 비교적 숙성 기간이 짧아 화이트 럼과 숙성 럼의 중간에 위치하며, 사탕수수의 신선함을 유지하면서도 어느 정도의 부드러움을 지니고 있습니다.",
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
        description:
          "트루아 리비에르 - 럼 비외 드 로세앙은 마르티니크 럼에 대한 해양의 영향을 강조하는 대담한 퀴베입니다. 플랜테이션 트루아 리비에르에서 생산된 이 농업 럼은 바텐더와 독창적인 창작물을 좋아하는 사람들을 위한 '레 제디시옹 뒤 바' 컬렉션의 일부입니다. 디아망 앞바다에서 채취하여 세심하게 여과한 바닷물로 희석하는 독특한 공정을 통해 독특한 요오드 향을 선사합니다.",
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
        description:
          "트루아 리비에르 퀴베 드 로세앙은 마르티니크 최남단에 위치한 햇볕이 잘 드는 앙스 트라보 구획에서 '물에 발을 담그고' 자란 사탕수수 주스만으로 만들어졌다는 독특한 특징을 가지고 있습니다.",
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
        description:
          "트루아 리비에르 - 럼 블랑 50% 1L는 마르티니크 농업 럼의 필수품입니다. AOC 마르티니크의 엄격한 규정에 따라 증류되어 강력한 아로마, 식물성 노트와 요오드 노트 사이의 균형, 부드럽고 오래 지속되는 피니시로 매혹적입니다.",
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
        description:
          "다니엘 보댕의 천재성을 드러내는 희귀한 빈티지의 교향곡인 트루아 리비에르 트리플 밀레짐을 만나보세요. 2006, 2014, 2016년의 만남은 잊을 수 없는 시음을 약속합니다.",
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
        description: "트루아 리비에르 VSOP 레제르브 스페시알은 독보적인 개성과 완벽한 부드러움 그리고 섬세한 풍미의 풍요로움으로 차별화됩니다."
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
        description: "트루아 리비에르 - 틸링 피니시는 최소 3년 숙성된 마르티니크 AOC 올드 럼으로, 아일랜드 틸링 위스키의 전용 배럴에서 8개월간의 독특한 피니싱 과정을 거쳤습니다. 이러한 특별한 숙성 과정은 농업 럼의 과일향과 완벽한 조화를 이루는 몰트 노트로 풍미를 더욱 풍부하게 만듭니다."
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
        description: "이 클레멘트 올드 럼은 최소 3년간 숙성된 아그리콜 럼들의 블렌딩으로 만들어졌으며, 특별한 토스팅 처리가 된 새로운 오크 배럴에서 숙성되어 셀러 마스터가 특별히 선별한 제품입니다."
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
        description: "이 럼 비외 V.O 40%는 최소 3년간 숙성된 아그리콜 럼들의 블렌딩으로 만들어졌으며, 특별한 토스팅 처리가 된 새로운 오크 배럴에서 숙성되어 셀러 마스터가 특별히 선별한 제품입니다."
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
        description: "클레멘트 앰버 럼은 12개월간 오크 대형 배럴에서 숙성된 마르티니크 아그리콜 럼으로, 아름다운 황금빛 색상을 띠고 있습니다. 마르티니크 AOC 특성을 존중하여 제조되고 신선한 사탕수수 순수 주스로 증류된 이 앰버 럼은 마르티니크 럼의 유명한 브랜드인 클레멘트 하우스의 전문 기술을 돋보이게 합니다."
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
        description: "이 펀치는 클레멘트 럼, 우유, 코코넛의 맛있는 혼합물입니다. 펀치 코코는 얼음과 함께 시원하게 마시거나 칵테일 제조에 사용할 수 있습니다."
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
        description: "클레멘트 바나 칸의 이국적인 세계로 빠져보세요. 화이트 럼과 올드 럼을 혼합한 강렬한 리큐어입니다. 신선한 바나나 향과 미묘한 향신료 및 식물성 향이 어우러져 마지막 한 모금까지 맛있게 둥글고 과일 향이 나는 테이스팅을 선사합니다."
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
        description: "클레멘트 크리올 슈럽은 아그리콜 럼, 사탕수수 시럽, 침출된 오렌지 껍질을 베이스로 한 강렬하고 향긋한 리큐어입니다. 감귤, 만다린, 오렌지 꽃 향을 제공하며, 순수하게 마시거나 얼음과 함께 또는 칵테일로 마시기에 이상적입니다."
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
        description: "아그리콜 럼과 사탕수수 시럽으로 만들어진 이 코코넛 리큐르는 강렬한 아로마와 함께, 풍부함과 상쾌함이 조화를 이루는 균형 잡힌 맛을 선사합니다. 진정한 테이스팅의 즐거움을 선사하는 특별한 한 잔입니다."
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
        description: "이 마르티니크 AOC 럼은 유난히 건조했던 시즌 동안 정성스럽게 증류되어 탄생했습니다. 장미와 자스민의 매혹적인 플로럴 향기에 망고와 바나나의 열대 과일 아로마가 어우러져 풍부한 향미를 자랑합니다."
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
        description: "이 화이트 아그리콜 럼은 클레망 농장에서 재배된 신선한 사탕수수즙으로 만들어졌습니다. 압착, 발효, 저도(70도) 증류 과정을 거쳐 최대한의 향을 보존했습니다. 강렬한 향기 속에 신선하고 꽃향기 가득한 아로마, 레몬 계열의 상큼함, 다양한 사탕수수 품종에서 오는 식물성 노트가 조화를 이룹니다. 롱 드링크나 티퐁슈(Ti Punch)로 즐기기에 이상적입니다."
      },
    ],
  },
];