import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VolumizerService } from "./volumizer.service";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";

@swagger.ApiTags("volumizers")
@common.Controller("volumizers")
export class VolumizerController {
  constructor(protected readonly service: VolumizerService) {}

  @common.Post("/executeBot")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExecuteBot(
    @common.Body()
    body: RaydiumSearchTokensInput
  ): Promise<string> {
        return this.service.ExecuteBot(body);
      }

  @common.Post("/scheduleBot")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduleBot(
    @common.Body()
    body: RaydiumSearchTokensInput
  ): Promise<string> {
        return this.service.ScheduleBot(body);
      }
}
