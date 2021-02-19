
import catalogue2021 from "../../assets/files/katalog-2021.pdf";
import catalogue2021eng from "../../assets/files/katalog-2021-eng.pdf";
import catalogueImage from "../../assets/images/katalog-pl.png";
import catalogueImageEng from "../../assets/images/katalog-eng.png";

const downloadsData = [
  {
    file: catalogue2021,
    image: catalogueImage,
    title: "Katalog 2021",
    link: 'katalog-2021.pdf',
    button: 'pobierz',
  }, {
    file: catalogue2021eng,
    image: catalogueImageEng,
    title: "2021 Catalogue",
    link: 'katalog-2021-eng.pdf',
    button: 'pobierz',
  },
];

const downloadsHeading = 'Do Pobrania'

export { downloadsData, downloadsHeading };