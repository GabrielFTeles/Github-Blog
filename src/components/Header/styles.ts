import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 6.4rem 0 13.4rem;

  background: ${({ theme }) => theme["gray-800"]};
`;

export const HeaderContent = styled.div`
  display: grid;
  place-content: center;
`;
