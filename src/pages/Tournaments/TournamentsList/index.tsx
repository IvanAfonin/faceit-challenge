import React from 'react';
import P from '../../../components/P';
import { ITournament } from '../../../api/tournament.types';
import TournamentCard from '../TournamentCard';
import H6 from '../../../components/H6';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { useTorunaments } from '../../../selectors/tournaments';
import { getTournamentsThunk } from '../../../api/tournaments.thunk';
import { useDispatch } from 'react-redux';

const TournamentsList = ()=>{
  const dispatch = useDispatch()
  const tournaments = useTorunaments()

  const handleRetryButton = () =>{
    dispatch(getTournamentsThunk())
  }

  if(tournaments.isLoading){
    return (
      <MessageContainer>
        <P>Loading tournaments ...</P>
      </MessageContainer>
    )
  }

  if(!tournaments.tournamentsList.length){
    return (
      <MessageContainer>
        <P>No tournaments found.</P>
      </MessageContainer>
    )
  }

  if (tournaments.isError){
    return(
      <MessageContainer>
          <H6>Something went wrong.</H6>
          <Button onClick={handleRetryButton}>RETRY</Button>
      </MessageContainer>
    )
  }

  return(
    <>
      {tournaments.tournamentsList.map((tournament: ITournament) =>(
          <TournamentCard
            key={tournament.id + tournament.name}
            id={tournament.id}
            game={tournament.game}
            name={tournament.name}
            organaizer={tournament.organizer}
            startDate={tournament.startDate}
            participants={tournament.participants}/>
        ))
      }
    </>
  )
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;


export default TournamentsList
