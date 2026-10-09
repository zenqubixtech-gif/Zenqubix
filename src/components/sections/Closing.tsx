import logo from '../../assets/zenqubix-logo.webp';
import ContactForm from '../ui/ContactForm';

export default function Closing() {
  return (
    <section className="close dark" id="contact">
      <div className="wrap cl">
        <div>
          <div className="plate"><img className="logo" src={logo} alt="ZENQUBIX logo" loading="lazy" /></div>
          <h2 className="h2">Tell us about your project</h2>
          <p className="sub">Share what you are building and what you need. We will read it and reply with questions or next steps.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
