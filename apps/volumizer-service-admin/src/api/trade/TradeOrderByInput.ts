import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  numberOfTrades?: SortOrder;
  amount?: SortOrder;
  tokenId?: SortOrder;
};
