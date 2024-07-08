import { TradeWhereUniqueInput } from "../trade/TradeWhereUniqueInput";

export type BotScheduleCreateInput = {
  status?: string | null;
  runAt?: Date | null;
  trade?: TradeWhereUniqueInput | null;
};
