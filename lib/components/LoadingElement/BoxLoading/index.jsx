import React from 'react';
import styled from 'styled-components';

import { commonStyle, sizeContainer } from '../utils/style';

import { keyframes } from 'styled-components';

const shadow = keyframes`
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;

const animate = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`

const LoadContainer = styled.div`
    width: ${props => sizeContainer[props.size] || sizeContainer['default']};
    height: ${props => sizeContainer[props.size] || sizeContainer['default']};
    &:before {
      content: '';
      width:${props => sizeContainer[props.size] || sizeContainer['default']};
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: calc(${props => sizeContainer[props.size] || sizeContainer['default']} + 10px) ;
      left: 0;
      border-radius: 50%;
      animation: ${animate} ${props => props.speed || 0.5}s linear infinite;
    }
    &:after {
      content: '';
      width: ${props => sizeContainer[props.size] || sizeContainer['default']};
      height:${props => sizeContainer[props.size] || sizeContainer['default']};
      background: ${props => props.color || '#00adb5'};
      animation: ${shadow} ${props => props.speed || 0.5}s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
`;

const BoxLoading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadContainer style={style} color={color} speed={speed} size={size} />
  );
};

export default BoxLoading;
