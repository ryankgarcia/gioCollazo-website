import { Link } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import './Services.css';

export function Services() {
  return (
    <>
      <h2>Services</h2>
      <h3>A La Carte</h3>
      <p></p>
      <p></p>
      <h3>👗 Closet Clean-Outs</h3>
      <p>
        Let’s detox your wardrobe and make space for who you are now. I’ll help
        you sort through what to keep, toss, or tailor—while creating new
        outfits with what you already own.
      </p>
      <p>No judgment. Just clarity, style, and a fresh perspective.</p>
      <p>Includes:</p>
      <p>✅ </p>
      <p>✅ </p>
      <p>✅ </p>
      <p>✅ </p>
      <Link to="/contact">Book Your Session. . .</Link>
      <h3>🛍️ Shopping with Gio</h3>
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
      <p>✅ Body type education</p>
      <p>✅ Styling tips as we shop</p>
      <p>✅ Outfit building in real time</p>
      <p>✅ Feel-good vibes all day</p>
      <p>
        Ready for your wardrobe glow-up? Let's make it personal. Let's make it
        fashion. 💅
      </p>
      <Link to="/contact">Book Your Session. . .</Link>
      <h3>✈️ Trips & Events Package 💃</h3>
      <p>Includes:</p>
      <p>✅ </p>
      <p>✅ </p>
      <p>✅ </p>
      <p>✅ </p>
      <Link to="/contact">Book Your Session. . .</Link>
      <Footer />
    </>
  );
}
