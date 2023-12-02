import styled from "styled-components";

export const ProfileCardContainer = styled.article`
  display: flex;
  gap: 3.2rem;

  margin-top: -8.8rem;
  padding: 3.2rem 4rem;

  border-radius: 10px;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme["gray-800"]};

  & aside img {
    height: 14.8rem;
    border-radius: 8px;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.8rem;

    & h1 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 130%;
    }

    & a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      height: fit-content;

      color: ${({ theme }) => theme["blue-300"]};
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 160%;

      border-bottom: 1px solid transparent;

      text-decoration: none;

      transition: border-color 0.3s;

      &:hover {
        border-color: ${({ theme }) => theme["blue-300"]};
      }
    }
  }

  > section {
    flex: 1;

    & p {
      color: ${({ theme }) => theme["gray-300"]};
      line-height: 160%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme["gray-200"]};

  > i {
    color: ${({ theme }) => theme["gray-500"]};
    height: 1.8rem;
    width: 1.8rem;
  }
`;
