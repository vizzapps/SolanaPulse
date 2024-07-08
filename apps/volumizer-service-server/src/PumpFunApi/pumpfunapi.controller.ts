import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PumpFunApiService } from "./pumpfunapi.service";
import { SearchTokensInput } from "../pumpFunApi/SearchTokensInput";
import { SearchTokensOutput } from "../pumpFunApi/SearchTokensOutput";

@swagger.ApiTags("pumpFunApis")
@common.Controller("pumpFunApis")
export class PumpFunApiController {
  constructor(protected readonly service: PumpFunApiService) {}

  @common.Get("/searchTokens")
  @swagger.ApiOkResponse({
    type: SearchTokensOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchTokens(
    @common.Body()
    body: SearchTokensInput
  ): Promise<SearchTokensOutput[]> {
        return this.service.SearchTokens(body);
      }
}
