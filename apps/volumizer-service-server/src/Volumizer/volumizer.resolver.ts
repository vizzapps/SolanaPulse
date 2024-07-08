import * as graphql from "@nestjs/graphql";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";
import { VolumizerService } from "./volumizer.service";

export class VolumizerResolver {
  constructor(protected readonly service: VolumizerService) {}

  @graphql.Mutation(() => String)
  async ExecuteBot(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExecuteBot(args);
  }

  @graphql.Mutation(() => String)
  async ScheduleBot(
    @graphql.Args()
    args: RaydiumSearchTokensInput
  ): Promise<string> {
    return this.service.ScheduleBot(args);
  }
}
