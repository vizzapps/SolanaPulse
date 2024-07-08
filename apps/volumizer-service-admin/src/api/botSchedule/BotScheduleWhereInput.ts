import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TradeWhereUniqueInput } from "../trade/TradeWhereUniqueInput";

export type BotScheduleWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  runAt?: DateTimeNullableFilter;
  trade?: TradeWhereUniqueInput;
};
