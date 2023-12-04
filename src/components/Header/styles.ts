import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 6.4rem 0 13.4rem;

  background-color: ${({ theme }) => theme["gray-800"]};
  background-image: url("../../../src/assets/left-header-lines.svg"),
    url("../../../src/assets/right-header-lines.svg");
  background-position: left center, right center, center;
  background-repeat: no-repeat;

  position: relative;
  z-index: -2;

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    height: 5.2rem;
    width: 89.1rem;

    background: #14589c;
    filter: blur(80px);
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  place-content: center;
`;
