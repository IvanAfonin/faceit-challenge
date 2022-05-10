import styled from 'styled-components';
import theme from '../theme';

const CardContainer = styled.div`
  width: ${theme.spacing(54)};
  flex-grow: 1;
  background-color: ${theme.palette.background.base};
  border-radius: ${theme.spacing(1)};
  padding: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(6)};
  margin-right: ${theme.spacing(6)};
  
  :nth-child(3n){
    margin-right: 0;
  }
`;

export default CardContainer;
