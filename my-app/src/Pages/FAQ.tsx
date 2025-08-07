import { Footer } from '../Components/Footer';
import './FAQ.css';

export function FAQ() {
  return (
    <div className="FAQ-container">
      <h2 className="FAQ-header-main">Frequently Asked Questions</h2>
      <p className="FAQ-question">Q: What is a Wardrobe Stylist?</p>
      <p className="FAQ-answer">
        A style expert is a wardrobe professional who helps clients uncover
        their unique aesthetic. Thoughtfully building wardrobes that reflect
        their lifestyle, aspirations, and essence, so they show up in the world
        as their most confident, elevated selves.
      </p>
      <p className="FAQ-question">Q: What is your styling process?</p>
      <p className="FAQ-answer">
        I begin with a brief style questionnaire to get a deeper understanding
        of you, your lifestyle, and your style goals. From there, we move into a
        closet cleanse to assess what you currently have and what you may need.
        After that, we proceed to the shopping phase, which can be tailored in a
        few different ways depending on your needs (more on that during the
        initial <a href="/contact">consultation</a>). If you’re preparing for a
        specific event, I’m here to help you create a look that makes you feel
        confident, sexy, and fully aligned with the moment.
      </p>
      <p className="FAQ-question">Q: What is included in your services? </p>
      <p className="FAQ-answer">
        I offer a range of <a href="/services">services</a> and packages
        tailored to fit your individual needs.
      </p>
      <p className="FAQ-question">Q: Do you offer aftercare? </p>
      <p className="FAQ-answer">
        Absolutely. Throughout our time working together, I’ll guide you in
        understanding your body and how to dress with confidence. My goal is to
        empower you with lasting knowledge so that you feel proud of your style,
        with or without my help.
      </p>
      <p className="FAQ-question">Q: Do you offer services to men? </p>
      <p className="FAQ-answer">
        Yes, I offer services to men. Everyone is welcome.
      </p>
      <p className="FAQ-question">Q: Do you offer virtual Styling? </p>
      <p className="FAQ-answer">
        Yes, I offer virtual styling sessions through video chat or any
        camera-enabled device, allowing me to work with you from anywhere in the
        world.
      </p>
      <p className="FAQ-question">
        Q: How much does it cost? What is the budget I should expect for new
        clothes?
      </p>
      <p className="FAQ-answer">
        My rates are reasonably priced and designed to be budget-friendly. As
        for your wardrobe budget, that’s completely up to you. It all depends on
        what you need and what you’re comfortable spending. I’m here to work
        within your means and make sure you get the best value, no matter the
        budget.
      </p>
      <Footer />
    </div>
  );
}
