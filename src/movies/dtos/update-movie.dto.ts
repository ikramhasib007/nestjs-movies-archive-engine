import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { MovieGenre } from '../movie-genre.enum';

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsEnum(MovieGenre)
  @IsOptional()
  genre: MovieGenre;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  rating: string;
}
