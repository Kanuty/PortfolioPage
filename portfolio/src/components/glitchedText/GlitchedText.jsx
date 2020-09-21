import React from 'react';
import PropTypes from 'prop-types';

import {glitch, glitchWrapper, heroHeading} from'./style.module.css';

const GlitchedText = (props) => {
  const {
    text
  } = props;

  return (
      <h1 className={heroHeading}>
        <div className={glitchWrapper}>
          <div className={glitch} data-text={text}>{text}</div>
        </div>
      </h1>
  )
};

GlitchedText.propTypes = {
  text: PropTypes.string,
};

GlitchedText.defaultProps = {
  text: "ERROR"
};

export default (GlitchedText);