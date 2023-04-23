import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Carousel from "./components/Carousel";

function App() {
  const [opened, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!opened);
  };

  return (
    <>
      <header className={`primary-header ${opened ? "data-overlay" : ""}`}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#">
              <svg className="logo" width="146" height="24">
                <use xlinkHref="src/images/logo.svg#logo"></use>
              </svg>
            </a>
            <button
              onClick={handleNav}
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded={`${opened ? "true" : "false"}`}
            >
              <img
                className="icon-hamburger"
                src="src/images/icon-hamburger.svg"
                alt="open harmburger"
                aria-hidden="true"
              />
              <img
                className="icon-close"
                src="src/images/icon-close.svg"
                alt="close hamburger"
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav
              // style={{ display: `${opened ? "block" : "none"}` }}
              className={`primary-navigation ${opened ? "nav-opened" : ""}`}
              id="primary-navigation"
            >
              <ul aria-label="Primary" role="list" className="nav-list">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </nav>
            <button className="button | display-md-inline-flex display-sm-none">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow">
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view
                </p>
                <button className="button">Get Started</button>
              </div>
              <div>
                <img src="src/images/illustration-intro.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-2 | padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="text-center-sm-only margin-top-custom margin-bottom-700">
                <h2 className="fs-secondary-heading fw-bold">
                  What's different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul className="numbered-items | flow" role="list">
                  <li>
                    <div className="counter">
                      <h3 className="counter__title | fs-600 fw-bold">
                        Track company-wide progress
                      </h3>
                      <p className="counter__body" datawidth="wide">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight at
                        the bigger picture again.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="counter">
                      <h3 className="counter__title | fs-600 fw-bold flow-1em">
                        Advanced built-in reports
                      </h3>
                      <p className="counter__body" datawidth="wide">
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="counter">
                      <h3 className="counter__title | fs-600 fw-bold flow-1em">
                        Everything you need in one place
                      </h3>
                      <p className="counter__body" datawidth="wide">
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel | padding-block-700">
          <h2 className="fs-secondary-heading fw-bold">What they've said</h2>
          <Carousel />

          {/* Carousel goes here */}

          <button className="button">Get Started</button>
        </section>

        <section className="cta | padding-block-900 bg-accent-400 text-neutral-100">
          <div className="container">
            <div className="even-columns vertical-align-center">
              <div>
                <p className="cta-heading  fw-bold max-char-20">
                  Simplify how your team works today.
                </p>
              </div>
              <div className="justify-self-end-md">
                <button className="button" datatype="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="primary-footer__wrapper">
            <div className="primary-footer__logo-social">
              <a href="#" aria-label="home">
                <svg className="logo" width="146" height="24">
                  <use xlinkHref="src/images/logo.svg#logo"></use>
                </svg>
              </a>
              <ul className="social-list" role="list" aria-label="Social links">
                <li>
                  <a aria-label="facebook" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="src/images/social-icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="youtube" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="src/images/social-icons.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="src/images/social-icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="src/images/social-icons.svg#icon-pinterest"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="instagram" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="src/images/social-icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="primary-footer__nav">
              <nav className="footer-nav">
                <ul className="flow-1em" aria-label="footer" role="list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="primary-footer__form">
              <form action="">
                <input type="email" />
                <button className="button" data-shadow="none">
                  Go
                </button>
              </form>
              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
