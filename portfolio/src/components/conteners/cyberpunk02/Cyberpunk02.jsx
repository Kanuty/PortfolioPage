import React from 'react';
import PropTypes from 'prop-types';

import { container, upperTrivia, lowerTrivia, mainContent, skillEmblem, skillText} from'./style.module.css';

function Cyberpunk02(props) {
  const {
    text,
  } = props;
  
  return (
    <div className={container}>
      <ul>
        <li className={upperTrivia}>
        </li>
        <li className={mainContent}>
          <div className={skillEmblem}>
          </div>
          <div className={skillText}>
            <span>{text}</span>
          </div>
        </li>

      </ul>

    </div>
  );
}

Cyberpunk02.propTypes = {
  text: PropTypes.string,
  container: PropTypes.string,
};

Cyberpunk02.defaultProps = {
  text: `Lorem ipsum`,
  container: "container",
};

export default (Cyberpunk02);
