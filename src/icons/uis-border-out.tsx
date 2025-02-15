import React from 'react';
import { Props } from '../index';

const UisBorderOut = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,3H4C3.4,3,3,3.4,3,4v16c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z M19,19H5V5h14V19z M12,13c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,13,12,13z M12,17c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,17,12,17z M12,9c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,9,12,9z M8,13c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S7.4,13,8,13z M16,13c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,13,16,13z'
  }));
};

export default UisBorderOut;