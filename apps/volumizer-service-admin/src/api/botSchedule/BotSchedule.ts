import { Trade } from "../trade/Trade";

export type BotSchedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  runAt: Date | null;
  trade?: Trade | null;
};
