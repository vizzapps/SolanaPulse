import * as graphql from "@nestjs/graphql";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";
import { RaydiumSearchTokensOutput } from "../raydiumPoolsApi/RaydiumSearchTokensOutput";
import { RaydiumPoolsApiService } from "./raydiumpoolsapi.service";

export class RaydiumPoolsApiResolver {
  constructor(protected readonly service: RaydiumPoolsApiService) {}

  @graphql.Query(() => [RaydiumSearchTokensOutput])
  async SearchTokens(
    @graphql.Args()
    args: RaydiumSearchTokensInput
  ): Promise<RaydiumSearchTokensOutput[]> {
    return this.service.SearchTokens(args);
  }
}
