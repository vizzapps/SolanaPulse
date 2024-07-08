import { Module } from "@nestjs/common";
import { PumpFunApiService } from "./pumpfunapi.service";
import { PumpFunApiController } from "./pumpfunapi.controller";
import { PumpFunApiResolver } from "./pumpfunapi.resolver";

@Module({
  controllers: [PumpFunApiController],
  providers: [PumpFunApiService, PumpFunApiResolver],
  exports: [PumpFunApiService],
})
export class PumpFunApiModule {}
