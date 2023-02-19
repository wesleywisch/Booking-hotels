import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const FeaturedItem = styled.div`
  position: relative;
  color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  height: 25rem;
  width: 100%;

  .featuredImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  font-size: 1.7rem;
`;
