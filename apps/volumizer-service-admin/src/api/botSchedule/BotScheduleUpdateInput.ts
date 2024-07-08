import { TradeWhereUniqueInput } from "../trade/TradeWhereUniqueInput";

export type BotScheduleUpdateInput = {
  status?: string | null;
  runAt?: Date | null;
  trade?: TradeWhereUniqueInput | null;
};
