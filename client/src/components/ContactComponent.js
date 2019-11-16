import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationArrow, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import RightSideContact from "./RightSideContact"
// import LeftSideContact from "./LeftSideContact"
library.add(fab)


const ContactComponent = () => {
    return (
      <div id="ContactComponent">
        <h2>Don't Be A Stranger</h2>
        <h6>Just Say Hello</h6>
        <div className="row">
          <div className="col-12" id="location-panel">
            <h5>
              <img src={require("../img/OrgBoom-Favicon.png")} alt="" />
              OrgBoom
            </h5>
            <div className="row pt-3">
              <div className="col-lg-4 col-12 row">
                <FontAwesomeIcon icon={faLocationArrow} className="col-4" />
                <ul className="col-8">
                  <li>16 Abayomi street,</li>
                  <li>Lawonson Surulere,</li>
                  <li>Lagos, Nigeria.</li>

                  <li id="social-media-icons" className="pt-4">
                    <a href="https://facebook.com/orgboom">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} id="icon" />
                    </a>
                    <a href="https://twitter.com/orgboom_tech">
                      <FontAwesomeIcon icon={["fab", "twitter"]} id="icon" />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={["fab", "instagram"]} id="icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12 row">
                <FontAwesomeIcon icon={faPhone} className="col-4" />
                <ul className="col-8" id="number">
                  <li>+234 816 281 4466</li>
                  <li>+234 809 119 1550</li>
                  <li>+234 903 186 1100</li>
                </ul>
                <FontAwesomeIcon icon={faEnvelope} className="col-4" />
                <ul className="col-8">
                  <li>info@orgboom.com</li>
                </ul>
              </div>
              <div
                className="col-md-4 text-center d-md-none d-lg-block"
                id="marker__div"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} id="marker" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12" id="contact-text">
            <p>
              Feel free to get in touch with us because we are just a stone
              throw away from you. Let's discuss new projects and oppurtunities
              together
            </p>
          </div>
        </div>
      </div>
    );
}

export default ContactComponent;