import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import './PagesCssInCommon.css';
import './Services.css';

export function Services() {
  return (
    <div className="page-container">
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
      <p className="p-text">Includes:</p>
      <p className="p-text">
        ✅ This is how the test will appear on this line. If the line continues
        it will go to the next line
      </p>
      <p className="p-text">✅</p>
      <p className="p-text">✅</p>
      <p className="p-text">✅</p>
      <div className="button-center">
        <Link to="/contact" className="book-session text-center">
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
      <p className="p-text">Includes:</p>
      <p className="p-text">✅ Body type education</p>
      <p className="p-text">✅ Styling tips as we shop</p>
      <p className="p-text">✅ Outfit building in real-time</p>
      <p className="p-text">✅ Feel-good vibes all day</p>
      <p className="p-text">Ready for your wardrobe glow-up? </p> <p className="p-text">Let's make it personal.</p>
      <p className="p-text">Let's make it fashion. 💅</p>
      <div className="button-center">
        <Link to="/contact" className="book-session text-center">
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
      <p className="p-text">Includes:</p>
      <p className="p-text">✅</p>
      <p className="p-text">✅</p>
      <p className="p-text">✅</p>
      <p className="p-text">✅</p>
      <div className="button-center">
        <Link to="/contact" className="book-session text-center">
          Book Your Session
        </Link>
      </div>
      <Footer />
    </div>
  );
}
