import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: CreateMovieDto): void;
    update(id: number, updateData: any): void;
}
