import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 5rem;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-weight: 500;
    font-size: 1.8rem
  }
`;

export const NavItems = styled.div`

`;

export const NavButton = styled.button`
  border: none;
  padding: .5rem 1rem;
  color: #003580;

  & + & {
    margin-left: 2rem;
  }
`;
