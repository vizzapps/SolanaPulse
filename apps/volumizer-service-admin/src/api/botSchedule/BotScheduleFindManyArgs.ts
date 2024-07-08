import { BotScheduleWhereInput } from "./BotScheduleWhereInput";
import { BotScheduleOrderByInput } from "./BotScheduleOrderByInput";

export type BotScheduleFindManyArgs = {
  where?: BotScheduleWhereInput;
  orderBy?: Array<BotScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
