import styled from "styled-components";

export const HotelsMainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const HotelsWrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  gap: 2rem;
`;

export const HotelsSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 1rem;
  border-radius: 1rem;
  position: sticky;
  top: 1rem;

  .title {
    font-size: 2rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .listItem {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 1rem;

    > label {
      font-size: 1.2rem;
    }

    > input.destination {
      height: 3rem;
      border: none;
      padding: .5rem;
    }

    > span.check-in {
      height: 3rem;
      padding: .5rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1.4rem;
    }

    > button {
      padding: 1rem;
      background-color: #0071c2;
      color: #fff;
      border: none;
      width: 100%;
      font-weight: 500;
    }

    .optionsWrapper {
      padding: 1rem;

      .optionsItem {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        color: #fff;
        font-size: 1.2rem;

        .optionsInput {
          width: 5rem;
          padding-left: .2rem;
        }
      }
    }
  }
`;

export const HotelsResults = styled.div`
  flex: 3;
`;
