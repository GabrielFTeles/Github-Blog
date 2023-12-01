import styled from "styled-components";

export const PublicationCardContainer = styled.li`
  flex: 1;
  line-height: 160%;

  padding: 3.2rem;

  background: ${({ theme }) => theme["gray-700"]};
  border-radius: 10px;

  border: 2px solid transparent;

  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme["gray-500"]};
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;

    margin-bottom: 2rem;

    & h3 {
      color: ${({ theme }) => theme["gray-100"]};
      font-size: 2rem;
      font-weight: 700;
    }

    & span {
      color: ${({ theme }) => theme["gray-400"]};
      font-size: 1.4rem;
      white-space: nowrap;
    }
  }

  & p {
    color: ${({ theme }) => theme["gray-300"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
