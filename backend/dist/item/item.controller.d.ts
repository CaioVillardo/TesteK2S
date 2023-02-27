import { MoviesService } from './item.service';
export declare class ItemController {
    private readonly MoviesService;
    constructor(MoviesService: MoviesService);
    findOne(title: string): Promise<any>;
}
