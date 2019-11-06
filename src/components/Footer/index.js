import React from "react";
import './index.scss';

export default function Footer() {
  return (
    <footer>
      <p>
        BabyBliss is a fast growing mom and baby business offering the best and
        largest collection of baby products for infants to toddlers from trusted
        local & international brands. Office: Oseni Street, Just Before Anthony
        Bus Stop, Gbagada – Oshodi Expressway, Lagos, Nigeria. | Opposite Orchid
        Hotel, Dreamworld Africana road, After Chevron, Lekki. | Oba Yekini
        Junction Lekki Epe Express way, Lekki, Lagos. | 48, Adeniran Ogunsayan
        Street, Surulere, Lagos.
      </p>
      <p>
        Phone: <a href="tel:08118888377">+234(0)-811-888-8377</a> | Email:{" "}
        <a href="mailto:info@babybliss.com.ng">info@babybliss.com.ng</a>
      </p>
      <p>
        <a href="/">About Babybliss</a> | <a href="/">Delivery Information</a> |{" "}
        <a href="/">Return Policy</a> | <a href="/">Privacy Policy</a>
      </p>
      <img src="./assets/images/card-pay.png" alt="payment icons" />
      <p className="copyright">Copyright © 2018 Babybliss. All rights reserved.</p>
    </footer>
  );
}
