import styled from "styled-components";

export const UsersContainer = styled.main`
  width: min(86.4rem, 100%);
  padding-inline: 1.5rem;
  margin: 0 auto;
`;

export const PublicationsSection = styled.section`
  margin-top: 7.2rem;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
