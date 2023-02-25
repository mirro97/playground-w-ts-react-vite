import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GalmuriText = ({ children }: Props) => (
  <p className="font-galmuri">{children}</p>
);
