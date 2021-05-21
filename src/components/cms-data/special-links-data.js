
import logo1 from '../../assets/images/partners/mgi.png'
import logo2 from "../../assets/images/partners/my-medikal.png";
import logo3 from "../../assets/images/partners/eu-par.png";

import declaration1 from '../../assets/files/declaration-mgimed.pdf';
import declaration2 from '../../assets/files/declaration-mymedikal.pdf';

let specialLinksData = [
  {
    paragraph: 'Jesteśmy autoryzowanym dystrybutorem produktów marki MGI Medical na Polskę',
    logo: logo1,
    logoAlt: 'MGI Medical',
    file: declaration1,
    button: 'Zobacz',
  },
  {
    paragraph: 'Jesteśmy wyłącznym i autoryzowanym dystrybutorem produktów marki MyMedical',
    logo: logo2,
    logoAlt: 'My Medikal',
    file: declaration2,
    button: 'Zobacz',
  },
  {
    paragraph: 'Zostaliśmy wyłącznym dostawcą produktów ochrony osobistej do Parlamentu Europejskiego.',
    logo: logo3,
    logoAlt: 'Parlament Europejski',
    file: null,
    button: null,
  }
]


export { specialLinksData };