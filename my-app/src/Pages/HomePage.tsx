import './HomePageLayout.css'

export function HomePage(){
    return (
        <div className="home-container">
         <h2>Client's I've Styled</h2>
         <img className="home-image" src='/daytrip-outdoor.jpg' alt='styled-woman' />
         <img className='home-image' src='/LC-pink-fit.jpg' alt='stylist-woman' />
        </div>
    )
}