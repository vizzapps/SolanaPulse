import { BotScheduleCreateNestedManyWithoutTradesInput } from "./BotScheduleCreateNestedManyWithoutTradesInput";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type TradeCreateInput = {
  duration?: number | null;
  numberOfTrades?: number | null;
  amount?: number | null;
  botSchedules?: BotScheduleCreateNestedManyWithoutTradesInput;
  token?: TokenWhereUniqueInput | null;
};
