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
    desc: ["Rękawice nitrylowe bezpudrowe, medyczne, syntetyczne, niesterylne, nie wywołują alergii. Wskazane do użytku przez osoby uczulone na lateks. Teksturowane / chropowate, wzmacniane na końcach palców, posiadają dobre właściwości mechaniczne, zapewniają lepszy chwyt. Rękawiczki w uniwersalnym kształcie (dopasowane na prawą i lewą dłoń).",
      'Zastosowanie ochronne w przypadku potencjalnego kontaktu z substancją lub materiałem o właściwościach zakaźnych i/lub chemicznych. Rękawice nitrylowe chronią przed bakteriami, wirusami oraz patogenami krwiopochodnymi i cytostatykami.',
      'Spełniają wymagania  Europejskiej Dyrektywy o Wyrobach Medycznych  oraz  Europejskiej Dyrektywy o Środkach Ochrony indywidualnej , chroniące przed zagrożeniami o najwyższym stopniu ryzyka.',
      'Zgodne z normami EN 455, EN 374, EN 420',
      'Szczelność - AQL 1,5 / AQL 1,0. AQL to statystyczna kontrola jakości produktu zgodnie z wytycznymi normy EN 455 - 1 w oparciu o ISO 2859.',
      'Wykorzystywane w:'],
    features: ['placówkach medycznych', 'szpitalach', 'gabinetach stomatologicznych', 'laboratoriach medycznych', 'placówkach diagnostycznych', 'placówkach farmacji', 'aptekach', 'przychodniach zdrowia', 'domach opieki', 'przemyśle spożywczym', 'przemyśle przetwórczym', 'przemyśle ogrodniczym', 'fabrykach przemysłowych', 'salonach kosmetycznych', 'salonach fryzjerskich', 'salonach tatuaży', 'firmach gastronomicznych'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/rekawice-nitrylowe",

  }, {
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe pudrowane",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: ["Rękawice lateksowe bezpudrowe, medyczne, syntetyczne, niesterylne. Rękawiczki w uniwersalnym kształcie(dopasowane na prawą i lewą dłoń).",
      'Surowiec - lateks kauczuku naturalnego. Środek pudrujący: skrobia (mączka) kukurydziana.',
      'Rękawice o bardzo dużej elastyczności i wysokiej odporności na rozdarcia.',
      'Wykorzystywane w:'],
    features: ['placówkach medycznych', 'szpitalach', 'gabinetach stomatologicznych', 'laboratoriach medycznych', 'placówkach diagnostycznych', 'placówkach farmacji', 'aptekach', 'przychodniach zdrowia', 'domach opieki', 'przemyśle spożywczym', 'przemyśle przetwórczym', 'przemyśle ogrodniczym', 'fabrykach przemysłowych', 'salonach kosmetycznych', 'salonach fryzjerskich', 'salonach tatuaży', 'firmach gastronomicznych'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/produkty/rekawice-lateksowe-pudrowane",

  }, {
    image: Product2,
    alt: "",
    name: "Rękawice lateksowe bezpudrowe",
    category: "Rękawice ochronne",
    type: "lateksowe",
    desc: ["Rękawice lateksowe bezpudrowe, medyczne, syntetyczne, niesterylne. Rękawiczki w uniwersalnym kształcie(dopasowane na prawą i lewą dłoń).",
      'Spełniają wymagania  Europejskiej Dyrektywy o Wyrobach Medycznych  oraz  Europejskiej Dyrektywy o Środkach Ochrony indywidualnej , chroniące przed zagrożeniami o najwyższym stopniu ryzyka.',
      'Wykorzystywane w:'],
    features: ['placówkach medycznych', 'szpitalach', 'gabinetach stomatologicznych', 'laboratoriach medycznych', 'placówkach diagnostycznych', 'placówkach farmacji', 'aptekach', 'przychodniach zdrowia', 'domach opieki', 'przemyśle spożywczym', 'przemyśle przetwórczym', 'przemyśle ogrodniczym', 'fabrykach przemysłowych', 'salonach kosmetycznych', 'salonach fryzjerskich', 'salonach tatuaży', 'firmach gastronomicznych'],
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
    features: ['flizelinowe', 'jednorazowe', '40g/m2'],
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
    desc: ["Aerozol Silver Flash dezynfekuje wszystkie urządzenia elektroniczne, terminale płatnicze, bankomaty, automaty, smartfony, tablety, klamki, poręcze, przyciski, przybory kuchenne, powierzchnie związane z procesem produkcji, przechowywaniem i spożywaniem żywności w tym wody pitnej.Silver Flash jest bezwonny, nie zostawia śladów, nie uszkadza powierzchni urządzeń elektronicznych."],
    features: ['natychmiastowa aktywność wirusobójcza', 'potwierdzona skuteczność niszczenia SARS-CoV-2', 'nie zawiera alkoholu'],
    vendors: ['Silverflash'],
    pageID: "/produkty/aerozol-silverflash",

  },
];

const productsHeading = 'produkty';
const catHeading = 'produkty';


export { products, categories, productsHeading, catHeading };