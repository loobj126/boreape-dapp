// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Roadmap() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="roadmap" className="target"></div>
      <header>
        <h2>Roadmap</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2003 - 2005
                </span>
              </h5>
              <h3>Bachelor of Information System Engineering</h3>
              <h4>Universidad Tunku Abdul Rahman</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Information System Engineering</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2001 - 2003
                </span>
              </h5>
              <h3>Diploma</h3>
              <h4>College Tunku Abdul Rahman</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span>Information System Engineering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
