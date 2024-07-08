import { TradeCreateNestedManyWithoutTokensInput } from "./TradeCreateNestedManyWithoutTokensInput";

export type TokenCreateInput = {
  address?: string | null;
  name?: string | null;
  trades?: TradeCreateNestedManyWithoutTokensInput;
};
