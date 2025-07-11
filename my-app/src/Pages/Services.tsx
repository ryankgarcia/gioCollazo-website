import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import './Services.css';

export function Services() {
  return (
    <div className="services-container">
      <h3 className="service-headerMain">A La Carte</h3>
      <p></p>
      <p></p>
      <h3 className="service-subheader">👗 Closet Clean-Outs</h3>
      <p>
        Let’s detox your wardrobe and make space for who you are now. I’ll help
        you sort through what to keep, toss, or tailor while creating new
        outfits with what you already own.
      </p>
      <p>No judgment. Just clarity, style, and a fresh perspective.</p>
      <p>Includes:</p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <Link to="/contact" className="book-me">
        Book Your Session
      </Link>
      <h3 className="service-subheader">🛍️ Shopping with Gio</h3>
      <p>
        Your budget. Your vibe. Your glow-up. Whether it’s a full style overhaul
        or just a seasonal refresh, we’ll hit the stores together and try on
        curated looks designed for your body type, lifestyle, and goals.
      </p>
      <p>
        We’ll shop smarter—not harder—and you’ll leave knowing how to dress with
        confidence. (2 hour-minimum)
      </p>
      <p>Includes:</p>
      <p>
        <span className="emoji-large">✅</span> Body type education
      </p>
      <p>
        <span className="emoji-large">✅</span> Styling tips as we shop
      </p>
      <p>
        <span className="emoji-large">✅</span> Outfit building in real time
      </p>
      <p>
        <span className="emoji-large">✅</span> Feel-good vibes all day
      </p>
      <p>Ready for your wardrobe glow-up? </p> <p>Let's make it personal.</p>
      <p>Let's make it fashion. 💅</p>
      <Link to="/contact" className="book-me">
        Book Your Session
      </Link>
      <h3 className="service-subheader">✈️ Trips & Events 💃</h3>
      <p>
        Getting ready to travel somewhere new? Going to a special event and want
        to dress to impress?
      </p>
      <p>
        This is the most popular a la carte item amongst my clients for those
        who are traveling abroad, going to a party, or a festival.
      </p>
      <p>
        Let's get you all glam'ed up for your special occasion by helping you
        understand your body's best features.
      </p>
      <p>Includes:</p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <p>
        <span className="emoji-large">✅</span>
      </p>
      <Link to="/contact" className="book-me">
        Book Your Session
      </Link>
      <Footer />
    </div>
  );
}
