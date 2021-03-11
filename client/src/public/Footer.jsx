function Footer() {
  return (
    <footer className="mt-5 p-0 container">
      <hr className="ml-0 mb-4 footer-left-hr" />

      <div className="row mr-3 mt-3 ml-3 justify-content-between">
        <div className="row col-12 col-lg-6">
          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6448636911296!2d72.86922481421352!3d19.123229555457122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994dccc4403%3A0x19f7e394d6f202cc!2sAdvisor%20Zaroori%20Hai!5e0!3m2!1sen!2sin!4v1608107585988!5m2!1sen!2sin"
              frameBorder="0"
              style={{ width: "100%" }}
              title="map"
            ></iframe>
          </div>
          <div className="col-12 col-lg-8 reach-us">
            <h4 className="font-weight-bold text-uppercase mb-4">
              <i className="ri-contacts-book-line"></i> Reach Out to us
            </h4>
            <ul className="list-unstyled details">
              <li>
                <i className="ri-mail-line mb-1"></i>info@advisorzaroorihai.com
              </li>
              <li>
                <i className="ri-phone-line mb-1"></i>+91 99200 56391/+91 79777
                46214
              </li>
              <li>
                <i className="ri-map-pin-line mb-1"></i> 203, 2nd Floor, Ackruti
                Star, MIDC Central Rd, Andheri East, Mumbai, Maharashtra 400093
              </li>
            </ul>
            <ul className="list-inline socials">
              <li className="list-inline-item">
                <a
                  href="https://twitter.com/azh_team"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/advisorzaroorihai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/AdvisorZarooriHai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-facebook-box-fill"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCzAmNWFV5ejxs04J5kw4tAA?view_as=subscriber"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row col-12 col-lg-6">
          <div className="col-12 col-lg-6 about-us">
            <h4 className="font-weight-bold text-uppercase mb-4">ABOUT US</h4>
            <ul className="list-unstyled details">
              <li className="mt-2">
                <a href="/page/about-us">Solutions</a>
              </li>
              <li className="mt-2">
                <a href="/page/about-us">Events</a>
              </li>
              <li className="mt-2">
                <a href="/page/about-us">Company</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 quick-links">
            <h4 className="font-weight-bold text-uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="list-unstyled details">
              <li className="mt-2">
                <a href="/login">Register - Advisor</a>
              </li>
              <li className="mt-2">
                <a href="/login">Register - Client</a>
              </li>
              <li className="mt-2">
                <a href="/page/terms-conditions">Terms &amp; Conditions</a>
              </li>
              <li className="mt-2">
                <a href="/page/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-right container">
        2020 ©advisorzaroorihai.com-all rights reserved- Terms of Service
      </div>
      <hr className="mr-0 footer-right-hr" />
    </footer>
  );
}

export default Footer;
