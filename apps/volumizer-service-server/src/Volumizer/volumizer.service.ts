import { Injectable } from "@nestjs/common";
import { RaydiumSearchTokensInput } from "../raydiumPoolsApi/RaydiumSearchTokensInput";

@Injectable()
export class VolumizerService {
  constructor() {}
  async ExecuteBot(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ScheduleBot(args: RaydiumSearchTokensInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
