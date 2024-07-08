import { Injectable } from "@nestjs/common";
import { SearchTokensInput } from "../pumpFunApi/SearchTokensInput";
import { SearchTokensOutput } from "../pumpFunApi/SearchTokensOutput";

@Injectable()
export class PumpFunApiService {
  constructor() {}
  async SearchTokens(args: SearchTokensInput): Promise<SearchTokensOutput[]> {
    throw new Error("Not implemented");
  }
}
