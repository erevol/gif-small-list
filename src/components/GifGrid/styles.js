import styled from '@emotion/styled';
import { mediaQueries } from '../global-styles';

const StyledContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 150px;
  grid-gap: 10px;
  width: 100%;
  justify-items: stretch;
  ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const StyledCard = styled.div``;

export { StyledContainer, StyledCard };
