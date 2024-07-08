import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BotScheduleService } from "./botSchedule.service";
import { BotScheduleControllerBase } from "./base/botSchedule.controller.base";

@swagger.ApiTags("botSchedules")
@common.Controller("botSchedules")
export class BotScheduleController extends BotScheduleControllerBase {
  constructor(
    protected readonly service: BotScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
