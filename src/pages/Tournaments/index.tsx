import React from 'react';

import Container from '../../components/Container';
import SearchSection from './SearchSection';
import Header from '../../components/Header';
import TournamentsList from './TournamentsList';
import styled from 'styled-components';
import theme from '../../theme';


const Main: React.FC = () => {
  return (
      <Container>
        <Header/>
        <SearchSection/>
        <TournamentsContainer>
          <TournamentsList/>
        </TournamentsContainer>
      </Container>
  )
};

const TournamentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${theme.spacing(2)};
`;


export default Main
