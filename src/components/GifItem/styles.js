import styled from '@emotion/styled';
import { mediaQueries } from '../global-styles';

const StyledContainer = styled.div``;
const StyledCard = styled.div`
  align-items: center;
  background-color: black;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  margin: 1px;
  justify-content: center;
  padding: 1px;
  /* ${mediaQueries.tablet} {
    width: calc(33.3% - 26px);
  }
  ${mediaQueries.desktop} {
    width: calc(25% - 26px);
  } */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { StyledContainer, StyledCard };
