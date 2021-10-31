import './landingPage.css';
import text from './hitch-hike-txt.png';
import MapApp from '../Map/MapApp.js';
import GallerySlider from '../Gallerypage/GallerySlider';
import Footer from '../Footerpage/Footer';

const LandingPage = () => {
    return ( 
        <div className="return">
        <div className="landing-page">
            <img src={text} alt="Hitch Hike" className='hitch-hike-txt'/>
        </div>

        <div>
           <GallerySlider/>
       </div>

        <div>
         <MapApp/>
        </div>
        


        <div >
            <Footer/>
        </div>
        </div>
     );
}
 
export default LandingPage;