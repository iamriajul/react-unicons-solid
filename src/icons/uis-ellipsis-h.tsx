import React from 'react';
import { Props } from '../index';

const UisEllipsisH = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S6.1,10,5,10z M19,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S20.1,10,19,10z'
  }));
};

export default UisEllipsisH;