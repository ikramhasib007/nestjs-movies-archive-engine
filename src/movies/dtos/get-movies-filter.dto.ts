import { IsEnum, IsOptional, IsString } from 'class-validator';
import { MovieGenre } from '../movie-genre.enum';

export class GetMoviesFilterDto {
  @IsOptional()
  @IsEnum(MovieGenre)
  genre?: MovieGenre;

  @IsOptional()
  @IsString()
  search?: string;
}
