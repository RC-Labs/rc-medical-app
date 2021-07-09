

import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ContactSection } from "../components/contact-form";
import { BusinessCards } from "../components/business-cards";
import { MapSection } from "../components/map";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Contact() {
  return (
    <>
      <Header />
      <MapSection />
      <ContactSection />
      <BusinessCards />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Contact;