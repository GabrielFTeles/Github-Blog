import styled from "styled-components";

export const SearchFormContainer = styled.form`
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
