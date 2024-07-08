import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type TokenWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  trades?: TradeListRelationFilter;
};
