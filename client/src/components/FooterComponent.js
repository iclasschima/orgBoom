import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const FooterComponent = () => {
    return (
        <div id="FooterComponent">
            <span><FontAwesomeIcon icon={faCopyright} /> copyright - OrgBoom Technologies </span>
            
        </div>
    )
}

export default FooterComponent;