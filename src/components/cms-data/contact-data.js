const contacts = [
  {
    name: "Grzegorz Guzik",
    position: "spec. ds. zamówień publicznych",
    phone: "+48 501 176 792",
    mail: "grzegorz@rcmedical.pl",
  }, {
    name: "Anna Bat-Ulzii",
    position: "starszy handlowiec",
    phone: "+48 792 893 397",
    mail: "anna@rcmedical.pl",
  }, {
    name: "Marcin Bendkowski",
    position: "specjalista ds. logistyki",
    phone: "+48 603 183 207",
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
  },
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
  NIP: "NIP 123 456 78 90",
  KRS: "KRS 1234567890",
  REGON: "REGON 123456789",
};

export { contacts, formData, contactHeading, legalInfo };