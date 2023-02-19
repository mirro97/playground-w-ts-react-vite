import { atom } from "recoil";

export const language = atom({
  key: "language",
  default: {
    lang: "en",
    langNum_name: 8,
    langNum_type: 7,
    langNum_genera: 7,
  },
});
