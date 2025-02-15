import React from 'react';
import { Props } from '../index';

const UisLayersAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,7H6C5.4,7,5,7.4,5,8v2.5h7.5c0.6,0,1,0.4,1,1V19H16c0.6,0,1-0.4,1-1V8C17,7.4,16.6,7,16,7z M11,12H3c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1v-8C12,12.4,11.6,12,11,12z M21,2H9C8.4,2,8,2.4,8,3v2.5h9.5c0.6,0,1,0.4,1,1V16H21c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z'
  }));
};

export default UisLayersAlt;