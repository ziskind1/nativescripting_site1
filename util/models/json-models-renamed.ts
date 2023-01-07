import { NSCoursesJsonDescriptionHtmlSections, NSTracksJsonLevels } from "./json-models";


export type NSCoursesJsonChaptersLessonsWId = {
    readonly chapterId: string;
    readonly id: string;
    readonly isPreview: boolean;
    readonly name: string;
};

export type NSCoursesJsonChaptersWId = {
    id: number;
    lessons: NSCoursesJsonChaptersLessonsWId[]
    name: string;
};

export type NSCoursesJsonProductsWId = {
    readonly code: string;
    readonly description: string;
    readonly id: string;
    readonly licensesMax: number;
    readonly licensesMin: number;
    readonly name: string;
    readonly numPayments: number;
    readonly pricereg: number;
    readonly pricesale: number;
    readonly prodType: string;
    readonly recurring: boolean;
};

export type NSCoursesJsonPublishingScheduleWId = {
    readonly date: string;
    readonly id: number;
};

export type NSCoursesJsonWId = {
    authors: string[];
    chapters: NSCoursesJsonChaptersWId[]
    description: string;
    descriptionHtmlSections: NSCoursesJsonDescriptionHtmlSections[];
    flavors: string[];
    id: number;
    label: string;
    launchdate: string;
    level: number;
    notes: string[];
    order: number;
    products: NSCoursesJsonProductsWId[];
    publishedChapters: number[];
    publishingSchedule: NSCoursesJsonPublishingScheduleWId[];
    subtitle: string;
    title: string;
    url: string;
  };


//////////////////

export type NSTracksJsonWId = {
    bundles: NSTracksJsonBundlesWId[];
    description: string;
    imageSrc: string;
    levels: NSTracksJsonLevels[];
    title: string;
    trackId: string;
};

export type NSTracksJsonBundlesWId = {
    readonly description: string;
    readonly bundleId: string;
    readonly order: number;
    readonly title: string;
};

  //////////////////////

  export type NSBundlesJsonWId = {
    bundleLevel: number;
    courseIds: string[];
    description: string;
    bundleId: string;
    products: NSBundlesJsonProductsWId[];
    promoremaining: number;
    promototal: number;
    subtitle: string;
    title: string;
    url: string;
  };

  export type NSBundlesJsonProductsWId = {
    description: string;
    productId: string;
    licensesMax: number;
    licensesMin: number;
    name: string;
    pricereg: number;
    pricesale: number;
  };