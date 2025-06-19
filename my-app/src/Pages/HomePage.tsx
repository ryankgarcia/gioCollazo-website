import './HomePageLayout.css'

export function HomePage(){
    return (
        <div className="home-container">
         <h2 className='clients-styled'>Client's I've Styled</h2>
         <img className="home-image" src='/daytrip-outdoor.jpg' alt='styled-woman' />
         <img className='home-image' src='/LC-pink-fit.jpg' alt='stylist-woman' />
         <h2 className='clients-styled'>Brands I've Worked With</h2>
        </div>
    )
}