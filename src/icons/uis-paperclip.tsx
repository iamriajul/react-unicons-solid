import React from 'react';
import { Props } from '../index';

const UisPaperclip = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.1,12.4l-6.2,6.2c-1.7,1.7-4.4,1.7-6,0c-1.7-1.7-1.7-4.4,0-6l8-8c1-0.9,2.5-0.9,3.5,0c1,1,1,2.6,0,3.5l-6.9,6.9c-0.3,0.3-0.8,0.3-1.1,0c0,0,0,0,0,0c-0.3-0.3-0.3-0.8,0-1.1l5.1-5.1c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L8,12.6c-1.1,1.1-1.1,2.8,0,3.9c1.1,1,2.8,1,3.9,0l6.9-6.9c1.8-1.8,1.8-4.6,0-6.4c-1.8-1.8-4.6-1.8-6.4,0l-8,8c-1.2,1.2-1.8,2.8-1.8,4.4c0,3.5,2.8,6.2,6.3,6.2c1.7,0,3.2-0.7,4.4-1.8l6.2-6.2c0.4-0.4,0.4-1,0-1.4S18.5,12,18.1,12.4z'
  }));
};

export default UisPaperclip;