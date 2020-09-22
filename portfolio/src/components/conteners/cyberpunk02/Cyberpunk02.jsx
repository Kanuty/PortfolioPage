import React from 'react';
import PropTypes from 'prop-types';

function Cyberpunk02(props) {
  const {
    text,
  } = props;
  
  return (
    <div className="container">
      <ul>
        <li className="upperTrivia">
          <div className="upperTriviaAnimation">
          </div>
        </li>
        <li className="mainContent">
          <div className="skillEmblem">
          </div>
          <div>
            <p>
            {text}
            </p>
          </div>
        </li>
        <li className="lowerTrivia">
        </li>
      </ul>

    </div>
  );
}

Cyberpunk02.propTypes = {
  text: PropTypes.string,
};

Cyberpunk02.defaultProps = {
  text: `Lorem ipsum`,
};

export default (Cyberpunk02);
