import { SortOrder } from "../../util/SortOrder";

export type BotScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  runAt?: SortOrder;
  tradeId?: SortOrder;
};
