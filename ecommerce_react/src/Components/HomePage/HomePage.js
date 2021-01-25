import React from 'react'
import Hero from './Hero/Hero'

const HomePage = () => {

    return(
    <main>
        <Hero />

      <section className="homeExploreSection">
        <h6>h6</h6>
        <div className="SliderDiv">
            <img src='./Images/homeComputer.png' alt="NZXT computer" className="homeExploreImage"/>
            <img src='./Images/homeComputer2.png' alt="NZXT computer" className="homeExploreImage"/>
            <img src='./Images/homeComputer3.png' alt="NZXT computer" className="homeExploreImage"/>

            {/* <button onClick={handleButtonClick(-1)}>&#10094;</button>
            <button onClick={handleButtonClick(1)}>&#10095;</button> */}
        </div>
        <p className="homeExploreP">We have a variaty of custom build computers for those who are looking to get into gaming. These computers are guaranteed provide you the needs to start gaming all different types of games, from triple a games to indie games.</p>
        <a href="Products.html" class="homeExploreAnchor homeExploreButton"><div><p>Explore More!</p></div></a>
      </section>

      <section className="homeContactSection">
          <h6>h6</h6>
          <p className="homeContactP">Do you have any questions?</p>
          <a href="Contact.html" className="homeContactAnchor homeContactButton"><span>Contact Us!!</span></a>
          <img src='./Images/heroContact.jpg' alt="contact us image" className="homeContactImage"/>
      </section>
    </main>
    )
};

export default HomePage