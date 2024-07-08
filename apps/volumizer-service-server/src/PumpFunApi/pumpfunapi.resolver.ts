import * as graphql from "@nestjs/graphql";
import { SearchTokensInput } from "../pumpFunApi/SearchTokensInput";
import { SearchTokensOutput } from "../pumpFunApi/SearchTokensOutput";
import { PumpFunApiService } from "./pumpfunapi.service";

export class PumpFunApiResolver {
  constructor(protected readonly service: PumpFunApiService) {}

  @graphql.Query(() => [SearchTokensOutput])
  async SearchTokens(
    @graphql.Args()
    args: SearchTokensInput
  ): Promise<SearchTokensOutput[]> {
    return this.service.SearchTokens(args);
  }
}
