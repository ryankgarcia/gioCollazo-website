import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Testimonials } from './Testimonials';

jest.mock('../Components/Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe('<Testimonials />', () => {
  function renderTestimonialsAt(pathname = '/testimonials') {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  test('renders heading, paragraphs, images, and footer', () => {
    renderTestimonialsAt();

    expect(
      screen.getByRole('heading', { level: 2, name: /testimonials/i }),
    ).toBeInTheDocument();

    const allImages = screen.getAllByRole('img');
    expect(allImages).toHaveLength(7);

    expect(screen.getByAltText(/Jim-Cynthia-testimonial1/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Jim-Mathews-Cynthia-Bach.jpeg',
    );

    expect(screen.getByAltText(/Sophia-testimonial2/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Sophia-portrait-image.jpeg',
    );

    expect(screen.getByAltText(/Alex-testimonial3/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Alex-portrait-closeUp-main.jpeg',
    );

    expect(screen.getByAltText(/LC-testimonial4/i)).toHaveAttribute(
      'src',
      '/testimonials-images/LC-portrait-closeUp.jpeg',
    );

    expect(screen.getByAltText(/Louie-testimonial5/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Louie-portrait-closeUp.jpeg',
    );

    expect(screen.getByAltText(/Nicole-testimonial6/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Nicole-portrait-closeUp.jpeg',
    );

    expect(screen.getByAltText(/Ryan-testimonial7/i)).toHaveAttribute(
      'src',
      '/testimonials-images/Ryan-portrait-closeUp.jpg',
    );

    const laTexts = screen.getAllByText(/los angeles, california/i);
    expect(laTexts).toHaveLength(3);

    const jimBlock = screen.getByTestId('t-jim-cynthia');

    expect(
      screen.getByText(
        /having worked with gio for over a decade, i can confidently say he has an exceptional eye for style and a natural flair for fashion\. his talent for layering and putting looks together allows him to create distinctive, personalized styles that truly bring out the individuality of each client\./i,
      ),
    ).toBeInTheDocument();

    expect(
      within(jimBlock).getByText(/jim mathews & cynthia bach/i),
    ).toBeInTheDocument();
    expect(
      within(jimBlock).getByText(/jewelry designers/i),
    ).toBeInTheDocument();
    expect(
      within(jimBlock).getByText(/los Angeles, california/i),
    ).toBeInTheDocument();

    const sophiaBlock = screen.getByTestId('t-sophia');

    expect(
      screen.getByText(
        /i’ve been working with gio for years, and he’s come through for me in so many clutch moments — even last-minute fittings before major events\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /as part of a DJ duo, i love that he curates outfits that complement both me and alex — stylish, cohesive, but never too matchy\./i,
      ),
    ).toBeInTheDocument();

    expect(
      within(sophiaBlock).getByText(/sophia - dj, business owner, socialite/i),
    ).toBeInTheDocument();
    expect(
      within(sophiaBlock).getByText(/los Angeles, california/i),
    ).toBeInTheDocument();

    const alexBlock = screen.getByTestId('t-alex');

    expect(
      screen.getByText(
        /working with Gio has been a game-changer\. he’s created custom looks for both sophia and me that hit the vibe perfectly every time — from high-energy performances to more elevated, themed events\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /we always feel confident and comfortable in his pieces, and he finds that sweet spot where we coordinate well without looking too overdone\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/can’t recommend him enough\./i),
    ).toBeInTheDocument();

    expect(
      within(alexBlock).getByText(/alex - dj, producer, socialite/i),
    ).toBeInTheDocument();
    expect(
      within(alexBlock).getByText(/los Angeles, california/i),
    ).toBeInTheDocument();

    const lcBlock = screen.getByTestId('t-lc');

    expect(
      screen.getByText(
        /gio is a fabulous stylist and does more than styling\. he’s always willing to listen to his customer and understand the “vision” they want when it comes to dressing up for any occasion\. i’ve learned so much about myself and dressing myself all thanks to him\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /if i had to pick one favorite festival fit it would be every coachella! from festivals, weddings, birthdays etc he’s done it all for me\. he has been styling me since 2022 and will definitely keep going back to him\./i,
      ),
    ).toBeInTheDocument();
    expect(
      within(lcBlock).getByText(/lc - entrepreneur, influencer, socialite/i),
    ).toBeInTheDocument();
    expect(
      within(lcBlock).getByText(/downey, california/i),
    ).toBeInTheDocument();

    const louieBlock = screen.getByTestId('t-louie');

    expect(
      screen.getByText(
        /working with gio has been nothing short of amazing\. i’ve had the pleasure of collaborating with him on both personal and professional styling needs, and every experience has exceeded my expectations\. gio is the perfect balance of professionalism and personality—always bringing a fun, positive energy that makes the entire process enjoyable from start to finish\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /whether it was a planned event or a last-minute request, gio always came through with thoughtful styling and reliable support\. his work consistently made me feel like the best version of myself, and that’s a gift not every stylist can offer\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /i recommend gio wholeheartedly—he’s not only talented and dependable, but also kind, approachable, and fairly priced\. if you're looking for someone who truly cares about helping you feel and look your best, gio is your guy\./i,
      ),
    ).toBeInTheDocument();

    expect(
      within(louieBlock).getByText(/louie - husband, father, business owner/i),
    ).toBeInTheDocument();
    expect(
      within(louieBlock).getByText(/north orange county, california/i),
    ).toBeInTheDocument();

    const nicoleBlock = screen.getByTestId('t-nicole');

    expect(
      screen.getByText(
        /i have worked with gio a few times for vacations i was taking\. every time, he had me looking and feeling cute\. i appreciate the fact he listens, and works with me on what im comfortable with, and considers my feedback\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /he makes me feel comfortable when working with him\. it’s always fun working with him\. and it doesn’t feel like it’s business, but more like a friend helping me\. he’s always my go-to stylist\./i,
      ),
    ).toBeInTheDocument();

    expect(
      within(nicoleBlock).getByText(
        /nicole - model, entrepreneur, make up artist/i,
      ),
    ).toBeInTheDocument();
    expect(within(nicoleBlock).getByText(/dallas, texas/i)).toBeInTheDocument();

    const ryanBlock = screen.getByTestId('t-ryan');

    expect(
      screen.getByText(
        /gio styled me for edc weekend and i felt like the star of the show! strangers were complimenting me the whole weekend and made me feel like a celebrity\. it was truly an amazing experience because i normally don’t seek a lot of attention like that\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /he is fun to work with, professional, and an artist of his craft. gio is honest and keeps it real with me, which is why i love to work with him\. if i don’t like how i feel in my clothes, we make adjustments to make it feel “just right”\./i,
      ),
    ).toBeInTheDocument();

    expect(
      within(ryanBlock).getByText(/ryan - software developer/i),
    ).toBeInTheDocument();
    expect(
      within(ryanBlock).getByText(/orange county, california/i),
    ).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
