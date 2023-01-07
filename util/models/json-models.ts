

export type NSCoursesJsonChaptersLessons = {
    readonly chapterId: string;
    readonly id: string;
    readonly isPreview: boolean;
    readonly name: string;
};

export type NSCoursesJsonChapters = {
    readonly id: number;
    readonly lessons: NSCoursesJsonChaptersLessons[]
    readonly name: string;
};

export type NSCoursesJsonDescriptionHtmlSections = {
    readonly descriptionHtml: string;
    readonly title: string;
};

export type NSCoursesJsonProducts = {
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

export type NSCoursesJsonPublishingSchedule = {
    readonly date: string;
    readonly id: number;
};

export type NSCoursesJson = {
    readonly authors: string[];
    readonly chapters: NSCoursesJsonChapters[]
    readonly description: string;
    readonly descriptionHtmlSections: NSCoursesJsonDescriptionHtmlSections[];
    readonly flavors: string[];
    readonly id: number;
    readonly label: string;
    readonly launchdate: string;
    readonly level: number;
    readonly notes: string[];
    readonly order: number;
    readonly products: NSCoursesJsonProducts[];
    readonly publishedChapters: number[];
    readonly publishingSchedule: NSCoursesJsonPublishingSchedule[];
    readonly subtitle: string;
    readonly title: string;
    readonly url: string;
  };


  //////////////////

  export type NSTracksJsonLevels = {
    readonly description: string;
    readonly levelId: number;
    readonly title: string;
  };

  export type NSTracksJson = {
    readonly bundles: NSTracksJsonBundles[];
    readonly description: string;
    readonly imageSrc: string;
    readonly levels: NSTracksJsonLevels[];
    readonly title: string;
    readonly trackId: string;
  };
  
  export type NSTracksJsonBundles = {
    readonly description: string;
    readonly id: string;
    readonly order: number;
    readonly title: string;
  };


  //////////////////////

  export type NSBundlesJson = {
    bundleLevel: number;
    courseIds: string[];
    description: string;
    id: string;
    products: NSBundlesJsonProducts[];
    promoremaining: number;
    promototal: number;
    subtitle: string;
    title: string;
    url: string;
  };

  export type NSBundlesJsonProducts = {
    description: string;
    id: string;
    licensesMax: number;
    licensesMin: number;
    name: string;
    pricereg: number;
    pricesale: number;
  };