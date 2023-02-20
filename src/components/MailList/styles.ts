import styled from "styled-components";

export const MailListContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  background-color: #003580;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem;
  font-size: 1.6rem;

  .mailInputContainer > input {
    width: 30rem;
    height: 5rem;
    padding: 1rem;
    border: none;
    margin-right: 1rem;
    border-radius: .8rem;
  }

  .mailInputContainer > button {
    height: 5rem;
    background-color: #0071c2;
    color: #fff;
    font-weight: 500;
    border-radius: .8rem;
    border: none;
    padding: 1rem;
  }
`;
