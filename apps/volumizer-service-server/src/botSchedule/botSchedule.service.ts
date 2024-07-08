import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotScheduleServiceBase } from "./base/botSchedule.service.base";

@Injectable()
export class BotScheduleService extends BotScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
