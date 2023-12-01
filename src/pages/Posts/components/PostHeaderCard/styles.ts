import styled from "styled-components";

export const PostHeaderCardContainer = styled.header`
  padding: 3.2rem;
  margin-top: -8.8rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme["gray-800"]};
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2.3rem;

  > a {
    color: ${({ theme }) => theme["blue-300"]};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    border-bottom: 1px solid transparent;

    transition: 0.3s border-color;

    &:hover {
      border-color: ${({ theme }) => theme["blue-300"]};
    }
  }

  > h1 {
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 3.2rem;

  margin-top: 0.8rem;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme["gray-400"]};

  > i {
    color: ${({ theme }) => theme["gray-500"]};
    height: 1.8rem;
    width: 1.8rem;
  }
`;
