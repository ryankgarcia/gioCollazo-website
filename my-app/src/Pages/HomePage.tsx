import './HomePageLayout.css';

export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-row">
        <div className="home-column-third">
          <h2 className="home-clients-styled">Client's I've Styled</h2>
        </div>
      </div>
      <div className="home-row">
        <img
          className="home-image-left"
          src="/daytrip-outdoor.jpg"
          alt="styled-woman"
        />
        <img
          className="home-image-right"
          src="/LC-pink-fit.jpg"
          alt="stylist-woman"
        />
      </div>
      <div className="home-column-third">
        <h2 className="home-clients-styled">Brands I've Worked With</h2>
      </div>
    </div>
  );
}
