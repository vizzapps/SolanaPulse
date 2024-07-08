import { Module } from "@nestjs/common";
import { VolumizerService } from "./volumizer.service";
import { VolumizerController } from "./volumizer.controller";
import { VolumizerResolver } from "./volumizer.resolver";

@Module({
  controllers: [VolumizerController],
  providers: [VolumizerService, VolumizerResolver],
  exports: [VolumizerService],
})
export class VolumizerModule {}
