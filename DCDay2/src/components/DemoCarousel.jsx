import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel() {
    return <Carousel>
        <div>
                    <img src="hongkong.jpg" />
                    <p className="legend">hongkong</p>
                </div>
                <div>
                    <img src="japan.webp" />
                    <p className="legend">japan</p>
                </div>
                <div>
                    <img src="macao.webp" />
                    <p className="legend">macao</p>
                </div>
                <div>
                    <img src="lasVegas.webp" />
                    <p className="legend">lasVegas</p>
                </div>
    </Carousel>
}







export default DemoCarousel