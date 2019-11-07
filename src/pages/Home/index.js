import React from 'react';
import {faq} from '../../utils/faq';
import './index.scss';
import Giftcard from '../../components/Giftcard';

function Home(props) {
  return (
    <>
    <section className="app">
      <div className="app-info">
        <h1>
          Give your loved ones the <span>perfect gift</span> that suits their
          need
        </h1>
        <p>
          <span>BabyBliss</span> voucher allows bearer shop all
          <span> babybliss</span> items up to the voucher's worth
        </p>
      </div>
      <Giftcard />
    </section>
    <section className="faq">
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="faq-content">
        {faq.map((item, index) => (
          <div key={index} className="single-faq">
            <h2>
              Question {index + 1}: {item.question}
            </h2>
            <p>Answer: {item.answer}</p>
          </div>
        ))}
      </div>
      <a href="/" className="btn orange-bg single-btn">
        Buy Voucher
      </a>
    </section>
    <section className="testimonials">
      <h1 className="title">Testimonials</h1>
    </section>
    <section className="about">
      <h1 className="title">About BabyBliss</h1>
      <p>BabyBliss is Nigeria’s #1 platform for expectant and new moms</p>

      <div className="locations">
        <div className="single-location">
          <img src="./assets/images/ikate.png" alt="location" />
          <h3>Ikate Store</h3>
          <p>Oba Yekini Junction Lekki Epe Expressway, Lekki, Lagos</p>
        </div>
        <div className="single-location">
          <img src="./assets/images/anthony.png" alt="location" />
          <h3>Anthony Store</h3>
          <p>
            5 Oseni street, after Newcastle Hotel Pedestrian bridge
            (Gbagada-Oshodi Expressway) Anthony Oke, Lagos.
          </p>
        </div>
        <div className="single-location">
          <img src="./assets/images/lekki.png" alt="location" />
          <h3>Chevron Store</h3>
          <p>
            Folashade Jacobs street, Opposite Orchid Hotel, Dreamworld Africana
            road, After Chevron, Lekki.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <h3>Promo Ends:</h3>
        <p>12 noon on Saturday, <br />14th April, 2020</p>
        <a href="/" className="btn orange-bg single-btn">I Want In</a>
      </div>
    </section>
  </>
  );
}

export default Home;