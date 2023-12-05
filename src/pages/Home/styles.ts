import styled from "styled-components";

export const HomeContainer = styled.div`
  width: min(86.4rem, 100%);
  margin: 0 auto;
`;

export const SearchUserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: -8rem;

  & h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme["gray-200"]};
  }

  & span {
    color: ${({ theme }) => theme["blue-300"]};
  }
`;
