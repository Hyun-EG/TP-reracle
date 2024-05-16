import styled from 'styled-components';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';

export const CategoryContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

export const HorizontalLine = styled.div`
  width: 80%;
  height: 0.02rem;
  margin: 1rem auto 0;
  background-color: var(--color-purple);
`;

export const StyledCategoryText = styled.span`
  font-size: 0.9rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  margin-top: 0.4rem;
  margin-left: 2.2rem;
`;

export const CategroryGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const CategoryWrapper = styled.div`
  background-color: var(--color-yellow-light);
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: var(--color-yellow);
  }
`;

export const CategoryName = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
`;

export const StyledSlCarousel = styled(SlCarousel)`
  width: 85%;
  margin: 0 auto;
  height: 80%;
`;

export const StyledSlCarouselItem = styled(SlCarouselItem)`
  margin-bottom: 2rem;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 60%;
  height: auto;
`;
