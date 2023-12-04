import styled from "styled-components";

export const InfinityLoaderContainer = styled.div`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.1);

  backdrop-filter: blur(2px);
`;

export const InfinityLoaderSVG = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0);

  > path {
    stroke-dasharray: 2.42776657104492px, 242.776657104492px;
    stroke-dashoffset: 0;
    animation: anim 1.6s linear infinite;
    stroke: ${({ theme }) => theme["blue-300"]};
  }

  @keyframes anim {
    12.5% {
      stroke-dasharray: 33.887332938528px, 242.776657104492px;
      stroke-dashoffset: -26.7044314178932px;
    }
    43.75% {
      stroke-dasharray: 84.971828976617px, 242.776657104492px;
      stroke-dashoffset: -84.9693284771232px;
    }
    100% {
      stroke-dasharray: 2.42776657104492px, 242.776657104492px;
      stroke-dashoffset: -240.348889543447px;
    }
  }
`;
