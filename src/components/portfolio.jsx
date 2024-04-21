import React from 'react';
import Carousel from './Carousel';

// Function to require all images and videos dynamically from portfolio folders
const importAllFromFolder = (context) => {
  return context.keys().map(key => ({
    type: key.includes('.mov') ? 'video' : 'image',
    src: context(key),
  }));
};

// Assuming you have a context for each folder in your portfolio
const chevroletItems = importAllFromFolder(require.context('../img/portfolio/1-CHEVROLET', false, /\.(png|mov)$/));
const cadillacItems = importAllFromFolder(require.context('../img/portfolio/2-CADILLAC', false, /\.(png|mov)$/));
const converseItems = importAllFromFolder(require.context('../img/portfolio/3-CONVERSE', false, /\.(png|mov)$/));
const credicorpBankItems = importAllFromFolder(require.context('../img/portfolio/4-CREDICORP BANK', false, /\.(png|mov)$/));
const macStoreItems = importAllFromFolder(require.context('../img/portfolio/5-MAC STORE', false, /\.(png|mov)$/));
const nespressoItems = importAllFromFolder(require.context('../img/portfolio/6-NESPRESSO', false, /\.(png|mov)$/));
const suraItems = importAllFromFolder(require.context('../img/portfolio/7-SURA', false, /\.(png|mov)$/));
const ssaaItems = importAllFromFolder(require.context('../img/portfolio/8-SSAA', false, /\.(png|mov)$/));
const sexureroItems = importAllFromFolder(require.context('../img/portfolio/9-SEXURERO', false, /\.(png|mov)$/));
const upLiftItems = importAllFromFolder(require.context('../img/portfolio/10-UPLIFT', false, /\.(png|mov)$/));
// Add similar lines for other folders...

class Portfolio extends React.Component {
  // Create a method to render each portfolio section
  renderPortfolioSection(title, items) {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">

              <div className="box-shadow-full carousel-row">
              <div className="title-box text-center">
                <h3 className="title-a">
                  {title}
                </h3>
                <div className="line-mf"></div>
              </div>
                <Carousel items={items} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        {this.renderPortfolioSection('Chevrolet', chevroletItems)}
        {this.renderPortfolioSection('Cadillac', cadillacItems)}
        {this.renderPortfolioSection('Converse', converseItems)}
        {this.renderPortfolioSection('CrediCorp Bank', credicorpBankItems)}
        {this.renderPortfolioSection('Mac Store', macStoreItems)}
        {this.renderPortfolioSection('Nespresso', nespressoItems)}
        {this.renderPortfolioSection('Sura', suraItems)}
        {this.renderPortfolioSection('SSAA', ssaaItems)}
        {this.renderPortfolioSection('Sexurero', sexureroItems)}
        {this.renderPortfolioSection('Uplift', upLiftItems)}
        {/* Render other sections by calling this.renderPortfolioSection with corresponding title and items */}
      </>
    );
  }
}

export default Portfolio;
