import { Injectable } from "@nestjs/common";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";
import { RaydiumSearchTokensOutput } from "../raydiumPoolsApi/RaydiumSearchTokensOutput";

@Injectable()
export class RaydiumPoolsApiService {
  constructor() {}
  async SearchTokens(args: RaydiumSearchTokensInput): Promise<RaydiumSearchTokensOutput[]> {
    throw new Error("Not implemented");
  }
}
