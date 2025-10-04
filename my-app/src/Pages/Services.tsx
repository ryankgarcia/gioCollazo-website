import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import './PagesCssInCommon.css';
import './Services.css';

export function Services() {
  // this function was created to properly format a prepopulated message for people interested in Gio's
  // services for this and any other message that may occur in the future

  function createMailToLink(subject: string, body: string): string {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:styledbygio4@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  }

  // the next two variables are related in sending this email at the click of the 'book your session' button
  // in the styling packages section
  const stylingPackageBody = `Hello Giovanny,

I pressed the “Book Your Session” button under your Styling Packages service. 

Can you give me more details about this package?

Thanks.`;

  const sendStylingPackagesEmail = createMailToLink(
    'I would like more in-depth information about your ⭐Styling Packages⭐ Service',
    stylingPackageBody,
  );
  return (
    <div className="page-container">
      <img
        src="/Gio-Garment-Rack-allPink.jpeg"
        alt="Gio Garment Rack Image"
        className="intro-img-garment image-center"
      />
      <h3 className="header-element text-center">My Mission</h3>
      <p className="p-text">
        Your style is a reflection of who you are and my role is to
        <span className="bold-underline-text">refine</span> and
        <span className="bold-underline-text">elevate</span> it.
      </p>
      <p className="p-text">
        I offer a seamless experience designed around your unique needs whether
        it’s a grand occasion, an every day upgrade, or a last minute request.
      </p>
      <p className="p-text">
        In-person or virtually, I ensure that every detail is thoughtfully
        curated so you step out as the most confident, polished version of
        yourself.
      </p>
      <img
        src="/Gio-Mannequin-styling-services.jpeg"
        alt="Gio Styling A Mannequin"
        className="intro-img-second image-center"
        loading="lazy"
      />
      <h3 className="header-element text-center">A La Carte</h3>
      <h3 className="service-subheader text-center">👗 Closet Clean-Outs</h3>
      <p className="p-text">
        Let’s detox your wardrobe and make space for who you are now. I’ll help
        you sort through what to keep, toss, or tailor while creating new
        outfits with what you already own.
      </p>
      <p className="p-text">
        No judgment. Just clarity, style, and a fresh perspective.
      </p>
      <div className="button-center">
        <Link
          to="/contact"
          className="button services-button-margin text-center"
        >
          Book Your Session
        </Link>
      </div>
      <h3 className="service-subheader text-center">🛍️ Shopping with Gio</h3>
      <p className="p-text">
        Your budget. Your vibe. Your glow-up. Whether it’s a full style overhaul
        or just a seasonal refresh, we’ll hit the stores together and try on
        curated looks designed for your body type, lifestyle, and goals.
      </p>
      <p className="p-text">
        We’ll shop smarter, not harder, and you’ll leave knowing how to dress
        with confidence. (2 hour-minimum)
      </p>
      <p className="p-text">Ready for your wardrobe glow-up? </p>{' '}
      <p className="p-text">Let's make it personal.</p>
      <p className="p-text">Let's make it fashion. 💅</p>
      <div className="button-center">
        <Link
          to="/contact"
          className="button services-button-margin text-center"
        >
          Book Your Session
        </Link>
      </div>
      <h3 className="service-subheader text-center">✈️ Trips & Events 💃</h3>
      <p className="p-text">
        Getting ready to travel somewhere new? Going to a special event and want
        to dress to impress?
      </p>
      <p className="p-text">
        This is the most popular a la carte item amongst my clients for those
        who are traveling abroad, going to a party, or a festival.
      </p>
      <p className="p-text">
        Let's get you all glam'ed up for your special occasion by helping you
        understand your body's best features.
      </p>
      <div className="button-center">
        <Link
          to="/contact"
          className="button services-button-margin text-center"
        >
          Book Your Session
        </Link>
      </div>
      <h3 className="styling-pkgs-subheader text-center">
        ⭐Styling Packages⭐
      </h3>
      <p className="p-text">
        For those who value refinement and individuality, I now offer exclusive
        styling packages tailored to elevate your personal image with
        sophistication and ease.
      </p>
      <p className="p-text">
        Each experience is designed with intention. Seamless, discreet, and
        entirely devoted to presenting you as your most polished and confident
        self.
      </p>
      <div className="button-center">
        <a
          href={sendStylingPackagesEmail}
          className="button services-button-margin text-center"
        >
          Book Your Session
        </a>
      </div>
      <h3 className="ext-service-subheader text-center">
        ⭐Extended Services⭐
      </h3>
      <p className="p-text">
        In addition to my styling expertise, I am delighted to offer Personal
        Assistant services, available discreetly upon request.
      </p>
      <p className="p-text">
        A service tailored for those who value elegance, efficiency, and
        discretion.
      </p>
      <div className="button-center">
        <Link
          to="/contact"
          className="button services-button-margin text-center"
        >
          Book Your Session
        </Link>
      </div>
      <Footer />
    </div>
  );
}
