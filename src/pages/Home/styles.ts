import styled from "styled-components";

export const HomeContainer = styled.main`
  width: min(86.4rem, 100%);
  margin: 0 auto;
`;

export const PublicationsSection = styled.section`
  margin-top: 7.2rem;

  > input {
    width: 100%;
    padding: 1.2rem 1.6rem;

    background: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["gray-600"]};
    border-radius: 6px;

    outline: 0;

    color: ${({ theme }) => theme["gray-300"]};
    line-height: 160%;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme["blue-300"]};
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.2rem;

  & h2 {
    color: ${({ theme }) => theme["gray-200"]};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 160%;
  }

  & span {
    color: ${({ theme }) => theme["gray-400"]};
    font-size: 1.4rem;
    line-height: 160%;
  }
`;

export const PublicationsCardsList = styled.div`
  margin-top: 4.8rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
`;
