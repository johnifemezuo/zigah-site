import { ReactNode } from "react";

export type TBase = {
  children?: ReactNode;
  key?: string | number;
};

export interface InterBase {
    children: ReactNode;
    key?: string | number;
}