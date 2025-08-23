import { Footer } from '../Components/Footer';
import './PagesCssInCommon.css';
import './FAQ.css';

export function FAQ() {
  return (
    <div className="page-container">
      <h2 className="FAQ-header-main text-center">Frequently Asked</h2>
      <h2 className="FAQ-header-main text-center">Questions</h2>
      <p className="FAQ-question">What is a Wardrobe Stylist?</p>
      <p className="p-text">
        A style expert is a wardrobe professional who helps clients uncover
        their unique aesthetic. Thoughtfully building wardrobes that reflect
        their lifestyle, aspirations, and essence, so they show up in the world
        as their most confident, elevated selves.
      </p>
      <p className="FAQ-question">What is your styling process?</p>
      <p className="p-text">
        I begin with a brief style questionnaire to get a deeper understanding
        of you, your lifestyle, and your style goals. From there, we move into a
        closet cleanse to assess what you currently have and what you may need.
        After that, we proceed to the shopping phase, which can be tailored in a
        few different ways depending on your needs (more on that during the
        initial <a href="/contact">consultation</a>). If you’re preparing for a
        specific event, I’m here to help you create a look that makes you feel
        confident, sexy, and fully aligned with the moment.
      </p>
      <p className="FAQ-question">What is included in your services? </p>
      <p className="p-text">
        I offer a range of <a href="/services">services</a> and packages
        tailored to fit your individual needs.
      </p>
      <p className="FAQ-question">Do you offer aftercare? </p>
      <p className="p-text">
        Absolutely. Throughout our time working together, I’ll guide you in
        understanding your body and how to dress with confidence. My goal is to
        empower you with lasting knowledge so that you feel proud of your style,
        with or without my help.
      </p>
      <p className="FAQ-question">Do you offer services to men? </p>
      <p className="p-text">
        Yes, I offer services to men. Everyone is welcome.
      </p>
      <p className="FAQ-question">Do you offer virtual Styling? </p>
      <p className="p-text">
        Yes, I offer virtual styling sessions through video chat or any
        camera-enabled device, allowing me to work with you from anywhere in the
        world.
      </p>
      <p className="FAQ-question">
        How much does it cost? What is the budget I should expect for new
        clothes?
      </p>
      <p className="p-text">
        My services are designed to give you the polished, professional results
        you’d expect from a top-tier stylist without the luxury price tag. I
        provide expert guidance and consistency, ensuring every investment you
        make in your wardrobe pays off. With a fair market value pricing model,
        you’ll always receive lasting quality and exceptional value.
      </p>
      <Footer />
    </div>
  );
}
