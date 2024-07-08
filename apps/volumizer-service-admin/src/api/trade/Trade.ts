import { BotSchedule } from "../botSchedule/BotSchedule";
import { Token } from "../token/Token";

export type Trade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number | null;
  numberOfTrades: number | null;
  amount: number | null;
  botSchedules?: Array<BotSchedule>;
  token?: Token | null;
};
