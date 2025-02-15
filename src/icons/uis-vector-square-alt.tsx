import React from 'react';
import { Props } from '../index';

const UisVectorSquareAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,18.3V5.7c0.6-0.3,1-1,1-1.7c0-1.1-0.9-2-2-2c-0.7,0-1.4,0.4-1.7,1H5.7C5.4,2.4,4.7,2,4,2C2.9,2,2,2.9,2,4c0,0.7,0.4,1.4,1,1.7v12.6c-0.6,0.3-1,1-1,1.7c0,1.1,0.9,2,2,2c0.7,0,1.4-0.4,1.7-1h12.6c0.3,0.6,1,1,1.7,1c1.1,0,2-0.9,2-2C22,19.3,21.6,18.6,21,18.3z M19,18.3c-0.3,0.2-0.5,0.4-0.7,0.7H5.7c-0.2-0.3-0.4-0.5-0.7-0.7V5.7C5.3,5.5,5.5,5.3,5.7,5h12.6c0.2,0.3,0.4,0.5,0.7,0.7V18.3z M16,7H8C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V8C17,7.4,16.6,7,16,7z'
  }));
};

export default UisVectorSquareAlt;