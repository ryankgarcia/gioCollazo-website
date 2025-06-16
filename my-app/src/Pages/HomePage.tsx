import './HomePageLayout.css'

export function HomePage(){
    return (
        <div className="home-container">
         <h2>Client's I've Styled</h2>
         <img className="home-image" src='/src/assets/daytrip-outdoor.jpg' alt='styled-woman' />
         <img className='home-image' src='/src/assets/LC-pink-fit.jpg' alt='stylist-woman' />
        </div>
    )
}