
import catalogue2021 from "../../assets/files/katalog-2021.pdf";
import catalogueImage from "../../assets/images/katalog-pl.png";
import catalogue2021eng from "../../assets/files/katalog-2021-eng.pdf";
import catalogueImageEng from "../../assets/images/katalog-eng.png";
import instrukcjaMumu from "../../assets/files/instrukcja-mumu-premium.pdf";
import instrukcjaMumuImage from "../../assets/images/instrukcja-mumu-premium.png";

const downloadsData = [
  {
    file: catalogue2021,
    image: catalogueImage,
    title: "Katalog 2021",
    link: catalogue2021,
    button: 'pobierz',
  }, {
    file: catalogue2021eng,
    image: catalogueImageEng,
    title: "2021 Catalogue",
    link: catalogue2021eng,
    button: 'pobierz',
  }, {
    file: instrukcjaMumu,
    image: instrukcjaMumuImage,
    title: "Instrukcja obsługi rękawic Mumu Premium",
    link: instrukcjaMumu,
    button: 'pobierz',
  },
];

const downloadsHeading = 'Do Pobrania'

export { downloadsData, downloadsHeading };