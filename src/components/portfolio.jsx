import React from 'react';
import Carousel from './Carousel';
import image1 from '../img/portfolio/chevrolet/image-1.png';
import image2 from '../img/portfolio/chevrolet/image-2.png';
import image3 from '../img/portfolio/chevrolet/image-3.png';
import image4 from '../img/portfolio/chevrolet/image-4.png';
import image5 from '../img/portfolio/chevrolet/image-5.png';
import image6 from '../img/portfolio/chevrolet/image-6.png';
import image7 from '../img/portfolio/chevrolet/image-7.png';
import video1 from '../img/portfolio/chevrolet/video-1.mov';
import video2 from '../img/portfolio/chevrolet/video-2.mov';


const items = [
  { id: 1, type: 'image', src: image1 },
  { id: 2, type: 'image', src: image2 },
  { id: 3, type: 'image', src: image3 },
  { id: 4, type: 'video', src: video1 },
  { id: 5, type: 'image', src: image4 },
  { id: 7, type: 'video', src: video2 },
  { id: 8, type: 'image', src: image5 },
  { id: 9, type: 'image', src: image6 },
  { id: 10, type: 'image', src: image7 },
];


class Portfolio extends React.Component {

  render() {
    return (

      <><div>


      </div><section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Portfolio
                  </h3>
                  <p className="subtitle-a">
                    {/* Check Out My Latest Projects. */}
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 ">
                <div className="box-shadow-full carousel-row">
                <Carousel items={items} />

                </div>
              </div>
            </div>
          </div>

        </section></>
    );
  }
}

export default Portfolio;