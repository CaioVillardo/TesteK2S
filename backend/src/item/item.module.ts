import { Module } from '@nestjs/common';
import { MoviesService } from './item.service';
import { ItemController } from './item.controller';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [HttpModule],
  controllers: [ItemController],
  providers: [MoviesService]
})
export class ItemModule {}
