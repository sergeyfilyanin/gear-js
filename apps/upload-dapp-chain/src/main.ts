import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";

import { AppModule } from "./app.module";
import { gearService } from "./gear/gear-service";

async function bootstrap() {
  await gearService.connect();
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get<number>("app.PORT"));
}

bootstrap();
