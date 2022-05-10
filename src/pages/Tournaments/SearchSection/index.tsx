import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { createTournamentThunk, getTournamentsThunk } from '../../../api/tournaments.thunk';
import { useDebounce } from '../../../utils/useDebounce';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const SearchSection = () =>{
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue)
  const dispatch = useDispatch()


  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
  }

  const handleCreateButton = () =>{
    const tournamentName = prompt('New Tournament Name')
    if(tournamentName){
      dispatch(createTournamentThunk(tournamentName))
    }
  }

  useEffect(()=>{
    dispatch(getTournamentsThunk(debouncedSearchValue))
  },[debouncedSearchValue, dispatch])

  return(
    <FlexContainer>
      <Input
        value={searchValue}
        onChange={handleSearchInput}
        placeholder='Search tournament ...'/>
      <Button onClick={handleCreateButton}>CREATE TOURNAMENT</Button>
    </FlexContainer>
  )
}

export default SearchSection

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

