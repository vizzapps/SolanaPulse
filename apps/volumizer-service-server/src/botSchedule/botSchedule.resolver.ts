import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BotScheduleResolverBase } from "./base/botSchedule.resolver.base";
import { BotSchedule } from "./base/BotSchedule";
import { BotScheduleService } from "./botSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BotSchedule)
export class BotScheduleResolver extends BotScheduleResolverBase {
  constructor(
    protected readonly service: BotScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
