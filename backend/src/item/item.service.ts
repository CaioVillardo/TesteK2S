import { Injectable, Logger } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import dotenv from 'dotenv';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';

@Injectable()
export class MoviesService {

  private readonly logger = new Logger(MoviesService.name);
  constructor(private readonly httpService: HttpService) {}

  async findOne(title: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`http://www.omdbapi.com/?apikey=41859801&t=${title}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
