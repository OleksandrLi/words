import styled from "styled-components";

export const NextButton = styled.div`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.sizes.button.weight};
  width: max-content;
  padding: 10px 30px;
  text-align: center;
  margin: 30px auto 100px;
  color: #ffa500;
  border: solid ${({ theme }) => theme.sizes.button.border} #ffa500;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:active {
    background-color: #ffa50033;
  }

  @media (max-width: 680px) {
    align-self: flex-end;
    margin: 20px auto 30px;
    font-size: 28px;
  }
`;