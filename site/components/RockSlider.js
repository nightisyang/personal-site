import styled, { keyframes } from "styled-components";

export const RockSlider = styled.span`
  position: relative;
  animation: ${(props) => props.slide} 2s linear infinite;
`;
