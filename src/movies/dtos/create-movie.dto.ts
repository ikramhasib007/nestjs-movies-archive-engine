import { IsEnum, IsNotEmpty } from 'class-validator';
import { MovieGenre } from '../movie-genre.enum';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsEnum(MovieGenre)
  genre: MovieGenre;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  rating: string;
}
