import {atom} from 'recoil';

interface IToursState {
  id: string;
  image: string;
  name: string;
  description: string;
}

export const toursState = atom<IToursState[]>({
  key: "toursState",
  default: []
});

