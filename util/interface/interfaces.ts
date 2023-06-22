import { ReactNode } from "react";

export interface SessionInterface {
  fullName: string;
  email: string;
  request: string;
}


export type ChildrenType = {
  children: ReactNode;
};