
import './HomePage.css'
import Nav from '../components/Nav'
import heroImage from '../assets/home-hero.jpg'
import hikingImage from '../assets/hiking.jpg'
import poseImage from '../assets/pose.jpg'

function HomePage() {
    return (
        <div>
            <main>
                <div className='home-hero'>
                    <img src={heroImage} alt="Home hero" />
                    <div className='home-hero-text'>
                        <div>New Season Arrivals</div>
                        <div className='home-hero-subtext'>Elevate your everyday style with modern essentials.</div>
                    </div>
                </div>

                <div className='home-container'>
                    <div className='home-text'>
                        <div className='home-text-header'>Defined by style</div>
                        <p>Timeless outerwear crafted for a confident silhouette. Designed to elevate your everyday wardrobe with understated sophistication.</p>
                    </div>
                    <img className='home-image' src={hikingImage}></img>
                </div>

                <div className='home-container'>
                    <img className='home-image' src={poseImage}></img>
                    <div className='home-text'>
                        <div className='home-text-header'>Own the moment</div>
                        <p>Style isn’t about fitting in, it’s about standing out in your own way. Discover pieces that bring confidence, edge, and individuality to every look.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default HomePage;