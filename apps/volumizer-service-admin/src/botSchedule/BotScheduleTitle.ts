import { BotSchedule as TBotSchedule } from "../api/botSchedule/BotSchedule";

export const BOTSCHEDULE_TITLE_FIELD = "status";

export const BotScheduleTitle = (record: TBotSchedule): string => {
  return record.status?.toString() || String(record.id);
};
