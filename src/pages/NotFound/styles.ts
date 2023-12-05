import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100vh;

  background: ${({ theme }) => theme["BACKGROUND-900"]};
`;

export const NotFoundContent = styled.div`
  width: min(86.4rem, 100%);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  height: 100%;

  text-align: center;

  & h1 {
    font-size: 7.2rem;
    font-weight: 900;
  }

  & p {
    font-size: 2rem;
  }

  > img {
    width: min(40rem, 100%);
  }
`;

export const HomeButton = styled(Link)`
  text-decoration: none;

  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => theme["gray-100"]};
  border: 3px solid ${({ theme }) => theme["gray-100"]};
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: 700;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme["gray-100"]};
    color: ${({ theme }) => theme["BACKGROUND-900"]};
  }
`;
