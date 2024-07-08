import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RaydiumPoolsApiService } from "./raydiumpoolsapi.service";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";
import { RaydiumSearchTokensOutput } from "../raydiumPoolsApi/RaydiumSearchTokensOutput";

@swagger.ApiTags("raydiumPoolsApis")
@common.Controller("raydiumPoolsApis")
export class RaydiumPoolsApiController {
  constructor(protected readonly service: RaydiumPoolsApiService) {}

  @common.Get("/searchTokens")
  @swagger.ApiOkResponse({
    type: RaydiumSearchTokensOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchTokens(
    @common.Body()
    body: RaydiumSearchTokensInput
  ): Promise<RaydiumSearchTokensOutput[]> {
        return this.service.SearchTokens(body);
      }
}
