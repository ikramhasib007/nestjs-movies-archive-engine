import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { MovieGenre } from '../movie-genre.enum';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsEnum(MovieGenre)
  genre: MovieGenre;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  rating: number;
}
