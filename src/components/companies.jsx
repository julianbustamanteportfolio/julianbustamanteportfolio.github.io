import React from 'react';

// Function to import all images from a folder
const importAllImages = (context) => {
  return context.keys().map(context);
};

// Import all images from the 'logos' folder
const logos = importAllImages(require.context('../img/logos', false, /\.(png|jpg|jpeg|svg)$/));

class Companies extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Marcas con las que he trabajado
                  </h3>
                  <div className="line-mf"></div>
                </div>
                <div className="technical">
                  <ul>
                    {logos.map((logo, index) => (
                      <li key={index}>
                        <span className="companies-circle">
                          <img src={logo} alt={`Icon ${index + 1}`} className="icon-companies" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Companies;
