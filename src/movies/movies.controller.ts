import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { GetMoviesFilterDto } from './dtos/get-movies-filter.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  findAllMovies(@Query() filterDto: GetMoviesFilterDto) {
    if (Object.keys(filterDto).length) {
      return this.moviesService.findWithFilters(filterDto);
    }
    return this.moviesService.find();
  }

  @Get('/:id')
  findMovie(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Put('/:id')
  updateMovie(@Param('id') id: string, @Body() body: UpdateMovieDto) {
    return this.moviesService.update(id, body);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
