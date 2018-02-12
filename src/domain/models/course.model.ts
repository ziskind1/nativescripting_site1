import { Author } from './author.model';
import { Product } from './product.model';
import { Chapter } from './chapter.model';
import { CourseLevel } from './course-level.model';
import { CourseFlavorType } from './course-flavor.model';


export interface Course {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    url: string;
    flavors: CourseFlavorType[];
    level: CourseLevel;
    label: string;
    launchdate: Date;
    authors: Author[];
    products: Product[];
    chapters: Chapter[];
}
