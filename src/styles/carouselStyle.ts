import styled from 'styled-components';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import { NavLink } from 'react-router-dom';

export const CategoryContainer = styled.div`
  width: 56.3vh;
  height: 79.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

export const HorizontalLine = styled.div`
  width: 46vh;	
  height: 1px;
  margin: 3vh auto .1vh;
  background-color: var(--color-purple);
`;

export const StyledCategoryText = styled.span`
  font-size: 2.3vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  margin-top: .6vh;
  margin-left: 5vh;
`;

export const CategroryGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.5vh;
  width: 45vh;
  margin-top: 2vh;
`;

export const CategoryWrapper = styled.div`
  background-color: var(--color-yellow-light);
  width: 11vh;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2vh;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: var(--color-yellow);
  }
`;

export const CategoryName = styled.div`
  margin-top: 0.7vh;
  font-size: 2vh;
  font-weight: var(--font-weight-medium);
  display: flex;
  justify-content: center;
`;

export const StyledSlCarousel = styled(SlCarousel)`
  width: 46vh;
  margin: 0 auto;
  height: 60vh;
`;

export const StyledSlCarouselItem = styled(SlCarouselItem)`
  margin-bottom: 1vh;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 60%;
  height: auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333
`;
