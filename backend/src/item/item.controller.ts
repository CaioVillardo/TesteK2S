import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.MoviesService.findOne(title);
  }
}
