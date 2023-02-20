import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;

  .copyright {
    width: 100%;
    height: 2rem;
    padding: .5rem;
    background-color: #003580;
    text-align: center;
    color: #fff;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  font-size: 1.2rem;
  margin: 0 auto;
`;

export const FooterList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  font-size: 1.4rem;

  ul {
    padding: 0;

    .listItem {
      margin-bottom: 1rem;
      color: #003580;
      cursor: pointer;
    }
  }
`;
