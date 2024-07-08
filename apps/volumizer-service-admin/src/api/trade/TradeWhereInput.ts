import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BotScheduleListRelationFilter } from "../botSchedule/BotScheduleListRelationFilter";
import { TokenWhereUniqueInput } from "../token/TokenWhereUniqueInput";

export type TradeWhereInput = {
  id?: StringFilter;
  duration?: IntNullableFilter;
  numberOfTrades?: IntNullableFilter;
  amount?: IntNullableFilter;
  botSchedules?: BotScheduleListRelationFilter;
  token?: TokenWhereUniqueInput;
};
