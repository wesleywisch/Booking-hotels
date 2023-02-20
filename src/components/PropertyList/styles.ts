import styled from "styled-components";

export const PropertyListContainer = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
`;

export const PropertyListItem = styled.div`
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  .propertyListImage {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`;

export const PropertyListTitles = styled.div`
  font-size: 1.7rem;

  h4 {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;
