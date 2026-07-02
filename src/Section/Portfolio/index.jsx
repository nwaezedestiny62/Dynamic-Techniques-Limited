import React from 'react'
import "./Portfolio.css"
import { portfolio } from '../../data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="container">
        <div className="section__header">
            <h3 className="section__heading">
                Engineering Solutions, Powering Industries
            </h3>
            <p className="description">
                Explore our portfolio of excellence — where technical expertise meets 
                reliable execution. From industrial electrical systems and automation 
                to power infrastructure and control solutions, we deliver high-performance 
                results for Nigeria’s industries.
            </p>
        </div>
        
        <div className="portfolio__container">
               {portfolio.map((item, index) => (
                <div className="flex portfolio" key={index}>
                    <div className="image__container">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="details">
                        <h4 className="title">
                            {item.title}
                        </h4>
                        <p className="line__clamp__2 description">{item.description}</p>
                        <div className="date__category flex">
                            <p className="date">{item.date}</p>
                            <p>{item.category}</p>
                        </div>
                    </div>
                </div>
               ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio