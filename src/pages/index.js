import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from '../../data/imageData.json'
import { logo } from '../../data/imageLogo.json'
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';


const Home = () => {
    return (
        <div id='home'>
            <Hero/>
            <Carousel>
                {images.map(({ about, heading, url })=>{
                    return <div>
                    <img src={url} />
                    {/* <p className="legend">{about}</p> */}
                 </div>
                })}
            </Carousel>
            <About />
            <Projects />
            <Technologies />
            <Contact />
        </div>
    );
};


export default Home;
