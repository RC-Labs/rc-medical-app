const contacts = [
  {
    name: "Grzegorz Guzik",
    position: "spec. ds. zamówień publicznych",
    phone: "+48 724 451 234",
    mail: "grzegorz@rcmedical.pl",
  }, {
    name: "Anna Bat-Ulzii",
    position: "starszy handlowiec",
    phone: "+48 609 139 705",
    mail: "anna@rcmedical.pl",
  }, {
    name: "Marcin Bendkowski",
    position: "specjalista ds. logistyki",
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
    phone: "+48 739 286 872",
    mail: "ksiegowosc@rcmedical.pl",
  }, {
  name: "Cyprian Ptaszek",
  position: "handlowiec",
  phone: "+48 665 871 234",
  mail: "cyprian.ptaszek@rcmedical.pl",
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
  street: "ul. Mehoffera 10",
  postal: "31-322 Kraków",
  NIP: "NIP 6762503470",
  KRS: "KRS 0000607445",
  REGON: "REGON 36394627900000",
};

export { contacts, formData, contactHeading, legalInfo };
