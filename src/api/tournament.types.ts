export interface ITournament {
  game: string;
  id: string;
  name: string;
  organizer: string;
  participants: {current: number, max: number};
  startDate: string;
}
