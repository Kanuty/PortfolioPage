import React from 'react';
import PropTypes from 'prop-types';

import {cyberSquere} from'./style.module.css';

function Cyberpunk01(props) {
  const {
    text,
    container
  } = props;
  
  return (
    <div className={container}>
      <p>{text}</p>
    </div>
  );
}

Cyberpunk01.propTypes = {
  container: PropTypes.string,
  text: PropTypes.string,
};

Cyberpunk01.defaultProps = {
  container: cyberSquere,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum rutrum arcu ac ante consequat, ac viverra augue volutpat.
  Aliquam interdum lectus ut nulla condimentum elementum. Vestibulum dictum enim ultrices lectus venenatis suscipit.
  Vestibulum porttitor sed dolor tristique ullamcorper. Nulla eu quam vitae justo imperdiet sollicitudin.
  Integer non nunc auctor, varius turpis ac, dapibus nisl. Vivamus feugiat eu sem vitae tincidunt. Nam porttitor velit sed ante commodo,
  vitae pharetra dolor vulputate. Ut scelerisque ornare mauris, id sodales quam elementum non.
  Vivamus vel vestibulum justo. Donec sollicitudin eros nec enim auctor facilisis. Integer aliquet molestie fermentum.
  Nam turpis dui, varius in enim sed, volutpat porta ex. Nulla nec commodo leo. Aliquam eget ante ligula.`,
};

export default (Cyberpunk01);
