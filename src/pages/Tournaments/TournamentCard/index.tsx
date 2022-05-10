import React from 'react';
import styled from 'styled-components';
import { deleteTournamentThunk, editTournamentThunk } from '../../../api/tournaments.thunk';
import { useDispatch } from 'react-redux';
import CardContainer from '../../../components/CardContainer';
import { formatDate } from '../../../utils/formatDate';
import Button from '../../../components/Button';
import P from '../../../components/P';
import H6 from '../../../components/H6';
import theme from '../../../theme';

interface ITournamentCard {
  name: string;
  id: string;
  organaizer: string;
  game: string;
  participants: {
    current: number;
    max: number
  };
  startDate: string;
}

const TournamentCard: React.FC<ITournamentCard> = ({
    name = 'Test',
    organaizer = 'Ivan',
    game = "Test game",
    startDate= '',
    participants,
    id
}) => {
  const dispatch = useDispatch()

  const handleEditTournament= ()=>{
    const newName = prompt('New Tournament Name')
    if(newName) {
      dispatch(editTournamentThunk(newName, id))
    }
  }

  const handleDeleteTournament= ()=>{
    // eslint-disable-next-line no-restricted-globals
    const isConfirmed = confirm('Do you really want to delete this tournament?')
    if(isConfirmed){
      dispatch(deleteTournamentThunk(id))
    }
  }

  return (
    <CardContainer>
      <H6>{name}</H6>
      <P>Organizer: {organaizer}</P>
      <P>Game: {game}</P>
      <P>Participants: {participants.current} / {participants.max}</P>
      <P>Start: {formatDate(startDate)}</P>
      <Button onClick={handleEditTournament}>Edit</Button>
      <StyledDeleteButton onClick={handleDeleteTournament}>Delete</StyledDeleteButton>
    </CardContainer>
  )
};

const StyledDeleteButton = styled(Button)`
  margin-left: ${theme.spacing(2)};
`;


export default TournamentCard
