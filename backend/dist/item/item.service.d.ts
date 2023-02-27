import { HttpService } from '@nestjs/axios';
export declare class MoviesService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    findOne(title: string): Promise<any>;
}
