import styled from "styled-components";

export const FeaturedPropertiesContainer = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const FeaturedPropertiesItem = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-size: 1.6rem;

  .featuredPropertiesImage {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .name {
    font-weight: bold;
  }

  .city {
    font-weight: 300;
  }

  .price {
    font-weight: 500
  }

  .rating > button{
    background-color: #003580;
    color: #fff;
    border: none;
    padding: .3rem;
    margin-right: .5rem;
    font-weight: bold;
  }

  .rating > span {
    font-size: 1.4rem;
  }
`;
