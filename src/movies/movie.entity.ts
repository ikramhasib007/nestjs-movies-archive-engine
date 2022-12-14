import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieGenre } from './movie-genre.enum';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  genre: MovieGenre;

  @Column()
  description: string;

  @Column()
  rating: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Movie with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Movie with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Movie with id', this.id);
  }
}
