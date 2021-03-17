import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
function HowItWorks() {
  return (
    <section id="how-it-works" className="text-black">
      <Container>
        <h1>
          I WANT AN ADVISOR FOR
          <hr className="m-0 mb-5" />
        </h1>
        {/* <h1 className="section-center-title">I WANT AN ADVISOR FOR</h1> */}
        <div className="wantAdvisors">
          <div className="wa" id="wa-mf">
            <Link to="/page/mutual-fund">MUTUAL FUNDS</Link>
          </div>
          <div className="wa" id="wa-insurance">
            <Link to="/page/insurance">INSURANCE</Link>
          </div>
          <div className="wa" id="wa-loans">
            <Link to="/page/loans">LOANS</Link>
          </div>
          <div className="wa" id="wa-pms">
            <Link to="/page/pms">
              <span>PORTFOLIO</span>
              <span>MANAGEMENT</span>
              <span>SERVICES</span>
            </Link>
          </div>
          <div className="wa" id="wa-fp">
            <Link to="/advisors">
              <span>FINANCIAL</span>
              <span>PLANNING</span>
            </Link>
          </div>
          <div className="wa" id="wa-ep">
            <Link to="/advisors">
              <span>ESTATE</span>
              <span>PLANNING</span>
            </Link>
          </div>
          <div className="wa" id="wa-esm">
            <Link to="/advisors">
              <span>EQUITY/STOCK</span>
              <span>MARKET</span>
            </Link>
          </div>
          <Image
            src={process.env.PUBLIC_URL + "assets/img/wantadvisor.png"}
            fluid
          />
        </div>
      </Container>
      <div className="mt-4 get-in-call">
        <Link to="/login">
          I’m a little confused and would like go on a call{" "}
        </Link>
      </div>
    </section>
  );
}

export default HowItWorks;
