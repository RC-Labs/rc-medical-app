import Product1 from "../../assets/images/products/product-1.jpg"
import Product2 from "../../assets/images/products/product-2.jpg"
import Product3 from "../../assets/images/products/product-3.jpg"
import Product4 from "../../assets/images/products/product-4.jpg"
import Product5 from "../../assets/images/products/product-5.jpg"
import Product6 from "../../assets/images/products/product-6.png"

const categories = ['Rękawice ochronne', 'Strzykawki', 'Odzież ochronna', 'Maski ochronne', 'Dezynfekcja']
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
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe pudrowane",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-002",

  }, {
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe bezpudrowe",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/produkt-003",

  }, {
    image: Product3,
    alt: "",
    name: "Strzykawki trzyczęściowe",
    category: "Strzykawki",
    type: "",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['93/42/EEC', 'CE 10422'],
    vendors: ['Cellotron'],
    pageID: "/produkty/produkt-004",

  }, {
    image: Product4,
    alt: "",
    name: "Fartuchy",
    category: "Odzież ochronna",
    type: "",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['CE'],
    vendors: ['Rue Cambon'],
    pageID: "/produkty/produkt-005",

  }, {
    image: Product5,
    alt: "",
    name: "Maski FFP2",
    category: "Maski ochronne",
    type: "FFP2",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/produkt-006",

  }, {
    image: Product5,
    alt: "",
    name: "Maski FFP3",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/produkt-007",

  }, {
    image: Product5,
    alt: "",
    name: "Maski FFP3 - produkcja krajowa",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/produkt-008",

  }, {
    image: Product5,
    alt: "",
    name: "Maski FFP2 - produkcja krajowa",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "Lorem ipsum dolor sit amet.",
    features: ['EN 455', 'EN 374'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/produkt-009",

  }, {
    image: Product6,
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