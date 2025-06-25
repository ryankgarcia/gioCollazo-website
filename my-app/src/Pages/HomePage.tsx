import './HomePageLayout.css'

export function HomePage(){
    return (
        <div className="home-container">
            <div className='row'>
            <div className='column-third'>
         <h2 className='clients-styled'>Client's I've Styled</h2>
         </div>
         </div>
            <div className='row'>
                <div className='image-card'>
         <img className="home-image" src='/daytrip-outdoor.jpg' alt='styled-woman' />
         </div>
                <div className='image-card'>
         <img className='home-image' src='/LC-pink-fit.jpg' alt='stylist-woman' />
         </div>
         </div>
         <div className='column-third'>
         <h2 className='clients-styled'>Brands I've Worked With</h2>
         </div>
        </div>
    )
}