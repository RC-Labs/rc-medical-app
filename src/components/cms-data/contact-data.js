const contacts = [
  {
    name: "Grzegorz Guzik",
    position: "spec. ds. zamówień publicznych / starszy handlowiec",
    phone: "+48 724 451 234",
    mail: "grzegorz@rcmedical.pl",
  }, {
    name: "Anna Bat-Ulzii",
    position: "starszy handlowiec",
    phone: "+48 609 139 705",
    mail: "anna@rcmedical.pl",
  }, {
    name: "Cyprian Ptaszek",
    position: "handlowiec",
    phone: "+48 665 871 234",
    mail: "cyprian.ptaszek@rcmedical.pl",
  }, {
    name: "Marcin Bendkowski",
    position: "marketing i logistyka",
    phone: "+48 691 017 834",
    mail: "marcin@rcmedical.pl",
  }, {
    name: "Sylwester Bendkowski",
    position: "specjalista ds. it",
    phone: "+48 575 644 394",
    mail: "sylwester@rcmedical.pl",
  }, {
    name: "Magdalena Wójtowicz",
    position: "dział ksiegowości",
    phone: "+48 691 599 477",
    mail: "ksiegowosc@rcmedical.pl",
  }, {
    name: "Natasza Zielińska",
    position: "autoryzowany przedstawiciel",
    phone: "+49 1520 768 2503",
    mail: "info@sanmedi.de",
  }
]

const formData = {
  name: 'imię i nazwisko',
  mail: 'adres e-mail',
  phone: 'numer telefonu',
  subject: 'temat',
  message: 'wiadomość',
  button: 'wyślij',
}

const contactHeading = 'Kontakt';

const legalInfo = {
  name: 'RC Medical',
  street: "ul. Mehoffera 10",
  postal: "31-322 Kraków",
  NIP: "NIP 6762503470",
  KRS: "KRS 0000607445",
  REGON: "REGON 36394627900000",
};

const authReps = [
  {
    name: 'Sanemedi Handel GmbH',
    title: 'Autoryzowany przedstawiciel',
    street: 'Heilige - Grab-Strasse 27/28',
    postal: '02828 Görlitz',
    state: 'Amtsgericht Dresden HRB 40981',
    info: 'USt-ID-Nr.: DE340221051',
  }
]

export { contacts, formData, contactHeading, legalInfo, authReps };
