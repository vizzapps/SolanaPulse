import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BotScheduleModuleBase } from "./base/botSchedule.module.base";
import { BotScheduleService } from "./botSchedule.service";
import { BotScheduleController } from "./botSchedule.controller";
import { BotScheduleResolver } from "./botSchedule.resolver";

@Module({
  imports: [BotScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [BotScheduleController],
  providers: [BotScheduleService, BotScheduleResolver],
  exports: [BotScheduleService],
})
export class BotScheduleModule {}
