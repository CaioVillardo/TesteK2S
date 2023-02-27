"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MoviesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
let MoviesService = MoviesService_1 = class MoviesService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(MoviesService_1.name);
    }
    async findOne(title) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`http://www.omdbapi.com/?apikey=41859801&t=${title}`).pipe((0, rxjs_1.catchError)((error) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
        })));
        return data;
    }
};
MoviesService = MoviesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=item.service.js.map