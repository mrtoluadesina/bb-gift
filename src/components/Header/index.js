import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Header() {
  return (
    <header>
      <div className="top-header">
        <div className="mail-us">
          <a href="mailto:info@babybliss.com.ng">info@babybliss.com.ng</a>
        </div>
        <div className="auth-link">
          <ul>
            <li>
              <Link to="/">BABY REGISTRY</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "assets/images/logo.png"}
              alt="BabyBliss"
            />
          </a>
        </div>
        <nav>
          <li>
            <a href="/" className="btn green-bg">
              Contact
            </a>
          </li>
          <li>
            <a href="/" className="btn green-bg">
              Terms
            </a>
          </li>
          <li>
            <a href="/" className="btn green-bg">
              Store
            </a>
          </li>
        </nav>
        <div className="login">
          <Link to="/login" className="btn green-bg">
            COPORATE LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}
