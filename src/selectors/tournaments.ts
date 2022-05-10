import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export const useTorunaments = ()=> {
  return useSelector((store: RootState) => store.tournaments)
}
