import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { GetMoviesFilterDto } from './dtos/get-movies-filter.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private repo: Repository<Movie>) {}

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  findWithFilters(filterDto: GetMoviesFilterDto) {
    const { genre, search } = filterDto;
    const query = this.repo.createQueryBuilder('movie');
    if (genre) {
      query.andWhere('movie.genre = :genre', { genre });
    }
    if (search) {
      query.andWhere(
        'LOWER(movie.title) LIKE LOWER(:search) OR LOWER(movie.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }
    return query.getMany();
  }

  create(createDto: CreateMovieDto) {
    const { title, genre, description, rating } = createDto;
    const movie = this.repo.create({ title, genre, description, rating });
    return this.repo.save(movie);
  }

  async update(id: string, attrs: Partial<Movie>) {
    const movie = await this.findOne(id);
    if (!movie) throw new NotFoundException();
    Object.assign(movie, attrs);
    return this.repo.save(movie);
  }

  async remove(id: string) {
    const movie = await this.findOne(id);
    if (!movie) throw new NotFoundException();
    return this.repo.remove(movie);
  }
}
