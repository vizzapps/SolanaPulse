import { BotScheduleUpdateManyWithoutTradesInput } from "./BotScheduleUpdateManyWithoutTradesInput";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type TradeUpdateInput = {
  duration?: number | null;
  numberOfTrades?: number | null;
  amount?: number | null;
  botSchedules?: BotScheduleUpdateManyWithoutTradesInput;
  token?: TokenWhereUniqueInput | null;
};
