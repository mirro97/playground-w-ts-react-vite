import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const language = atom({
  key: "language",
  default: {
    lang: "en",
    langNum_genera: 7,
  },
  effects: [persistAtom],
});
