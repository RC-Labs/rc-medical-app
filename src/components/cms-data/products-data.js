import Product1 from "../../assets/images/products/product-1.jpg"
import Product2 from "../../assets/images/products/product-2.jpg"
import Product3 from "../../assets/images/products/product-3.jpg"
import Product4 from "../../assets/images/products/product-4.jpg"
import Product5 from "../../assets/images/products/product-5.jpg"
import Product51 from "../../assets/images/products/product-5-1.jpg"
import Product6 from "../../assets/images/products/product-6.png"

const categories = [
  {
    name: 'Wszystkie produkty',
    pageID: '/produkty/',
  }, {
    name: 'Rękawice ochronne',
    pageID: '/produkty/cat1',
  }, {
    name: 'Strzykawki',
    pageID: '/produkty/cat2',
  }, {
    name: 'Odzież ochronna',
    pageID: '/produkty/cat3',
  }, {
    name: 'Maski ochronne',
    pageID: '/produkty/cat4',
  }, {
    name: 'Dezynfekcja',
    pageID: '/produkty/cat5',
  }
]
const products = [
  {
    image: Product1,
    alt: "",
    name: "Rękawice nitrylowe",
    category: "Rękawice ochronne",
    type: "nitrylowe",
    desc: "Oferowane rękawice nitrylowe są zgodne z normami: EN 455-1, - 2, -3, -4 (Dyrektywa 93 / 42 / EEC dla wyrobów medycznych) EN 420, EN 374 - 1, -2, -3 (Dyrektywa 89 / 686 / EEC o środkach ochrony osobistej)",
    features: ['produkt jednorazowego użytku', 'wyrób medyczny klasy I', 'środek ochrony indywidualnej, klasy III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/rekawice-nitrylowe",

  }, {
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe pudrowane",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Oferowane rękawice lateksowe są zgodne z normami: EN 455-1, - 2, -3, -4 (Dyrektywa 93 / 42 / EEC dla wyrobów medycznych) EN 420, EN 374 - 1, -2, -3 (Dyrektywa 89 / 686 / EEC o środkach ochrony osobistej)",
    features: ['produkt jednorazowego użytku', 'wyrób medyczny klasy I', 'środek ochrony indywidualnej, klasy III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/rekawice-lateksowe-pudrowane",

  }, {
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe bezpudrowe",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: "Oferowane rękawice lateksowe są zgodne z normami: EN 455-1, - 2, -3, -4 (Dyrektywa 93 / 42 / EEC dla wyrobów medycznych) EN 420, EN 374 - 1, -2, -3 (Dyrektywa 89 / 686 / EEC o środkach ochrony osobistej)",
    features: ['produkt jednorazowego użytku', 'wyrób medyczny klasy I', 'środek ochrony indywidualnej, klasy III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/rekawice-lateksowe-bezpudrowe",

  }, {
    image: Product3,
    alt: "",
    name: "Strzykawki trzyczęściowe",
    category: "Strzykawki",
    type: "",
    desc: "",
    features: ['strzykawki trzyczęściowe', 'luer slip', 'sterylne', '1xx X 27G X 1⁄2'],
    vendors: ['Cellotron'],
    pageID: "/produkty/strzykawki-trzyczesciowe",

  }, {
    image: Product4,
    alt: "",
    name: "Fartuchy",
    category: "Odzież ochronna",
    type: "",
    desc: "",
    features: ['fizelinowe', 'jednorazowe', '40g/m2'],
    vendors: ['Rue Cambon'],
    pageID: "/produkty/fartuchy",

  }, {
    image: Product5,
    alt: "",
    name: "Maski FFP2",
    category: "Maski ochronne",
    type: "FFP2",
    desc: "",
    features: ['spełniające normy EN 149:2001+A1:2009', 'CE z nr jednostki notyfikowanej', 'maseczki z zaworami lub bez'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/maski-ffp2",

  }, {
    image: Product51,
    alt: "",
    name: "Maski FFP3",
    category: "Maski ochronne",
    type: "FFP3",
    desc: "",
    features: ['spełniające normy EN 149:2001+A1:2009', 'CE z nr jednostki notyfikowanej', 'maseczki z zaworami lub bez'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/produkty/maski-ffp3",

  }, {
    image: Product6,
    alt: "",
    name: "Aerozol dezynfekcyjny",
    category: "Dezynfekcja",
    type: "",
    desc: "Aerozol Silver Flash dezynfekuje wszystkie urządzenia elektroniczne, terminale płatnicze, bankomaty, automaty, smartfony, tablety, klamki, poręcze, przyciski, przybory kuchenne, powierzchnie związane z procesem produkcji, przechowywaniem i spożywaniem żywności w tym wody pitnej.Silver Flash jest bezwonny, nie zostawia śladów, nie uszkadza powierzchni urządzeń elektronicznych.",
    features: ['natychmiastowa aktywność wirusobójcza', 'potwierdzona skuteczność niszczenia SARS-CoV-2', 'nie zawiera alkoholu'],
    vendors: ['Silverflash'],
    pageID: "/produkty/aerozol-silverflash",

  },
];

const productsHeading = 'produkty';
const catHeading = 'produkty';


export { products, categories, productsHeading, catHeading };