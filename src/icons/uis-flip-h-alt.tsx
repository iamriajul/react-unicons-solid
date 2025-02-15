import React from 'react';
import { Props } from '../index';

const UisFlipHAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7.4,7.2c0.1,0,0.2,0,0.2,0l1.9-0.5c0.5-0.1,0.9-0.7,0.7-1.2c-0.1-0.5-0.7-0.9-1.2-0.7L7.1,5.2c-0.4,0.1-0.8,0.5-0.8,1C6.4,6.7,6.8,7.2,7.4,7.2z M9.5,9h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S10.1,9,9.5,9z M13.2,5.7c0.1,0,0.2,0,0.2,0l1.9-0.5c0,0,0,0,0,0C15.9,5,16.3,4.5,16.1,4c-0.1-0.5-0.7-0.9-1.2-0.7L13,3.7c-0.4,0.1-0.8,0.5-0.8,1C12.2,5.2,12.7,5.7,13.2,5.7z M13.5,9c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1H13.5z M21,2.8c-0.1-0.5-0.7-0.9-1.2-0.7l-1,0.2c-0.4,0.1-0.8,0.5-0.8,1c0,0.6,0.4,1,1,1C19.1,4.7,19.5,5,20,5h0c0.6,0,1-0.4,1-1V3C21,2.9,21,2.8,21,2.8z M4,10.5L4,10.5c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1S3,7,3,7.5v2C3,10.1,3.4,10.5,4,10.5z M20,7c-0.6,0-1,0.4-1,1v1.1c-0.3,0.2-0.5,0.5-0.5,0.9c0,0.6,0.4,1,1,1H20c0.6,0,1-0.4,1-1V8C21,7.4,20.6,7,20,7z M20,13H4c-0.6,0-1,0.4-1,1v3c0,0.5,0.3,0.9,0.8,1l16,4c0.1,0,0.2,0,0.2,0c0.6,0,1-0.4,1-1v-7C21,13.4,20.6,13,20,13z'
  }));
};

export default UisFlipHAlt;