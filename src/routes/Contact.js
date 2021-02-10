

import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ContactSection } from "../components/contact-form";
import { BusinessCards } from "../components/business-cards";
import { Map } from "../components/map";

function Contact() {
  return (
    <>
      <Map />
      <ContactSection />
      <BusinessCards />
      <Partners />
      <Newsletter />
    </>
  );
}

export default Contact;