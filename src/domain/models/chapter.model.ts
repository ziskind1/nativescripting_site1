import { Lesson } from './lesson.model';

export interface Chapter {
    id: number;
    name: string;
    lessons: Lesson[];
}
