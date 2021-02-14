/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";

function Knowledge() {
  return (
    <Fragment>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Knowledge Base</h1>
          </div>
        </section>
      </div>
      <div className="container mt-5">
        <div className="row knowledge_base">
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <p>Types of alternative investments</p>
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-1"
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-1"
                            aria-expanded="true"
                            aria-controls="collapse-alt-i-1"
                          >
                            Hedge Funds
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-1"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-1"
                      >
                        <div className="panel-body">
                          Hedge funds are alternative investments using pooled
                          funds that employ different strategies to earn active
                          return. Hedge funds may be aggressively managed or
                          make use of derivatives and leverage in both domestic
                          and international markets with the goal of generating
                          high returns.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-2"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-2"
                            aria-expanded="false"
                            aria-controls="collapse-alt-i-2"
                          >
                            Private Equity & Venture Capital
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-2"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-2"
                      >
                        <div className="panel-body">
                          Private equity is an alternative investment class and
                          consists of capital that is not listed on a public
                          exchange. Private equity is composed of funds and
                          investors that directly invest in private companies,
                          or that engage in buyouts of public companies,
                          resulting in the delisting of public equity.
                          Institutional and retail investors provide the capital
                          for private equity, and the capital can be utilized to
                          fund new technology, make acquisitions, expand working
                          capital, and to bolster and solidify a balance sheet.
                          Venture capital is a form of private equity financing
                          that is provided by venture capital firms or funds to
                          startups, early-stage, and emerging companies that
                          have been deemed to have high growth potential or
                          which have demonstrated high growth.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-3"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-3"
                            aria-expanded="false"
                            aria-controls="collapse-alt-i-3"
                          >
                            Real Estate
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-3"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-3"
                      >
                        <div className="panel-body">
                          Real estate investing involves the purchase,
                          ownership, management, rental and/or sale of real
                          estate for profit. Improvement of realty property as
                          part of a real estate investment strategy is generally
                          considered to be a sub-specialty of real estate
                          investing called real estate development. Once an
                          investment property has been located, and preliminary
                          due diligence (investigation and verification of the
                          condition and status of the property) completed, the
                          investor will have to negotiate a sale price and sale
                          terms with the seller, then execute a contract for
                          sale. Most investors employ real estate agents and
                          real estate attorneys to assist with the acquisition
                          process, as it can be quite complex and improperly
                          executed transactions can be very costly. During the
                          acquisition of a property, an investor will typically
                          make a formal offer to buy including payment of
                          "earnest money" to the seller at the start of
                          negotiation to reserve the investor's rights to
                          complete the transaction if price and terms can be
                          satisfactorily negotiated.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-4"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-4"
                            aria-expanded="false"
                            aria-controls="collapse-alt-i-4"
                          >
                            Start-Ups
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-4"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-4"
                      >
                        <div className="panel-body">
                          Startup capital is a financial investment in the
                          development of a new company or product. The term is
                          often used interchangeably with seed money, although
                          seed money is often a more modest sum that is used to
                          create a business plan or a prototype that will pass
                          muster with investors of startup capital. Startup
                          capital may be provided by venture capitalists, angel
                          investors, or traditional banks. In any case, the
                          entrepreneur who seeks startup capital generally has
                          to create a solid business plan or build a prototype
                          in order to sell the idea.
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Benefits of alternative investments</p>
                  <div
                    className="panel-group"
                    id="accordion2"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-5"
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-5"
                            aria-expanded="true"
                            aria-controls="collapse-alt-i-5"
                          >
                            Portfolio Diversification
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-5"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-5"
                      >
                        <div className="panel-body">
                          With low correlation to traditional asset classes,
                          alternatives can be a beneficial way to diversify your
                          portfolio
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-6"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-6"
                            aria-expanded="false"
                            aria-controls="collapse-alt-i-6"
                          >
                            Enhance Returns
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-6"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-6"
                      >
                        <div className="panel-body">
                          Alternatives can grow the risk and return profile of a
                          portfolio and grow total return through access to a
                          broader set of investments and strategies.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-alt-i-7"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse-alt-i-7"
                            aria-expanded="false"
                            aria-controls="collapse-alt-i-7"
                          >
                            Increase Income
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse-alt-i-7"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-alt-i-7"
                      >
                        <div className="panel-body">
                          Alternatives may offer higher yields than traditional
                          investments—especially during periods of low interest
                          rates.
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    A financial asset category which does not fall into one of
                    the conventional investment categories
                  </p>
                  <p>Provide hedge against inflation</p>
                  <p>
                    Provides higher rewards and also portfolio diversification
                  </p>
                </div>
              </div>
            </div>
            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_1"
                    >
                      Alternative investments
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_alternative.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_2"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div
                    className="panel-group"
                    id="accordion10"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading10">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion10"
                            href="#collapse10"
                            aria-expanded="true"
                            aria-controls="collapse10"
                            className="collapsed"
                          >
                            <span>Will writing</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse10"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading10"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              Guarantee a protected life to your beloved ones
                              after death.
                            </li>
                            <li>
                              Protect the property by creating a life interest.
                            </li>
                            <li>Joint will, mutual will, conditional will.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading11">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion10"
                            href="#collapse11"
                            aria-expanded="true"
                            aria-controls="collapse11"
                            className="collapsed"
                          >
                            <span>Private family trusts</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse11"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading11"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              A tool to manage ones wealth during lifetime and
                              pass the same to the beneficiaries.
                            </li>
                            <li>
                              Trust can take care of the monthly payments and
                              safeguard the property.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading12">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion10"
                            href="#collapse12"
                            aria-expanded="true"
                            aria-controls="collapse12"
                            className="collapsed"
                          >
                            <span>Asset protection trusts</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse12"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading12"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>Aims at preserving your assets.</li>
                            <li>
                              The trustees appointed are responsible for the
                              protection and confer benefits on the
                              beneficiaries as directed by the settlor.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Benefits of estate planning</h2>
                  <ul>
                    <li>Provide for your family.</li>
                    <li>
                      Keep your children out of child protective services.
                    </li>
                    <li>
                      Minimize your expenses like attorney costs and court fees.
                    </li>
                    <li>Save your family from difficult decisions.</li>
                    <li>Reduce taxes.</li>
                    <li>Make your retirement easier.</li>
                    <li>Plan your incapacity.</li>
                    <li>Make sure your business runs smoothly.</li>
                    <li>
                      Retirement planning relates to the time you will have once
                      you reach a certain age and exit the work force.
                    </li>
                    <li>
                      Estate planning relates to a time that you either become
                      incapacited or deceased.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_2"
                    >
                      Estate and retirement planning
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_estate.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_3"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_3"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <p>Categories of fixed income instruments</p>
                  <div
                    className="panel-group"
                    id="accordion20"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading20">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion20"
                            href="#collapse20"
                            aria-expanded="true"
                            aria-controls="collapse20"
                            className="collapsed"
                          >
                            <span>Bonds</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse20"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading20"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>Loans made by investors to an issuer</li>
                            <li>
                              Promise of repayment of the principal amount at
                              the established maturity date
                            </li>
                            <li>
                              Issued by governments or corporations that are
                              looking for ways to finance projects or
                              operations.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading21">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion20"
                            href="#collapse21"
                            aria-expanded="true"
                            aria-controls="collapse21"
                            className="collapsed"
                          >
                            <span>Money market instruments</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse21"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading21"
                      >
                        <div className="panel-body">
                          Treasury bills, certificate of deposits, commercial
                          papers offered as investment avenues
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading22">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion20"
                            href="#collapse22"
                            aria-expanded="true"
                            aria-controls="collapse22"
                            className="collapsed"
                          >
                            <span>Fixed deposits</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse22"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading22"
                      >
                        <div className="panel-body">
                          One of the most secure forms of investment with a
                          fixed interest rate.
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Benefits of investing in fixed income products</h2>
                  <ul>
                    <li>Stable returns</li>
                    <li>Safety of your investments</li>
                    <li>Portfolio diversification</li>
                    <li>Priority during liquidation</li>
                    <li>
                      Debt instruments that pay fixed amount of interest – in
                      form of coupon payments.
                    </li>
                    <li>Interest payments are typically made semiannually.</li>
                    <li>
                      The principal invested returns to the investor at
                      maturity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_3"
                    >
                      Fixed Income Instruments
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a
                    className="e-learning-a"
                    data-toggle="modal"
                    data-target="#knowledge_3"
                  >
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_fixed_income.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_4"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div
                    className="panel-group"
                    id="accordion30"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading30">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion30"
                            href="#collapse30"
                            aria-expanded="true"
                            aria-controls="collapse30"
                            className="collapsed"
                          >
                            <span>Life insurance</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse30"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading30"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              Taken primarily to secure oneself and/or one’s
                              family
                            </li>
                            <li>
                              Provides financial security in the event of death
                              of an earning member of the family
                            </li>
                            <li>
                              Protects you against cost of accidents, sickness,
                              disability, death
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading31">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion30"
                            href="#collapse31"
                            aria-expanded="true"
                            aria-controls="collapse31"
                            className="collapsed"
                          >
                            <span>Term plan</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse31"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading31"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              Provides coverage for a defined period of tim.
                            </li>
                            <li>
                              If the insured expires during the term of the
                              policy then death benefit is payable to nominee
                            </li>
                            <li>Available in the range of 10-30 years term</li>
                            <li>Relatively cheaper than endowment policies</li>
                            <li>
                              Benefits can be insured only in the event of the
                              death of the insured
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading32">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion30"
                            href="#collapse32"
                            aria-expanded="true"
                            aria-controls="collapse32"
                            className="collapsed"
                          >
                            <span>Health insurance</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse32"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading32"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              One should be covered with adequate health
                              insurance to meet the unexpected medical costs
                              which are also rising at a fast pace
                            </li>
                            <li>
                              By selecting a health insurance policy, you can
                              ensure your finances never get in the way of your
                              well-being
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading33">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion30"
                            href="#collapse33"
                            aria-expanded="true"
                            aria-controls="collapse33"
                            className="collapsed"
                          >
                            <span>Endowment plan</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse33"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading33"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              Pays the full sum assured to the beneficiaries if
                              the insured dies during the policy term
                            </li>
                            <li>
                              Pays the full sum assured to the policy holder on
                              maturity of the policy if he survives the term
                            </li>
                            <li>
                              Child education plan, retirement plan, wealth plan
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading34">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion30"
                            href="#collapse34"
                            aria-expanded="true"
                            aria-controls="collapse34"
                            className="collapsed"
                          >
                            <span>Money back policy</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse34"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading34"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>Insured gets a percentage of sum assured</li>
                            <li>Its an endowment plan with liquidity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Benefits of insurance</h2>
                  <ul>
                    <li>
                      Death benefits : enables individuals to protect themselves
                      and their families, in case of any unfortunate happening
                      in the life of the insurer
                    </li>
                    <li>
                      Certain whole life insurance policies offer two-pronged
                      benefits of both insurance and investment. While one half
                      of your premium is paid toward insurance, the other half
                      is invested in equity, debt or combinations of both
                    </li>
                    <li>
                      You get the best of both worlds with a protective covering
                      as well as high returns on your investments.Life insurance
                      policies can also double as a savings instrument by
                      offering maturity benefits. If the insured survives the
                      policy term and no claims have been made, the total
                      premiums paid are returned at the time of maturity of the
                      policy
                    </li>
                    <li>
                      Tax benefits under sec 80C. - premium paid for your life
                      insurance policy is eligible to attain a maximum tax
                      deduction for up to Rs. 1.5 lakh
                    </li>
                    <li>
                      Life insurance is a risk minimization and protection tool
                      that can help the insured and their dependants in multiple
                      ways with dealing with a variety of events
                    </li>
                    <li>
                      Insurance is a policy representing a contract in which an
                      individual or entity receives protection from the
                      insurance company against financial losses
                    </li>
                    <li>Offers financial protection against adverisities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_4"
                    >
                      Insurance
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_insurance.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_5"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_5"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <ul>
                    <li>
                      Investment banking is a specific division of banking
                      related to the creation of capital for other companies,
                      governments and other entities. Investment banks
                      underwrite new debt and equity securities for all types of
                      corporations, aid in the sale of securities, and help to
                      facilitate mergers and acquisitions, reorganizations and
                      broker trades for both institutions and private investors.
                      Investment banks also provide guidance to issuers
                      regarding the issue and placement of stock.
                    </li>
                    <li>
                      Many large investment banking systems are affiliated with
                      or subsidiaries of larger banking institutions, and many
                      have become household names, the largest being Goldman
                      Sachs, Morgan Stanley, JPMorgan Chase, Bank of America
                      Merrill Lynch and Deutsche Bank. Broadly speaking,
                      investment banks assist in large, complicated financial
                      transactions. They may provide advice on how much a
                      company is worth and how best to structure a deal if the
                      investment banker’s client is considering an acquisition,
                      merger or sale. It may also include the issuing of
                      securities as a means of raising money for the client
                      groups, and creating the documentation for the Securities
                      and Exchange Commission necessary for a company to go
                      public.
                    </li>
                    <li>
                      Investment banks employ investment bankers who help
                      corporations, governments and other groups plan and manage
                      large projects, saving their client time and money by
                      identifying risks associated with the project before the
                      client moves forward. In theory, investment bankers are
                      experts in their field who have their finger on the pulse
                      of the current investing climate, so businesses and
                      institutions turn to investment banks for advice on how
                      best to plan their development, as investment bankers can
                      tailor their recommendations to the present state of
                      economic affairs.
                    </li>
                    <li>
                      Essentially, investment banks serve as middlemen between a
                      company and investors when the company wants to issue
                      stock or bonds. The investment bank assists with pricing
                      financial instruments to maximize revenue and with
                      navigating regulatory requirements. Often, when a company
                      holds its initial public offering (IPO), an investment
                      bank will buy all or much of that company’s shares
                      directly from the company. Subsequently, as a proxy for
                      the company holding the IPO, the investment bank will sell
                      the shares on the market. This makes things much easier
                      for the company itself, as they effectively contract out
                      the IPO to the investment bank.
                    </li>
                    <li>
                      Moreover, the investment bank stands to make a profit, as
                      it will generally price its shares at a markup from the
                      price it initially paid. In doing so, it also takes on a
                      substantial amount of risk. Though experienced analysts
                      use their expertise to accurately price the stock as best
                      they can, the investment bank can lose money on the deal
                      if it turns out it has overvalued the stock, as in this
                      case it will often have to sell the stock for less than it
                      initially paid for it.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_5"
                    >
                      Investment banking
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_investment.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_6"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_6"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <p>Common categories of mutual funds</p>
                  <div
                    className="panel-group"
                    id="accordion40"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading40">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion40"
                            href="#collapse40"
                            aria-expanded="true"
                            aria-controls="collapse40"
                            className="collapsed"
                          >
                            <span>Equity funds</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse40"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading40"
                      >
                        <div className="panel-body">
                          Invest only in equity stocks and other equity
                          instruments.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading41">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion40"
                            href="#collapse41"
                            aria-expanded="true"
                            aria-controls="collapse41"
                            className="collapsed"
                          >
                            <span>Debt funds</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse41"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading41"
                      >
                        <div className="panel-body">
                          Invest only in fixed Income instruments.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading42">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion40"
                            href="#collapse42"
                            aria-expanded="true"
                            aria-controls="collapse42"
                            className="collapsed"
                          >
                            <span>Money market funds</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse42"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading42"
                      >
                        <div className="panel-body">
                          Invest in short term money market instruments.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading43">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion40"
                            href="#collapse43"
                            aria-expanded="true"
                            aria-controls="collapse43"
                            className="collapsed"
                          >
                            <span>Hybrid funds</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse43"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading43"
                      >
                        <div className="panel-body">
                          Divide investments between equity and debt.
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Benefits of investing in mutual funds</h2>
                  <ul>
                    <li>Gets access to professional money management.</li>
                    <li>
                      Helps to create diversified portfolio of investments
                    </li>
                  </ul>
                  <p>Ways to invest in a mutual fund</p>
                  <div
                    className="panel-group"
                    id="accordion50"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading50">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion50"
                            href="#collapse50"
                            aria-expanded="true"
                            aria-controls="collapse50"
                            className="collapsed"
                          >
                            <span>Systematic investment plan (SIP)</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse50"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading50"
                      >
                        <div className="panel-body">
                          Allows investor to invest monthly in a mutual fund
                          scheme.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading51">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion50"
                            href="#collapse51"
                            aria-expanded="true"
                            aria-controls="collapse51"
                            className="collapsed"
                          >
                            <span>Systematic withdrawal plan (SWP)</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse51"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading51"
                      >
                        <div className="panel-body">
                          Provides investors with a specific amount of payout at
                          a pre-determined time intervals, like monthly,
                          quarterly, half-yearly or annually.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading52">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion50"
                            href="#collapse52"
                            aria-expanded="true"
                            aria-controls="collapse52"
                            className="collapsed"
                          >
                            <span>Systematic transfer plan (STP)</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse52"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading52"
                      >
                        <div className="panel-body">
                          Periodically transfers amount from one scheme to
                          another.
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Open-ended professionally managed investment fund that
                      pools money from many Investors.
                    </li>
                    <li>
                      Covering from broad market indexes to focusing on specific
                      sectors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_6"
                    >
                      Mutual funds
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_mututal_funds.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_7"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_7"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <p>Key elements</p>
                  <div
                    className="panel-group"
                    id="accordion60"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading60">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion60"
                            href="#collapse60"
                            aria-expanded="true"
                            aria-controls="collapse60"
                            className="collapsed"
                          >
                            <span>Asset allocation</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse60"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading60"
                      >
                        <div className="panel-body">
                          The key to effective portfolio management is the long
                          term mix of asset. Asset allocation is based on the
                          understanding that different types of assets do not
                          move in concert, and some are more volatile than
                          others. A mix of assets provides balance and protects
                          against risk. Investors with a more aggressive profile
                          weight their portfolios toward more volatile
                          investments such as growth stocks. Investors with a
                          conservative profile weight their portfolios toward
                          stabler investments such as bonds and blue-chip stocks
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading61">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion60"
                            href="#collapse61"
                            aria-expanded="true"
                            aria-controls="collapse61"
                            className="collapsed"
                          >
                            <span>Diversification</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse61"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading61"
                      >
                        <div className="panel-body">
                          The only certainty in investing is that it is
                          impossible to consistently predict winners and losers.
                          The prudent approach is to create a basket of
                          investments that provides broad exposure within an
                          asset class. Diversification is spreading risk and
                          reward within an asset class. Because it is difficult
                          to know which subset of an asset class or sector is
                          likely to outperform another, diversification seeks to
                          capture the returns of all of the sectors over time
                          while reducing volatility at any given time.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading62">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion60"
                            href="#collapse62"
                            aria-expanded="true"
                            aria-controls="collapse62"
                            className="collapsed"
                          >
                            <span>Rebalancing</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse62"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading62"
                      >
                        <div className="panel-body">
                          Rebalancing is used to return a portfolio to its
                          original target allocation at regular intervals,
                          usually annually. This is done to reinstate the
                          original asset mix when the movements of the markets
                          force it out of kilter. For example, a portfolio that
                          starts out with a 70% equity and 30% fixed-income
                          allocation could, after an extended market rally,
                          shift to an 80/20 allocation. The investor has made a
                          good profit, but the portfolio now has more risk than
                          the investor can tolerate
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading63">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion60"
                            href="#collapse63"
                            aria-expanded="true"
                            aria-controls="collapse63"
                            className="collapsed"
                          >
                            <span>Active portfolio management</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse63"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading63"
                      >
                        <div className="panel-body">
                          Investors who implement an active management approach
                          use fund managers or brokers to buy and sell stocks in
                          an attempt to outperform a specific index, such as the
                          Standard & Poor's 500 Index or the Russell 1000 Index.
                          An actively managed investment fund has an individual
                          portfolio manager, co-managers, or a team of managers
                          actively making investment decisions for the fund. The
                          success of an actively managed fund depends on a
                          combination of in-depth research, market forecasting,
                          and the expertise of the portfolio manager or
                          management team. Portfolio managers engaged in active
                          investing pay close attention to market trends, shifts
                          in the economy, changes to the political landscape,
                          and news that affects companies. This data is used to
                          time the purchase or sale of investments in an effort
                          to take advantage of irregularities. Active managers
                          claim that these processes will boost the potential
                          for returns higher than those achieved by simply
                          mimicking the holdings on a particular index.
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Portfolio management is an art and science of selecting
                      and overseeing a group of investments that meet long term
                      financial objectives and risk tolerance of a client
                    </li>
                    <li>
                      It requires the ability of strength and weaknesses ,
                      opportunities and threats across the full spectrum of
                      investments
                    </li>
                    <li>
                      The choices involve trade –offs, from debt versus equity
                      to domestic versus international and growth versus safety
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_7"
                    >
                      Portfolio management service
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_portfolio.png"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pbDiv">
            <div
              className="modal fade"
              id="knowledge_8"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="knowledge_8"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <h2>What is Goods and Service Tax (GST)?</h2>
                  <p>
                    It is a destination based tax on consumption of goods and
                    services. It is proposed to be levied at all stages right
                    from manufacture up to final consumption with credit of
                    taxes paid at previous stages available as setoff.
                  </p>
                  <h2>What are GST rate slabs?</h2>
                  <ul>
                    <li>
                      The Goods and Services Tax (GST) will be levied at
                      multiple rates ranging from 0 per cent to 28 per cent. GST
                      Council finalised a four-tier GST tax structure of 5%,
                      12%, 18% and 28%, with lower rates for essential items and
                      the highest for luxury and de-merits goods that would also
                      attract an additional cess.
                    </li>
                    <li>
                      Service Tax will go up from 15% to 18%. The services being
                      taxed at lower rates, owing to the provision of abatement,
                      such as train tickets, will fall in the lower slabs.
                    </li>
                    <li>
                      In order to control inflation, essential items including
                      food, which presently constitute roughly half of the
                      consumer inflation basket, will be taxed at zero rate.
                    </li>
                    <li>
                      The lowest rate of 5% would be for common use items. There
                      would be two standard rates of 12 per cent and 18 per
                      cent, which would fall on the bulk of the goods and
                      services. This includes fast-moving consumer goods.
                    </li>
                    <li>
                      Highest tax slab will be applicable to items which are
                      currently taxed at 30-31% (excise duty plus VAT).
                    </li>
                    <li>
                      Ultra luxuries, demerit and sin goods (like tobacco and
                      aerated drinks), will attract a cess for a period of five
                      years on top of the 28 per cent GST.
                    </li>
                    <li>
                      The collection from this cess as well as that of the clean
                      energy cess would create a revenue pool which would be
                      used for compensating states for any loss of revenue
                      during the first five years of implementation of GST.
                    </li>
                    <li>
                      Finance minister said that the cess would be lapsable
                      after five years.
                    </li>
                    <li>
                      The structure to agreed is a compromise to accommodate
                      demand for highest tax rate of 40% by states like Kerala.
                    </li>
                    <li>
                      While the Centre proposed to levy a 4% GST on gold but the
                      final decision on this was put off. During a press
                      conference, finance minister Mr. Jaitley said, GST rate on
                      gold will be finalised after the fitting to the approved
                      rates structure of all items is completed and there is
                      some idea of revenue projections.
                    </li>
                    <li>
                      The principle for determining the rate on each item will
                      be to levy and collect the GST at the rate slab closest to
                      the current tax incidence on it.
                    </li>
                    <li>
                      The GST will subsume the multitude of cesses currently in
                      place, including the Swachh Bharat Cess, the Krishi Kalyan
                      Cess and the Education Cess. Only the Clean Environment
                      Cess is being retained, revenues from which will also fund
                      the compensations
                    </li>
                  </ul>
                  <p>
                    Which of the existing taxes are proposed to be subsumed
                    under GST?
                  </p>
                  <div
                    className="panel-group"
                    id="accordion70"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading70">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion70"
                            href="#collapse70"
                            aria-expanded="true"
                            aria-controls="collapse70"
                            className="collapsed"
                          >
                            <span>
                              Taxes currently levied and collected by the
                              Centre:
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse70"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading70"
                      >
                        <div className="panel-body">
                          a. Central Excise duty b. Duties of Excise (Medicinal
                          and Toilet Preparations) c. Additional Duties of
                          Excise (Goods of Special Importance) d. Additional
                          Duties of Excise (Textiles and Textile Products) e.
                          Additional Duties of Customs (commonly known as CVD)
                          f. Special Additional Duty of Customs (SAD) g. Service
                          Tax h. Central Surcharges and Cesses so far as they
                          relate to supply of goods and services
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading71">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion70"
                            href="#collapse71"
                            aria-expanded="true"
                            aria-controls="collapse71"
                            className="collapsed"
                          >
                            <span>
                              State taxes that would be subsumed under the GST
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse71"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading71"
                      >
                        <div className="panel-body">
                          a. State VAT b. Central Sales Tax c. Luxury Tax d.
                          Entry Tax (all forms) e. Entertainment and Amusement
                          Tax (except when levied by the local bodies) f. Taxes
                          on advertisements g. Purchase Tax h. Taxes on
                          lotteries, betting and gambling i. State Surcharges
                          and Cesses so far as they relate to supply of goods
                          and services
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Key elements</p>
                  <div
                    className="panel-group"
                    id="accordion80"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading80">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse80"
                            aria-expanded="true"
                            aria-controls="collapse80"
                            className="collapsed"
                          >
                            <span>
                              What type of GST is proposed to be implemented?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse80"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading80"
                      >
                        <div className="panel-body">
                          It would be a dual GST with the Centre and States
                          simultaneously levying it on a common tax base. The
                          GST to be levied by the Centre on intra-State supply
                          of goods and / or services would be called the Central
                          GST (CGST) and that to be levied by the States would
                          be called the State GST (SGST). Similarly Integrated
                          GST (IGST) will be levied and administered by Centre
                          on every inter-state supply of goods and services.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading81">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse81"
                            aria-expanded="true"
                            aria-controls="collapse81"
                            className="collapsed"
                          >
                            <span>
                              Which authority will levy and administer GST?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse81"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading81"
                      >
                        <div className="panel-body">
                          Centre will levy and administer CGST & IGST while
                          respective states will levy and administer SGST.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading82">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse82"
                            aria-expanded="true"
                            aria-controls="collapse82"
                            className="collapsed"
                          >
                            <span>
                              How a particular transaction of goods and services
                              would be taxed simultaneously under Central GST
                              (CGST) and State GST (SGST)?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse82"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading82"
                      >
                        <div className="panel-body">
                          The Central GST and the State GST would be levied
                          simultaneously on every transaction of supply of goods
                          and services except the exempted goods and services,
                          goods which are outside the purview of GST and the
                          transactions which are below the prescribed threshold
                          limits. Further, 8 both would be levied on the same
                          price or value unlike State VAT which is levied on the
                          value of the goods inclusive of CENVAT. While the
                          location of the supplier and the recipient within the
                          country is immaterial for the purpose of CGST, SGST
                          would be chargeable only when the supplier and the
                          recipient are both located within the State.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading83">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse83"
                            aria-expanded="true"
                            aria-controls="collapse83"
                            className="collapsed"
                          >
                            <span>
                              What are the benefits which the Country will
                              accrue from GST?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse83"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading83"
                      >
                        <div className="panel-body">
                          Introduction of GST would be a very significant step
                          in the field of indirect tax reforms in India. By
                          amalgamating a large number of Central and State taxes
                          into a single tax and allowing set-off of prior-stage
                          taxes, it would mitigate the ill effects of cascading
                          and pave the way for a common national market. For the
                          consumers, the biggest gain would be in terms of a
                          reduction in the overall tax burden on goods, which is
                          currently estimated at 25%-30%. Introduction of GST
                          would also make our products competitive in the
                          domestic and international markets. Studies show that
                          this would instantly spur economic growth. There may
                          also be revenue gain for the Centre and the States due
                          to widening of the tax base, increase in trade volumes
                          and improved 10 tax compliance. Last but not the
                          least, this tax, because of its transparent character,
                          would be easier to administer.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading84">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse84"
                            aria-expanded="true"
                            aria-controls="collapse84"
                            className="collapsed"
                          >
                            <span>What is IGST?</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse84"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading84"
                      >
                        <div className="panel-body">
                          Under the GST regime, an Integrated GST (IGST) would
                          be levied and collected by the Centre on inter-State
                          supply of goods and services. Under Article 269A of
                          the Constitution, the GST on supplies in the course of
                          inter-State trade or commerce shall be levied and
                          collected by the Government of India and such tax
                          shall be apportioned between the Union and the States
                          in the manner as may be provided by Parliament by law
                          on the recommendations of the Goods and Services Tax
                          Council.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading85">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse85"
                            aria-expanded="true"
                            aria-controls="collapse85"
                            className="collapsed"
                          >
                            <span>
                              Who is liable to pay GST under the proposed GST
                              regime?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse85"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading85"
                      >
                        <div className="panel-body">
                          Under the GST regime, tax is payable by the taxable
                          person on the supply of goods and/or services.
                          Liability to pay tax arises when the taxable person
                          crosses the threshold exemption, i.e. Rs.10 lakhs (Rs.
                          5 lakhs for NE States) except in certain specified
                          cases where the taxable person is liable to pay GST
                          even though he has not crossed the threshold limit.
                          The CGST / SGST is payable on all intra-State supply
                          of goods and/or services and IGST is payable on all
                          inter- State supply of goods and/or services. The CGST
                          /SGST and IGST are payable at the rates specified in
                          the Schedules to the respective Acts.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading86">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse86"
                            aria-expanded="true"
                            aria-controls="collapse86"
                            className="collapsed"
                          >
                            <span>
                              What are the benefits available to small tax
                              payers under the GST regime?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse86"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading86"
                      >
                        <div className="panel-body">
                          Tax payers with an aggregate turnover in a financial
                          year up to [Rs.10 lakhs] would be exempt from
                          tax.[Aggregate turnover shall include the aggregate
                          value of all taxable and non-taxable supplies, exempt
                          supplies and exports of goods and/or services and
                          exclude taxes viz.GST.] Aggregate turnover shall be
                          computed on all India basis. For NE States and Sikkim,
                          the exemption threshold shall be [Rs. 5 lakhs]. All
                          taxpayers eligible for threshold exemption will have
                          the option of paying tax with input tax credit (ITC)
                          benefits. Tax payers making inter-State supplies or
                          paying tax on reverse charge basis shall not be
                          eligible for threshold exemption.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading87">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse87"
                            aria-expanded="true"
                            aria-controls="collapse87"
                            className="collapsed"
                          >
                            <span>How will imports be taxed under GST?</span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse87"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading87"
                      >
                        <div className="panel-body">
                          Imports of Goods and Services will be treated as
                          inter-state supplies and IGST will be levied on import
                          of goods and services into the country. The incidence
                          of tax will follow the destination principle and the
                          tax revenue in case of SGST will accrue to the State
                          where the imported goods and services are consumed.
                          Full and complete set-off 14 will be available on the
                          GST paid on import on goods and services.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading88">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse88"
                            aria-expanded="true"
                            aria-controls="collapse88"
                            className="collapsed"
                          >
                            <span>
                              What is the scope of composition scheme under GST?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse88"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading88"
                      >
                        <div className="panel-body">
                          Small taxpayers with an aggregate turnover in a
                          financial year up to [Rs. 50 lakhs] shall be eligible
                          for composition levy. Under the scheme, a taxpayer
                          shall pay tax as a percentage of his turnover during
                          the year without the benefit of ITC. The floor rate of
                          tax for CGST and SGST shall not be less than [1%]. A
                          tax payer opting for composition levy shall not
                          collect any tax from his customers. Tax payers making
                          inter- state supplies or paying tax on reverse charge
                          basis shall not be eligible for composition scheme.
                          Please note that the composition scheme is optional.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="heading89">
                        <h3 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion80"
                            href="#collapse89"
                            aria-expanded="true"
                            aria-controls="collapse89"
                            className="collapsed"
                          >
                            <span>
                              What is GSTN and its role in the GST regime?
                            </span>
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse89"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading89"
                      >
                        <div className="panel-body">
                          GSTN stands for Goods and Service Tax Network (GSTN).
                          A Special Purpose Vehicle called the GSTN has been set
                          up to cater to the needs of GST. The GSTN shall
                          provide a shared IT infrastructure and services to
                          Central and State Governments, tax payers and other
                          stakeholders for implementation of GST. The functions
                          of the GSTN would, inter alia, include: facilitating
                          registration; forwarding the returns to Central and
                          State authorities; computation and settlement of IGST;
                          matching of tax payment details with banking network;
                          providing various MIS reports to the Central and the
                          State Governments based on the tax payer return
                          information; providing analysis of tax payers’
                          profile; and running the matching engine for matching,
                          reversal and reclaim of input tax credit. The GSTN is
                          developing a common GST portal and applications for
                          registration, payment, return and MIS/ reports. The
                          GSTN would also be integrating the common GST portal
                          with the existing tax administration IT systems and
                          would be building interfaces for tax payers. Further,
                          the GSTN is developing back-end modules like
                          assessment, audit, refund, appeal etc. for 19 States
                          and UTs (Model II States). The CBEC and Model I States
                          (15 States) are themselves developing their GST
                          back-end systems. Integration of GST front-end system
                          with back-end systems will have to be completed and
                          tested well in advance for making the transition
                          smooth.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="e-learning-div">
              <div className="row">
                <div className="col-8">
                  <h5>
                    <a
                      className="e-learning-a"
                      data-toggle="modal"
                      data-target="#knowledge_8"
                    >
                      Goods &amp; Service Tax
                    </a>
                  </h5>
                </div>
                <div className="col-4">
                  <a className="e-learning-a" href="#">
                    <img
                      className="e-learning-img img-responsive"
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/knowledge/knowledge_gst.jpg"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Knowledge;
