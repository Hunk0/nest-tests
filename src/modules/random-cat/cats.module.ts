import { Module, HttpModule } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { RequestCatsService } from '../../shared/request-cats/request-cats.service';


@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsService, RequestCatsService]
})
export class CatsModule {}