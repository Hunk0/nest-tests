import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/random-cat/cats.module';
import { RequestCatsService } from './shared/request-cats/request-cats.service';

@Module({
  imports: [CatsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, RequestCatsService],
})
export class AppModule {}
