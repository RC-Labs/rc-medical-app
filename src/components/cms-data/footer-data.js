import phoneIcon from "../../assets/images/icons/phone-icon-big.svg";
import mailIcon from "../../assets/images/icons/mail-icon-big.svg";
import hoursIcon from "../../assets/images/icons/hours-icon-big.svg";


const contactBoxesData = [
  {
    icon: mailIcon,
    alt: "envelope",
    title: "Wyślij wiadomość",
    mail: "biuro@rcmedical.pl",
  }, {
    icon: phoneIcon,
    alt: "phone",
    title: "Zadzwoń do nas",
    tel: "+48 609 139 705",
  }, {
    icon: hoursIcon,
    alt: "watch",
    title: "Godziny otwarcia",
    info: "poniedziałek - piątek",
    detail: "9:00 - 17:00"
  },
];

const address = [
  {
    title: 'Biuro',
    street: "ul.Mehoffera 10",
    postal: "31-322 Kraków",
  }, {
    title: 'Magazyn',
    street: "ul. Komandosów 1/2",
    postal: "32-085 Modlniczka",
  },
]



export { contactBoxesData, address };
