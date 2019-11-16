import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const RightSideContact = () => {
    return (
        <div className="col-md-4 pt-md-5 pl-md-4" id="contact-text">
            <p>Feel free to get in touch with us because we are just a stone throw away from you</p>
            <p>Let's discuss new projects and oppurtunities together</p>

            <ul className="mt-md-4" id="social-media-icons">
                <a href="https://facebook.com/orgboom"><FontAwesomeIcon icon={["fab", "facebook-f"]} id='icon' /></a>
                <a href="https://twitter.com/orgboom_tech"><FontAwesomeIcon icon={["fab", "twitter"]} id='icon' /></a>
                <a href="#"><FontAwesomeIcon icon={["fab", "instagram"]} id='icon' /></a>
            </ul>
        </div>
    )
}

export default RightSideContact;