import Product1 from "../../assets/images/products/product-1.jpg"

const categories = ['Rękawice ochronne', 'Strzykawki', 'Odzież ochronna', 'Maski ochronne', 'Dezynfekcja']
// const types = [['nitrylowe', 'lateksowe'], ['FPP2', 'FPP3']];
const products = [
  {
    image: Product1,
    alt: "",
    name: "Rękawice nitrylowe",
    category: "Rękawice ochronne",
    type: "nitrylowe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-001",

  }, {
    image: Product1,
    alt: "",
    name: "Rękawice lateksowe pudrowane",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-002",

  }, {
    image: Product1,
    alt: "",
    name: "Rękawice lateksowe bezpudrowe",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-003",

  }, {
    image: Product1,
    alt: "",
    name: "Strzykawki trzyczęściowe",
    category: "Strzykawki",
    type: "",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['93/42/EEC', 'CE 10422'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-004",

  }, {
    image: Product1,
    alt: "",
    name: "Fartuchy",
    category: "Odzież ochronna",
    type: "",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['CE'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-005",

  }, {
    image: Product1,
    alt: "",
    name: "Maski FFP2",
    category: "Maski ochronne",
    type: "FFP2",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-006",

  }, {
    image: Product1,
    alt: "",
    name: "Maski FFP3",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-007",

  }, {
    image: Product1,
    alt: "",
    name: "Maski FFP3 - produkcja krajowa",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-008",

  }, {
    image: Product1,
    alt: "",
    name: "Maski FFP2 - produkcja krajowa",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-009",

  }, {
    image: Product1,
    alt: "",
    name: "Aerozol dezynfekcyjny",
    category: "Dezynfekcja",
    type: "",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['Nie zawiera alkoholu'],
    vendors: ['Silverflash'],
    pageID: "/produkty/produkt-010",

  },
];


export { products, categories };