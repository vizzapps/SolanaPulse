import { TradeUpdateManyWithoutTokensInput } from "./TradeUpdateManyWithoutTokensInput";

export type TokenUpdateInput = {
  address?: string | null;
  name?: string | null;
  trades?: TradeUpdateManyWithoutTokensInput;
};
