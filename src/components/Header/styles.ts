import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #003580;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 2rem 0 10rem 0;

  &.listMode {
    margin: 2rem 0 0 0;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;
`;

export const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.6rem;

  &.active {
    border: 1px solid #fff;
    padding: 1rem;
    border-radius: 2rem;
  }
`;

export const HeaderTitle = styled.h3`
  font-size: 3rem;
`;

export const HeaderDescription = styled.p`
  margin: 2rem 0%;
  font-size: 1.6rem;
`;

export const HeaderButton = styled.button`
  background-color: #0071c2;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  padding: 1rem;
`;

export const HeaderSearchContainer = styled.div`
  height: 6rem;
  width: 100%;
  max-width: 102.4rem;
  background-color: #fff;
  border: .3rem solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  border-radius: .5rem;
  position: absolute;
  bottom: -2.8rem;
`;

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .headerSearchIcon {
    color: lightgray;
    font-size: 1.6rem;
  }

  .headerSearchInput {
    border: none;
    outline: none;
  }

  .headerSearchText {
    color: lightgray;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .date {
    position: absolute;
    top: 5.5rem;
  }

  &:focus-within {
    outline: 1px solid #000;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 5.5rem;
  background-color: #fff;
  color: gray;
  border-radius: .5rem;
  box-shadow: 0 0 1rem -.5rem rgba(0,0,0, 0.4);
  -webkit-box-shadow: 0 0 1rem -.5rem rgba(0,0,0, 0.4);
`;

export const OptionsItem = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  font-size: 1.4rem;
`;

export const OptionsCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #000;
  font-size: 1.2rem;

  .optionCounterButton {
    width: 3rem;
    height: 3rem;
    border: 1px solid #0071c2;
    color: 0071c2;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
  }
`;
