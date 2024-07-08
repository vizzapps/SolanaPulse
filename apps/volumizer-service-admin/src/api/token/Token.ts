import { Trade } from "../trade/Trade";

export type Token = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  name: string | null;
  trades?: Array<Trade>;
};
