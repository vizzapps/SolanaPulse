import { Module } from "@nestjs/common";
import { RaydiumPoolsApiService } from "./raydiumpoolsapi.service";
import { RaydiumPoolsApiController } from "./raydiumpoolsapi.controller";
import { RaydiumPoolsApiResolver } from "./raydiumpoolsapi.resolver";

@Module({
  controllers: [RaydiumPoolsApiController],
  providers: [RaydiumPoolsApiService, RaydiumPoolsApiResolver],
  exports: [RaydiumPoolsApiService],
})
export class RaydiumPoolsApiModule {}
