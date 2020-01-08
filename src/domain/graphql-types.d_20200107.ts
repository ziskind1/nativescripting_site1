export type Maybe<T> = T | null;

export interface TestimonialsJsonConnectionSort {
  fields: (Maybe<TestimonialsJsonConnectionSortByFieldsEnum>)[];

  order?: TestimonialsJsonConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterTestimonialsJson {
  id?: Maybe<TestimonialsJsonConnectionIdQueryString_2>;

  name?: Maybe<TestimonialsJsonConnectionNameQueryString_2>;

  img?: Maybe<TestimonialsJsonConnectionImgQueryString_2>;

  twitter?: Maybe<TestimonialsJsonConnectionTwitterQueryString_2>;

  order?: Maybe<TestimonialsJsonConnectionOrderQueryInteger_2>;

  quoteHtml?: Maybe<TestimonialsJsonConnectionQuoteHtmlQueryString_2>;

  titleHtml?: Maybe<TestimonialsJsonConnectionTitleHtmlQueryString_2>;

  internal?: Maybe<TestimonialsJsonConnectionInternalInputObject_2>;
}

export interface TestimonialsJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionImgQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionTwitterQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TestimonialsJsonConnectionQuoteHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionTitleHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<
    TestimonialsJsonConnectionInternalContentDigestQueryString_2
  >;

  type?: Maybe<TestimonialsJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<TestimonialsJsonConnectionInternalOwnerQueryString_2>;
}

export interface TestimonialsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionSort {
  fields: (Maybe<CoursesJsonConnectionSortByFieldsEnum>)[];

  order?: CoursesJsonConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterCoursesJson {
  id?: Maybe<CoursesJsonConnectionIdQueryString_2>;

  title?: Maybe<CoursesJsonConnectionTitleQueryString_2>;

  subtitle?: Maybe<CoursesJsonConnectionSubtitleQueryString_2>;

  description?: Maybe<CoursesJsonConnectionDescriptionQueryString_2>;

  notes?: Maybe<CoursesJsonConnectionNotesQueryList_2>;

  url?: Maybe<CoursesJsonConnectionUrlQueryString_2>;

  flavors?: Maybe<CoursesJsonConnectionFlavorsQueryList_2>;

  level?: Maybe<CoursesJsonConnectionLevelQueryInteger_2>;

  order?: Maybe<CoursesJsonConnectionOrderQueryInteger_2>;

  label?: Maybe<CoursesJsonConnectionLabelQueryString_2>;

  launchdate?: Maybe<CoursesJsonConnectionLaunchdateQueryString_2>;

  authors?: Maybe<CoursesJsonConnectionAuthorsQueryList_2>;

  products?: Maybe<CoursesJsonConnectionProductsQueryList_2>;

  publishedChapters?: Maybe<CoursesJsonConnectionPublishedChaptersQueryList_2>;

  chapters?: Maybe<CoursesJsonConnectionChaptersQueryList_2>;

  internal?: Maybe<CoursesJsonConnectionInternalInputObject_2>;

  descriptionHtmlSections?: Maybe<
    CoursesJsonConnectionDescriptionHtmlSectionsQueryList_2
  >;

  publishingSchedule?: Maybe<
    CoursesJsonConnectionPublishingScheduleQueryList_2
  >;
}

export interface CoursesJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionNotesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionFlavorsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionLevelQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionLabelQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionLaunchdateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionAuthorsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionProductsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonConnectionProductsInputObject_2>;
}

export interface CoursesJsonConnectionProductsInputObject_2 {
  id?: Maybe<CoursesJsonConnectionProductsIdQueryString_2>;

  name?: Maybe<CoursesJsonConnectionProductsNameQueryString_2>;

  description?: Maybe<CoursesJsonConnectionProductsDescriptionQueryString_2>;

  pricesale?: Maybe<CoursesJsonConnectionProductsPricesaleQueryInteger_2>;

  pricereg?: Maybe<CoursesJsonConnectionProductsPriceregQueryInteger_2>;

  licensesMin?: Maybe<CoursesJsonConnectionProductsLicensesMinQueryInteger_2>;

  licensesMax?: Maybe<CoursesJsonConnectionProductsLicensesMaxQueryInteger_2>;
}

export interface CoursesJsonConnectionProductsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionProductsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionProductsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionProductsPricesaleQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionProductsPriceregQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionProductsLicensesMinQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionProductsLicensesMaxQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionPublishedChaptersQueryList_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionChaptersQueryList_2 {
  elemMatch?: Maybe<CoursesJsonConnectionChaptersInputObject_2>;
}

export interface CoursesJsonConnectionChaptersInputObject_2 {
  id?: Maybe<CoursesJsonConnectionChaptersIdQueryInteger_2>;

  name?: Maybe<CoursesJsonConnectionChaptersNameQueryString_2>;

  lessons?: Maybe<CoursesJsonConnectionChaptersLessonsQueryList_2>;
}

export interface CoursesJsonConnectionChaptersIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionChaptersNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionChaptersLessonsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonConnectionChaptersLessonsInputObject_2>;
}

export interface CoursesJsonConnectionChaptersLessonsInputObject_2 {
  chapterId?: Maybe<
    CoursesJsonConnectionChaptersLessonsChapterIdQueryInteger_2
  >;

  id?: Maybe<CoursesJsonConnectionChaptersLessonsIdQueryString_2>;

  name?: Maybe<CoursesJsonConnectionChaptersLessonsNameQueryString_2>;

  isPreview?: Maybe<
    CoursesJsonConnectionChaptersLessonsIsPreviewQueryBoolean_2
  >;
}

export interface CoursesJsonConnectionChaptersLessonsChapterIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionChaptersLessonsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionChaptersLessonsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionChaptersLessonsIsPreviewQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface CoursesJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<
    CoursesJsonConnectionInternalContentDigestQueryString_2
  >;

  type?: Maybe<CoursesJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<CoursesJsonConnectionInternalOwnerQueryString_2>;
}

export interface CoursesJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionDescriptionHtmlSectionsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonConnectionDescriptionHtmlSectionsInputObject_2>;
}

export interface CoursesJsonConnectionDescriptionHtmlSectionsInputObject_2 {
  title?: Maybe<CoursesJsonConnectionDescriptionHtmlSectionsTitleQueryString_2>;

  descriptionHtml?: Maybe<
    CoursesJsonConnectionDescriptionHtmlSectionsDescriptionHtmlQueryString_2
  >;
}

export interface CoursesJsonConnectionDescriptionHtmlSectionsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionDescriptionHtmlSectionsDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonConnectionPublishingScheduleQueryList_2 {
  elemMatch?: Maybe<CoursesJsonConnectionPublishingScheduleInputObject_2>;
}

export interface CoursesJsonConnectionPublishingScheduleInputObject_2 {
  id?: Maybe<CoursesJsonConnectionPublishingScheduleIdQueryInteger_2>;

  date?: Maybe<CoursesJsonConnectionPublishingScheduleDateQueryString_2>;
}

export interface CoursesJsonConnectionPublishingScheduleIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonConnectionPublishingScheduleDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionSort {
  fields: (Maybe<BundlesJsonConnectionSortByFieldsEnum>)[];

  order?: BundlesJsonConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterBundlesJson {
  id?: Maybe<BundlesJsonConnectionIdQueryString_2>;

  title?: Maybe<BundlesJsonConnectionTitleQueryString_2>;

  subtitle?: Maybe<BundlesJsonConnectionSubtitleQueryString_2>;

  description?: Maybe<BundlesJsonConnectionDescriptionQueryString_2>;

  url?: Maybe<BundlesJsonConnectionUrlQueryString_2>;

  promototal?: Maybe<BundlesJsonConnectionPromototalQueryInteger_2>;

  promoremaining?: Maybe<BundlesJsonConnectionPromoremainingQueryInteger_2>;

  bundleLevel?: Maybe<BundlesJsonConnectionBundleLevelQueryInteger_2>;

  products?: Maybe<BundlesJsonConnectionProductsQueryList_2>;

  courseIds?: Maybe<BundlesJsonConnectionCourseIdsQueryList_2>;

  internal?: Maybe<BundlesJsonConnectionInternalInputObject_2>;
}

export interface BundlesJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionPromototalQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionPromoremainingQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionBundleLevelQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionProductsQueryList_2 {
  elemMatch?: Maybe<BundlesJsonConnectionProductsInputObject_2>;
}

export interface BundlesJsonConnectionProductsInputObject_2 {
  id?: Maybe<BundlesJsonConnectionProductsIdQueryString_2>;

  name?: Maybe<BundlesJsonConnectionProductsNameQueryString_2>;

  description?: Maybe<BundlesJsonConnectionProductsDescriptionQueryString_2>;

  pricesale?: Maybe<BundlesJsonConnectionProductsPricesaleQueryInteger_2>;

  pricereg?: Maybe<BundlesJsonConnectionProductsPriceregQueryInteger_2>;

  licensesMin?: Maybe<BundlesJsonConnectionProductsLicensesMinQueryInteger_2>;

  licensesMax?: Maybe<BundlesJsonConnectionProductsLicensesMaxQueryInteger_2>;
}

export interface BundlesJsonConnectionProductsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionProductsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionProductsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionProductsPricesaleQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionProductsPriceregQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionProductsLicensesMinQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionProductsLicensesMaxQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonConnectionCourseIdsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<
    BundlesJsonConnectionInternalContentDigestQueryString_2
  >;

  type?: Maybe<BundlesJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<BundlesJsonConnectionInternalOwnerQueryString_2>;
}

export interface BundlesJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[];

  order?: SitePageConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;

  path?: Maybe<SitePageConnectionPathQueryString_2>;

  component?: Maybe<SitePageConnectionComponentQueryString>;

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;

  context?: Maybe<SitePageConnectionContextInputObject>;

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;

  id?: Maybe<SitePageConnectionIdQueryString_2>;

  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextInputObject {
  courseUrl?: Maybe<SitePageConnectionContextCourseUrlQueryString>;

  trackId?: Maybe<SitePageConnectionContextTrackIdQueryString>;

  limit?: Maybe<SitePageConnectionContextLimitQueryInteger>;

  skip?: Maybe<SitePageConnectionContextSkipQueryInteger>;

  totalPages?: Maybe<SitePageConnectionContextTotalPagesQueryInteger>;

  currentPage?: Maybe<SitePageConnectionContextCurrentPageQueryInteger>;

  slug?: Maybe<SitePageConnectionContextSlugQueryString>;

  prevPostPath?: Maybe<SitePageConnectionContextPrevPostPathQueryString>;

  nextPostPath?: Maybe<SitePageConnectionContextNextPostPathQueryString>;

  posts?: Maybe<SitePageConnectionContextPostsInputObject>;

  post?: Maybe<SitePageConnectionContextPostQueryList>;

  tag?: Maybe<SitePageConnectionContextTagQueryString>;
}

export interface SitePageConnectionContextCourseUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextTrackIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextLimitQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextSkipQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextTotalPagesQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextCurrentPageQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPrevPostPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextNextPostPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsInputObject {
  NativeScript?: Maybe<SitePageConnectionContextPostsNativeScriptQueryList>;

  Tips_and_Tricks?: Maybe<SitePageConnectionContextPostsTipsAndTricksQueryList>;

  Tutorial?: Maybe<SitePageConnectionContextPostsTutorialQueryList>;

  Video?: Maybe<SitePageConnectionContextPostsVideoQueryList>;

  Courses?: Maybe<SitePageConnectionContextPostsCoursesQueryList>;

  Angular?: Maybe<SitePageConnectionContextPostsAngularQueryList>;

  Styling?: Maybe<SitePageConnectionContextPostsStylingQueryList>;

  Core?: Maybe<SitePageConnectionContextPostsCoreQueryList>;

  Authentication?: Maybe<SitePageConnectionContextPostsAuthenticationQueryList>;

  Authorization?: Maybe<SitePageConnectionContextPostsAuthorizationQueryList>;

  Enterprise?: Maybe<SitePageConnectionContextPostsEnterpriseQueryList>;

  UI?: Maybe<SitePageConnectionContextPostsUiQueryList>;

  Cordova?: Maybe<SitePageConnectionContextPostsCordovaQueryList>;

  Tip?: Maybe<SitePageConnectionContextPostsTipQueryList>;

  JavaScript?: Maybe<SitePageConnectionContextPostsJavaScriptQueryList>;

  TypeScript?: Maybe<SitePageConnectionContextPostsTypeScriptQueryList>;

  Vue?: Maybe<SitePageConnectionContextPostsVueQueryList>;

  I_Script_Native?: Maybe<SitePageConnectionContextPostsIScriptNativeQueryList>;

  Course?: Maybe<SitePageConnectionContextPostsCourseQueryList>;

  Android?: Maybe<SitePageConnectionContextPostsAndroidQueryList>;

  FAB?: Maybe<SitePageConnectionContextPostsFabQueryList>;

  Floating_Action_Button?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonQueryList
  >;

  Security?: Maybe<SitePageConnectionContextPostsSecurityQueryList>;

  iOS?: Maybe<SitePageConnectionContextPostsIosQueryList>;
}

export interface SitePageConnectionContextPostsNativeScriptQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsNativeScriptInputObject>;
}

export interface SitePageConnectionContextPostsNativeScriptInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsNativeScriptExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsNativeScriptHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsNativeScriptIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsNativeScriptTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsNativeScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsNativeScriptFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsNativeScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsTipsAndTricksInputObject>;
}

export interface SitePageConnectionContextPostsTipsAndTricksInputObject {
  excerpt?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksExcerptQueryString
  >;

  html?: Maybe<SitePageConnectionContextPostsTipsAndTricksHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsTipsAndTricksIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsTipsAndTricksExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsTipsAndTricksFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipsAndTricksFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsTutorialInputObject>;
}

export interface SitePageConnectionContextPostsTutorialInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsTutorialExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsTutorialHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsTutorialIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsTutorialTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsTutorialFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsTutorialExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsTutorialFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsTutorialFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsTutorialFrontmatterTagsQueryList>;

  path?: Maybe<
    SitePageConnectionContextPostsTutorialFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsTutorialFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTutorialFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsVideoInputObject>;
}

export interface SitePageConnectionContextPostsVideoInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsVideoExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsVideoHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsVideoIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsVideoTimeToReadQueryInteger>;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsVideoFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsVideoExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsVideoFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsVideoFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsVideoFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsVideoFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsVideoFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVideoFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsCoursesInputObject>;
}

export interface SitePageConnectionContextPostsCoursesInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsCoursesExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsCoursesHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsCoursesIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsCoursesTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsCoursesFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsCoursesExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsCoursesFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsCoursesFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsCoursesFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsCoursesFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsCoursesFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoursesFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsAngularInputObject>;
}

export interface SitePageConnectionContextPostsAngularInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsAngularExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsAngularHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsAngularIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsAngularTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsAngularFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsAngularExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsAngularFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsAngularFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsAngularFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsAngularFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsAngularFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsAngularFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsAngularFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAngularFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsStylingInputObject>;
}

export interface SitePageConnectionContextPostsStylingInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsStylingExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsStylingHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsStylingIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsStylingTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsStylingFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsStylingExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsStylingFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsStylingFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsStylingFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsStylingFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsStylingFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsStylingFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsStylingFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsStylingFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsCoreInputObject>;
}

export interface SitePageConnectionContextPostsCoreInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsCoreExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsCoreHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsCoreIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsCoreTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsCoreFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsCoreExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsCoreFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsCoreFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsCoreFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsCoreFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsCoreFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCoreFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsAuthenticationInputObject>;
}

export interface SitePageConnectionContextPostsAuthenticationInputObject {
  excerpt?: Maybe<
    SitePageConnectionContextPostsAuthenticationExcerptQueryString
  >;

  html?: Maybe<SitePageConnectionContextPostsAuthenticationHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsAuthenticationIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsAuthenticationTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsAuthenticationExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsAuthenticationFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthenticationFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsAuthorizationInputObject>;
}

export interface SitePageConnectionContextPostsAuthorizationInputObject {
  excerpt?: Maybe<
    SitePageConnectionContextPostsAuthorizationExcerptQueryString
  >;

  html?: Maybe<SitePageConnectionContextPostsAuthorizationHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsAuthorizationIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsAuthorizationTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsAuthorizationExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsAuthorizationFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAuthorizationFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsEnterpriseInputObject>;
}

export interface SitePageConnectionContextPostsEnterpriseInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsEnterpriseExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsEnterpriseHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsEnterpriseIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsEnterpriseTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsEnterpriseExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsEnterpriseFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsEnterpriseFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsUiInputObject>;
}

export interface SitePageConnectionContextPostsUiInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsUiExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsUiHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsUiIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsUiTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsUiFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsUiExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsUiFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsUiFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsUiFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsUiFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsUiFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsUiFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsUiFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsUiFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsCordovaInputObject>;
}

export interface SitePageConnectionContextPostsCordovaInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsCordovaExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsCordovaHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsCordovaIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsCordovaTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsCordovaFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsCordovaExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsCordovaFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsCordovaFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsCordovaFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsCordovaFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsCordovaFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCordovaFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsTipInputObject>;
}

export interface SitePageConnectionContextPostsTipInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsTipExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsTipHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsTipIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsTipTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsTipFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsTipExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsTipFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsTipFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsTipFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsTipFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsTipFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsTipFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsTipFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTipFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsJavaScriptInputObject>;
}

export interface SitePageConnectionContextPostsJavaScriptInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsJavaScriptExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsJavaScriptHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsJavaScriptIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsJavaScriptTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsJavaScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsJavaScriptFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsJavaScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsTypeScriptInputObject>;
}

export interface SitePageConnectionContextPostsTypeScriptInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsTypeScriptExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsTypeScriptHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsTypeScriptIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsTypeScriptTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsTypeScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsTypeScriptFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsTypeScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsVueInputObject>;
}

export interface SitePageConnectionContextPostsVueInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsVueExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsVueHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsVueIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsVueTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsVueFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsVueExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsVueFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsVueFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsVueFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsVueFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsVueFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsVueFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsVueFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsVueFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsIScriptNativeInputObject>;
}

export interface SitePageConnectionContextPostsIScriptNativeInputObject {
  excerpt?: Maybe<
    SitePageConnectionContextPostsIScriptNativeExcerptQueryString
  >;

  html?: Maybe<SitePageConnectionContextPostsIScriptNativeHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsIScriptNativeIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsIScriptNativeTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsIScriptNativeExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsIScriptNativeFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIScriptNativeFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsCourseInputObject>;
}

export interface SitePageConnectionContextPostsCourseInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsCourseExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsCourseHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsCourseIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsCourseTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsCourseFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsCourseExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsCourseFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsCourseFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsCourseFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsCourseFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsCourseFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsCourseFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsCourseFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsCourseFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsAndroidInputObject>;
}

export interface SitePageConnectionContextPostsAndroidInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsAndroidExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsAndroidHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsAndroidIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsAndroidTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsAndroidFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsAndroidExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsAndroidFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsAndroidFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsAndroidFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsAndroidFrontmatterPathQueryString>;

  title?: Maybe<
    SitePageConnectionContextPostsAndroidFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsAndroidFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsFabInputObject>;
}

export interface SitePageConnectionContextPostsFabInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsFabExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsFabHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsFabIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsFabTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsFabFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsFabExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsFabFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsFabFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsFabFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsFabFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsFabFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsFabFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsFabFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFabFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonQueryList {
  elemMatch?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonInputObject
  >;
}

export interface SitePageConnectionContextPostsFloatingActionButtonInputObject {
  excerpt?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonExcerptQueryString
  >;

  html?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonHtmlQueryString
  >;

  id?: Maybe<SitePageConnectionContextPostsFloatingActionButtonIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsFloatingActionButtonExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsFloatingActionButtonFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsFloatingActionButtonFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsSecurityInputObject>;
}

export interface SitePageConnectionContextPostsSecurityInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsSecurityExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsSecurityHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsSecurityIdQueryString>;

  timeToRead?: Maybe<
    SitePageConnectionContextPostsSecurityTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageConnectionContextPostsSecurityFrontmatterInputObject
  >;
}

export interface SitePageConnectionContextPostsSecurityExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsSecurityFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsSecurityFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsSecurityFrontmatterTagsQueryList>;

  path?: Maybe<
    SitePageConnectionContextPostsSecurityFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageConnectionContextPostsSecurityFrontmatterTitleQueryString
  >;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsSecurityFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostsIosInputObject>;
}

export interface SitePageConnectionContextPostsIosInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostsIosExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostsIosHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostsIosIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostsIosTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostsIosFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostsIosExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostsIosFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostsIosFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostsIosFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostsIosFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostsIosFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostsIosFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostsIosFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostsIosFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostQueryList {
  elemMatch?: Maybe<SitePageConnectionContextPostInputObject>;
}

export interface SitePageConnectionContextPostInputObject {
  excerpt?: Maybe<SitePageConnectionContextPostExcerptQueryString>;

  html?: Maybe<SitePageConnectionContextPostHtmlQueryString>;

  id?: Maybe<SitePageConnectionContextPostIdQueryString>;

  timeToRead?: Maybe<SitePageConnectionContextPostTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageConnectionContextPostFrontmatterInputObject>;
}

export interface SitePageConnectionContextPostExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionContextPostFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageConnectionContextPostFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageConnectionContextPostFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageConnectionContextPostFrontmatterTagsQueryList>;

  path?: Maybe<SitePageConnectionContextPostFrontmatterPathQueryString>;

  title?: Maybe<SitePageConnectionContextPostFrontmatterTitleQueryString>;
}

export interface SitePageConnectionContextPostFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextPostFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextTagQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;

  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>;

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>;

  output?: Maybe<SitePageConnectionPluginCreatorPluginOptionsOutputQueryString>;

  query?: Maybe<SitePageConnectionPluginCreatorPluginOptionsQueryQueryString>;

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger
  >;

  wrapperStyle?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  showCaptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean
  >;

  pathPrefix?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString
  >;

  withWebp?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean
  >;

  ignoreFileExtensions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList
  >;

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString
  >;

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString
  >;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  wrapperStyle?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;

  showCaptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean
  >;

  pathPrefix?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString
  >;

  withWebp?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean
  >;

  ignoreFileExtensions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOutputQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[];

  order?: SitePluginConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionIdQueryString_2>;

  name?: Maybe<SitePluginConnectionNameQueryString_2>;

  version?: Maybe<SitePluginConnectionVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>;

  output?: Maybe<SitePluginConnectionPluginOptionsOutputQueryString_2>;

  query?: Maybe<SitePluginConnectionPluginOptionsQueryQueryString_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2>;

  wrapperStyle?: Maybe<
    SitePluginConnectionPluginOptionsWrapperStyleQueryString_2
  >;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_2
  >;

  showCaptions?: Maybe<
    SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2
  >;

  pathPrefix?: Maybe<SitePluginConnectionPluginOptionsPathPrefixQueryString_2>;

  withWebp?: Maybe<SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2>;

  ignoreFileExtensions?: Maybe<
    SitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2
  >;

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<
    SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2
  >;

  pluginFilepath?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  maxWidth?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  wrapperStyle?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2
  >;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;

  showCaptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2
  >;

  pathPrefix?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2
  >;

  withWebp?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2
  >;

  ignoreFileExtensions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsOutputQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsQueryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[];

  order?: DirectoryConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>;

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;

  root?: Maybe<DirectoryConnectionRootQueryString_2>;

  dir?: Maybe<DirectoryConnectionDirQueryString_2>;

  base?: Maybe<DirectoryConnectionBaseQueryString_2>;

  ext?: Maybe<DirectoryConnectionExtQueryString_2>;

  name?: Maybe<DirectoryConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>;

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryConnectionInoQueryFloat_2>;

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionInoQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[];

  order?: FileConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>;

  internal?: Maybe<FileConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;

  extension?: Maybe<FileConnectionExtensionQueryString_2>;

  size?: Maybe<FileConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;

  root?: Maybe<FileConnectionRootQueryString_2>;

  dir?: Maybe<FileConnectionDirQueryString_2>;

  base?: Maybe<FileConnectionBaseQueryString_2>;

  ext?: Maybe<FileConnectionExtQueryString_2>;

  name?: Maybe<FileConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileConnectionDevQueryInteger_2>;

  mode?: Maybe<FileConnectionModeQueryInteger_2>;

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;

  uid?: Maybe<FileConnectionUidQueryInteger_2>;

  gid?: Maybe<FileConnectionGidQueryInteger_2>;

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>;

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<FileConnectionInoQueryFloat_2>;

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileConnectionAtimeQueryString_2>;

  mtime?: Maybe<FileConnectionMtimeQueryString_2>;

  ctime?: Maybe<FileConnectionCtimeQueryString_2>;

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_4>;
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<FileConnectionInternalTypeQueryString_2>;

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionInoQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DuotoneGradient {
  highlight: string;

  shadow: string;

  opacity?: Maybe<number>;
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>;

  turdSize?: Maybe<number>;

  alphaMax?: Maybe<number>;

  optCurve?: Maybe<boolean>;

  optTolerance?: Maybe<number>;

  threshold?: Maybe<number>;

  blackOnWhite?: Maybe<boolean>;

  color?: Maybe<string>;

  background?: Maybe<string>;
}

export interface ImageSharpConnectionSort {
  fields: (Maybe<ImageSharpConnectionSortByFieldsEnum>)[];

  order?: ImageSharpConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>;

  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_4>;

  resolutions?: Maybe<ResolutionsTypeName_4>;

  fluid?: Maybe<FluidTypeName_4>;

  sizes?: Maybe<SizesTypeName_4>;

  original?: Maybe<OriginalTypeName_4>;

  resize?: Maybe<ResizeTypeName_4>;
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>;

  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>;
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;

  width?: Maybe<FixedWidthQueryFloat_4>;

  height?: Maybe<FixedHeightQueryFloat_4>;

  src?: Maybe<FixedSrcQueryString_4>;

  srcSet?: Maybe<FixedSrcSetQueryString_4>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;

  originalName?: Maybe<FixedOriginalNameQueryString_4>;
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;

  width?: Maybe<ResolutionsWidthQueryFloat_4>;

  height?: Maybe<ResolutionsHeightQueryFloat_4>;

  src?: Maybe<ResolutionsSrcQueryString_4>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;

  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>;
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;

  src?: Maybe<FluidSrcQueryString_4>;

  srcSet?: Maybe<FluidSrcSetQueryString_4>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;

  sizes?: Maybe<FluidSizesQueryString_4>;

  originalImg?: Maybe<FluidOriginalImgQueryString_4>;

  originalName?: Maybe<FluidOriginalNameQueryString_4>;

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>;

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>;
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalImgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;

  src?: Maybe<SizesSrcQueryString_4>;

  srcSet?: Maybe<SizesSrcSetQueryString_4>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;

  sizes?: Maybe<SizesSizesQueryString_4>;

  originalImg?: Maybe<SizesOriginalImgQueryString_4>;

  originalName?: Maybe<SizesOriginalNameQueryString_4>;

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>;

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>;
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalImgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalTypeName_4 {
  width?: Maybe<OriginalWidthQueryFloat_4>;

  height?: Maybe<OriginalHeightQueryFloat_4>;

  src?: Maybe<OriginalSrcQueryString_4>;
}

export interface OriginalWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_4 {
  src?: Maybe<ResizeSrcQueryString_4>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;

  width?: Maybe<ResizeWidthQueryInt_4>;

  height?: Maybe<ResizeHeightQueryInt_4>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;

  originalName?: Maybe<ResizeOriginalNameQueryString_4>;
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionSort {
  fields: (Maybe<AuthorsJsonConnectionSortByFieldsEnum>)[];

  order?: AuthorsJsonConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterAuthorsJson {
  id?: Maybe<AuthorsJsonConnectionIdQueryString_2>;

  name?: Maybe<AuthorsJsonConnectionNameQueryString_2>;

  picture?: Maybe<AuthorsJsonConnectionPictureQueryString_2>;

  bio?: Maybe<AuthorsJsonConnectionBioQueryString_2>;

  biolong?: Maybe<AuthorsJsonConnectionBiolongQueryString_2>;

  title?: Maybe<AuthorsJsonConnectionTitleQueryString_2>;

  twitter?: Maybe<AuthorsJsonConnectionTwitterQueryString_2>;

  github?: Maybe<AuthorsJsonConnectionGithubQueryString_2>;

  types?: Maybe<AuthorsJsonConnectionTypesQueryList_2>;

  internal?: Maybe<AuthorsJsonConnectionInternalInputObject_2>;
}

export interface AuthorsJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionPictureQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionBioQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionBiolongQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionTwitterQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionGithubQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionTypesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<
    AuthorsJsonConnectionInternalContentDigestQueryString_2
  >;

  type?: Maybe<AuthorsJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<AuthorsJsonConnectionInternalOwnerQueryString_2>;
}

export interface AuthorsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[];

  order?: MarkdownRemarkConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>;

  excerpt?: Maybe<ExcerptQueryString_4>;

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>;

  fileAbsolutePath?: Maybe<
    MarkdownRemarkConnectionFileAbsolutePathQueryString_2
  >;

  html?: Maybe<HtmlQueryString_4>;

  headings?: Maybe<HeadingsQueryList_4>;

  timeToRead?: Maybe<TimeToReadQueryInt_4>;

  tableOfContents?: Maybe<TableOfContentsQueryString_4>;

  wordCount?: Maybe<WordCountTypeName_4>;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    MarkdownRemarkConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>;

  path?: Maybe<MarkdownRemarkConnectionFrontmatterPathQueryString_2>;

  author?: Maybe<MarkdownRemarkConnectionFrontmatterAuthorQueryString_2>;

  createdDate?: Maybe<
    MarkdownRemarkConnectionFrontmatterCreatedDateQueryString_2
  >;

  updatedDate?: Maybe<
    MarkdownRemarkConnectionFrontmatterUpdatedDateQueryString_2
  >;

  draft?: Maybe<MarkdownRemarkConnectionFrontmatterDraftQueryBoolean_2>;

  tags?: Maybe<MarkdownRemarkConnectionFrontmatterTagsQueryList_2>;

  image?: Maybe<MarkdownRemarkConnectionFrontmatterImageQueryString_2>;

  _PARENT?: Maybe<MarkdownRemarkConnectionFrontmatterParentQueryString_2>;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>;
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>;

  sentences?: Maybe<WordCountSentencesQueryInt_4>;

  words?: Maybe<WordCountWordsQueryInt_4>;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonConnectionSort {
  fields: (Maybe<TracksJsonConnectionSortByFieldsEnum>)[];

  order?: TracksJsonConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterTracksJson {
  id?: Maybe<TracksJsonConnectionIdQueryString_2>;

  title?: Maybe<TracksJsonConnectionTitleQueryString_2>;

  imageSrc?: Maybe<TracksJsonConnectionImageSrcQueryString_2>;

  description?: Maybe<TracksJsonConnectionDescriptionQueryString_2>;

  bundles?: Maybe<TracksJsonConnectionBundlesQueryList_2>;

  levels?: Maybe<TracksJsonConnectionLevelsQueryList_2>;

  internal?: Maybe<TracksJsonConnectionInternalInputObject_2>;
}

export interface TracksJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionImageSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionBundlesQueryList_2 {
  elemMatch?: Maybe<TracksJsonConnectionBundlesInputObject_2>;
}

export interface TracksJsonConnectionBundlesInputObject_2 {
  id?: Maybe<TracksJsonConnectionBundlesIdQueryString_2>;

  order?: Maybe<TracksJsonConnectionBundlesOrderQueryInteger_2>;

  description?: Maybe<TracksJsonConnectionBundlesDescriptionQueryString_2>;
}

export interface TracksJsonConnectionBundlesIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionBundlesOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonConnectionBundlesDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionLevelsQueryList_2 {
  elemMatch?: Maybe<TracksJsonConnectionLevelsInputObject_2>;
}

export interface TracksJsonConnectionLevelsInputObject_2 {
  levelId?: Maybe<TracksJsonConnectionLevelsLevelIdQueryInteger_2>;

  title?: Maybe<TracksJsonConnectionLevelsTitleQueryString_2>;

  description?: Maybe<TracksJsonConnectionLevelsDescriptionQueryString_2>;
}

export interface TracksJsonConnectionLevelsLevelIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonConnectionLevelsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionLevelsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<TracksJsonConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<TracksJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<TracksJsonConnectionInternalOwnerQueryString_2>;
}

export interface TracksJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonImgQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonTwitterQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TestimonialsJsonQuoteHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonTitleHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonInternalInputObject_2 {
  contentDigest?: Maybe<TestimonialsJsonInternalContentDigestQueryString_2>;

  type?: Maybe<TestimonialsJsonInternalTypeQueryString_2>;

  owner?: Maybe<TestimonialsJsonInternalOwnerQueryString_2>;
}

export interface TestimonialsJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TestimonialsJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonNotesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonFlavorsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonLevelQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonLabelQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonLaunchdateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonAuthorsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonProductsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonProductsInputObject_2>;
}

export interface CoursesJsonProductsInputObject_2 {
  id?: Maybe<CoursesJsonProductsIdQueryString_2>;

  name?: Maybe<CoursesJsonProductsNameQueryString_2>;

  description?: Maybe<CoursesJsonProductsDescriptionQueryString_2>;

  pricesale?: Maybe<CoursesJsonProductsPricesaleQueryInteger_2>;

  pricereg?: Maybe<CoursesJsonProductsPriceregQueryInteger_2>;

  licensesMin?: Maybe<CoursesJsonProductsLicensesMinQueryInteger_2>;

  licensesMax?: Maybe<CoursesJsonProductsLicensesMaxQueryInteger_2>;
}

export interface CoursesJsonProductsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonProductsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonProductsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonProductsPricesaleQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonProductsPriceregQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonProductsLicensesMinQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonProductsLicensesMaxQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonPublishedChaptersQueryList_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonChaptersQueryList_2 {
  elemMatch?: Maybe<CoursesJsonChaptersInputObject_2>;
}

export interface CoursesJsonChaptersInputObject_2 {
  id?: Maybe<CoursesJsonChaptersIdQueryInteger_2>;

  name?: Maybe<CoursesJsonChaptersNameQueryString_2>;

  lessons?: Maybe<CoursesJsonChaptersLessonsQueryList_2>;
}

export interface CoursesJsonChaptersIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonChaptersNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonChaptersLessonsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonChaptersLessonsInputObject_2>;
}

export interface CoursesJsonChaptersLessonsInputObject_2 {
  chapterId?: Maybe<CoursesJsonChaptersLessonsChapterIdQueryInteger_2>;

  id?: Maybe<CoursesJsonChaptersLessonsIdQueryString_2>;

  name?: Maybe<CoursesJsonChaptersLessonsNameQueryString_2>;

  isPreview?: Maybe<CoursesJsonChaptersLessonsIsPreviewQueryBoolean_2>;
}

export interface CoursesJsonChaptersLessonsChapterIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonChaptersLessonsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonChaptersLessonsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonChaptersLessonsIsPreviewQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface CoursesJsonInternalInputObject_2 {
  contentDigest?: Maybe<CoursesJsonInternalContentDigestQueryString_2>;

  type?: Maybe<CoursesJsonInternalTypeQueryString_2>;

  owner?: Maybe<CoursesJsonInternalOwnerQueryString_2>;
}

export interface CoursesJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonDescriptionHtmlSectionsQueryList_2 {
  elemMatch?: Maybe<CoursesJsonDescriptionHtmlSectionsInputObject_2>;
}

export interface CoursesJsonDescriptionHtmlSectionsInputObject_2 {
  title?: Maybe<CoursesJsonDescriptionHtmlSectionsTitleQueryString_2>;

  descriptionHtml?: Maybe<
    CoursesJsonDescriptionHtmlSectionsDescriptionHtmlQueryString_2
  >;
}

export interface CoursesJsonDescriptionHtmlSectionsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonDescriptionHtmlSectionsDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface CoursesJsonPublishingScheduleQueryList_2 {
  elemMatch?: Maybe<CoursesJsonPublishingScheduleInputObject_2>;
}

export interface CoursesJsonPublishingScheduleInputObject_2 {
  id?: Maybe<CoursesJsonPublishingScheduleIdQueryInteger_2>;

  date?: Maybe<CoursesJsonPublishingScheduleDateQueryString_2>;
}

export interface CoursesJsonPublishingScheduleIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface CoursesJsonPublishingScheduleDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonPromototalQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonPromoremainingQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonBundleLevelQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonProductsQueryList_2 {
  elemMatch?: Maybe<BundlesJsonProductsInputObject_2>;
}

export interface BundlesJsonProductsInputObject_2 {
  id?: Maybe<BundlesJsonProductsIdQueryString_2>;

  name?: Maybe<BundlesJsonProductsNameQueryString_2>;

  description?: Maybe<BundlesJsonProductsDescriptionQueryString_2>;

  pricesale?: Maybe<BundlesJsonProductsPricesaleQueryInteger_2>;

  pricereg?: Maybe<BundlesJsonProductsPriceregQueryInteger_2>;

  licensesMin?: Maybe<BundlesJsonProductsLicensesMinQueryInteger_2>;

  licensesMax?: Maybe<BundlesJsonProductsLicensesMaxQueryInteger_2>;
}

export interface BundlesJsonProductsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonProductsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonProductsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonProductsPricesaleQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonProductsPriceregQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonProductsLicensesMinQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonProductsLicensesMaxQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface BundlesJsonCourseIdsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonInternalInputObject_2 {
  contentDigest?: Maybe<BundlesJsonInternalContentDigestQueryString_2>;

  type?: Maybe<BundlesJsonInternalTypeQueryString_2>;

  owner?: Maybe<BundlesJsonInternalOwnerQueryString_2>;
}

export interface BundlesJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface BundlesJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextInputObject {
  courseUrl?: Maybe<SitePageContextCourseUrlQueryString>;

  trackId?: Maybe<SitePageContextTrackIdQueryString>;

  limit?: Maybe<SitePageContextLimitQueryInteger>;

  skip?: Maybe<SitePageContextSkipQueryInteger>;

  totalPages?: Maybe<SitePageContextTotalPagesQueryInteger>;

  currentPage?: Maybe<SitePageContextCurrentPageQueryInteger>;

  slug?: Maybe<SitePageContextSlugQueryString>;

  prevPostPath?: Maybe<SitePageContextPrevPostPathQueryString>;

  nextPostPath?: Maybe<SitePageContextNextPostPathQueryString>;

  posts?: Maybe<SitePageContextPostsInputObject>;

  post?: Maybe<SitePageContextPostQueryList>;

  tag?: Maybe<SitePageContextTagQueryString>;
}

export interface SitePageContextCourseUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextTrackIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextLimitQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextSkipQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextTotalPagesQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextCurrentPageQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPrevPostPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextNextPostPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsInputObject {
  NativeScript?: Maybe<SitePageContextPostsNativeScriptQueryList>;

  Tips_and_Tricks?: Maybe<SitePageContextPostsTipsAndTricksQueryList>;

  Tutorial?: Maybe<SitePageContextPostsTutorialQueryList>;

  Video?: Maybe<SitePageContextPostsVideoQueryList>;

  Courses?: Maybe<SitePageContextPostsCoursesQueryList>;

  Angular?: Maybe<SitePageContextPostsAngularQueryList>;

  Styling?: Maybe<SitePageContextPostsStylingQueryList>;

  Core?: Maybe<SitePageContextPostsCoreQueryList>;

  Authentication?: Maybe<SitePageContextPostsAuthenticationQueryList>;

  Authorization?: Maybe<SitePageContextPostsAuthorizationQueryList>;

  Enterprise?: Maybe<SitePageContextPostsEnterpriseQueryList>;

  UI?: Maybe<SitePageContextPostsUiQueryList>;

  Cordova?: Maybe<SitePageContextPostsCordovaQueryList>;

  Tip?: Maybe<SitePageContextPostsTipQueryList>;

  JavaScript?: Maybe<SitePageContextPostsJavaScriptQueryList>;

  TypeScript?: Maybe<SitePageContextPostsTypeScriptQueryList>;

  Vue?: Maybe<SitePageContextPostsVueQueryList>;

  I_Script_Native?: Maybe<SitePageContextPostsIScriptNativeQueryList>;

  Course?: Maybe<SitePageContextPostsCourseQueryList>;

  Android?: Maybe<SitePageContextPostsAndroidQueryList>;

  FAB?: Maybe<SitePageContextPostsFabQueryList>;

  Floating_Action_Button?: Maybe<
    SitePageContextPostsFloatingActionButtonQueryList
  >;

  Security?: Maybe<SitePageContextPostsSecurityQueryList>;

  iOS?: Maybe<SitePageContextPostsIosQueryList>;
}

export interface SitePageContextPostsNativeScriptQueryList {
  elemMatch?: Maybe<SitePageContextPostsNativeScriptInputObject>;
}

export interface SitePageContextPostsNativeScriptInputObject {
  excerpt?: Maybe<SitePageContextPostsNativeScriptExcerptQueryString>;

  html?: Maybe<SitePageContextPostsNativeScriptHtmlQueryString>;

  id?: Maybe<SitePageContextPostsNativeScriptIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsNativeScriptTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsNativeScriptFrontmatterInputObject>;
}

export interface SitePageContextPostsNativeScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsNativeScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsNativeScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsNativeScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsNativeScriptFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsNativeScriptFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsNativeScriptFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsNativeScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsNativeScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksQueryList {
  elemMatch?: Maybe<SitePageContextPostsTipsAndTricksInputObject>;
}

export interface SitePageContextPostsTipsAndTricksInputObject {
  excerpt?: Maybe<SitePageContextPostsTipsAndTricksExcerptQueryString>;

  html?: Maybe<SitePageContextPostsTipsAndTricksHtmlQueryString>;

  id?: Maybe<SitePageContextPostsTipsAndTricksIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsTipsAndTricksTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsTipsAndTricksFrontmatterInputObject>;
}

export interface SitePageContextPostsTipsAndTricksExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsTipsAndTricksFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsTipsAndTricksFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsTipsAndTricksFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsTipsAndTricksFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipsAndTricksFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialQueryList {
  elemMatch?: Maybe<SitePageContextPostsTutorialInputObject>;
}

export interface SitePageContextPostsTutorialInputObject {
  excerpt?: Maybe<SitePageContextPostsTutorialExcerptQueryString>;

  html?: Maybe<SitePageContextPostsTutorialHtmlQueryString>;

  id?: Maybe<SitePageContextPostsTutorialIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsTutorialTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsTutorialFrontmatterInputObject>;
}

export interface SitePageContextPostsTutorialExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsTutorialFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsTutorialFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsTutorialFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsTutorialFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsTutorialFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsTutorialFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsTutorialFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTutorialFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoQueryList {
  elemMatch?: Maybe<SitePageContextPostsVideoInputObject>;
}

export interface SitePageContextPostsVideoInputObject {
  excerpt?: Maybe<SitePageContextPostsVideoExcerptQueryString>;

  html?: Maybe<SitePageContextPostsVideoHtmlQueryString>;

  id?: Maybe<SitePageContextPostsVideoIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsVideoTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsVideoFrontmatterInputObject>;
}

export interface SitePageContextPostsVideoExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsVideoFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsVideoFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsVideoFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsVideoFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsVideoFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsVideoFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsVideoFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVideoFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesQueryList {
  elemMatch?: Maybe<SitePageContextPostsCoursesInputObject>;
}

export interface SitePageContextPostsCoursesInputObject {
  excerpt?: Maybe<SitePageContextPostsCoursesExcerptQueryString>;

  html?: Maybe<SitePageContextPostsCoursesHtmlQueryString>;

  id?: Maybe<SitePageContextPostsCoursesIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsCoursesTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsCoursesFrontmatterInputObject>;
}

export interface SitePageContextPostsCoursesExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsCoursesFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsCoursesFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsCoursesFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsCoursesFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsCoursesFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsCoursesFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsCoursesFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoursesFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularQueryList {
  elemMatch?: Maybe<SitePageContextPostsAngularInputObject>;
}

export interface SitePageContextPostsAngularInputObject {
  excerpt?: Maybe<SitePageContextPostsAngularExcerptQueryString>;

  html?: Maybe<SitePageContextPostsAngularHtmlQueryString>;

  id?: Maybe<SitePageContextPostsAngularIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsAngularTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsAngularFrontmatterInputObject>;
}

export interface SitePageContextPostsAngularExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsAngularFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsAngularFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsAngularFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsAngularFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsAngularFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsAngularFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsAngularFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAngularFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingQueryList {
  elemMatch?: Maybe<SitePageContextPostsStylingInputObject>;
}

export interface SitePageContextPostsStylingInputObject {
  excerpt?: Maybe<SitePageContextPostsStylingExcerptQueryString>;

  html?: Maybe<SitePageContextPostsStylingHtmlQueryString>;

  id?: Maybe<SitePageContextPostsStylingIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsStylingTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsStylingFrontmatterInputObject>;
}

export interface SitePageContextPostsStylingExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsStylingFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsStylingFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsStylingFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsStylingFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsStylingFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsStylingFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsStylingFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsStylingFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreQueryList {
  elemMatch?: Maybe<SitePageContextPostsCoreInputObject>;
}

export interface SitePageContextPostsCoreInputObject {
  excerpt?: Maybe<SitePageContextPostsCoreExcerptQueryString>;

  html?: Maybe<SitePageContextPostsCoreHtmlQueryString>;

  id?: Maybe<SitePageContextPostsCoreIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsCoreTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsCoreFrontmatterInputObject>;
}

export interface SitePageContextPostsCoreExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsCoreFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsCoreFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsCoreFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsCoreFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsCoreFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsCoreFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsCoreFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCoreFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationQueryList {
  elemMatch?: Maybe<SitePageContextPostsAuthenticationInputObject>;
}

export interface SitePageContextPostsAuthenticationInputObject {
  excerpt?: Maybe<SitePageContextPostsAuthenticationExcerptQueryString>;

  html?: Maybe<SitePageContextPostsAuthenticationHtmlQueryString>;

  id?: Maybe<SitePageContextPostsAuthenticationIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsAuthenticationTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsAuthenticationFrontmatterInputObject>;
}

export interface SitePageContextPostsAuthenticationExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsAuthenticationFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsAuthenticationFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsAuthenticationFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsAuthenticationFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsAuthenticationFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsAuthenticationFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsAuthenticationFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthenticationFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationQueryList {
  elemMatch?: Maybe<SitePageContextPostsAuthorizationInputObject>;
}

export interface SitePageContextPostsAuthorizationInputObject {
  excerpt?: Maybe<SitePageContextPostsAuthorizationExcerptQueryString>;

  html?: Maybe<SitePageContextPostsAuthorizationHtmlQueryString>;

  id?: Maybe<SitePageContextPostsAuthorizationIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsAuthorizationTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsAuthorizationFrontmatterInputObject>;
}

export interface SitePageContextPostsAuthorizationExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsAuthorizationFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsAuthorizationFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsAuthorizationFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsAuthorizationFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsAuthorizationFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsAuthorizationFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsAuthorizationFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAuthorizationFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseQueryList {
  elemMatch?: Maybe<SitePageContextPostsEnterpriseInputObject>;
}

export interface SitePageContextPostsEnterpriseInputObject {
  excerpt?: Maybe<SitePageContextPostsEnterpriseExcerptQueryString>;

  html?: Maybe<SitePageContextPostsEnterpriseHtmlQueryString>;

  id?: Maybe<SitePageContextPostsEnterpriseIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsEnterpriseTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsEnterpriseFrontmatterInputObject>;
}

export interface SitePageContextPostsEnterpriseExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsEnterpriseFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsEnterpriseFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsEnterpriseFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsEnterpriseFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsEnterpriseFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsEnterpriseFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsEnterpriseFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsEnterpriseFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiQueryList {
  elemMatch?: Maybe<SitePageContextPostsUiInputObject>;
}

export interface SitePageContextPostsUiInputObject {
  excerpt?: Maybe<SitePageContextPostsUiExcerptQueryString>;

  html?: Maybe<SitePageContextPostsUiHtmlQueryString>;

  id?: Maybe<SitePageContextPostsUiIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsUiTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsUiFrontmatterInputObject>;
}

export interface SitePageContextPostsUiExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsUiFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostsUiFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostsUiFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostsUiFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsUiFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsUiFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsUiFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsUiFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaQueryList {
  elemMatch?: Maybe<SitePageContextPostsCordovaInputObject>;
}

export interface SitePageContextPostsCordovaInputObject {
  excerpt?: Maybe<SitePageContextPostsCordovaExcerptQueryString>;

  html?: Maybe<SitePageContextPostsCordovaHtmlQueryString>;

  id?: Maybe<SitePageContextPostsCordovaIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsCordovaTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsCordovaFrontmatterInputObject>;
}

export interface SitePageContextPostsCordovaExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsCordovaFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsCordovaFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsCordovaFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsCordovaFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsCordovaFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsCordovaFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsCordovaFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCordovaFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipQueryList {
  elemMatch?: Maybe<SitePageContextPostsTipInputObject>;
}

export interface SitePageContextPostsTipInputObject {
  excerpt?: Maybe<SitePageContextPostsTipExcerptQueryString>;

  html?: Maybe<SitePageContextPostsTipHtmlQueryString>;

  id?: Maybe<SitePageContextPostsTipIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsTipTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsTipFrontmatterInputObject>;
}

export interface SitePageContextPostsTipExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsTipFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostsTipFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostsTipFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostsTipFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsTipFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsTipFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsTipFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTipFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptQueryList {
  elemMatch?: Maybe<SitePageContextPostsJavaScriptInputObject>;
}

export interface SitePageContextPostsJavaScriptInputObject {
  excerpt?: Maybe<SitePageContextPostsJavaScriptExcerptQueryString>;

  html?: Maybe<SitePageContextPostsJavaScriptHtmlQueryString>;

  id?: Maybe<SitePageContextPostsJavaScriptIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsJavaScriptTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsJavaScriptFrontmatterInputObject>;
}

export interface SitePageContextPostsJavaScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsJavaScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsJavaScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsJavaScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsJavaScriptFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsJavaScriptFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsJavaScriptFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsJavaScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsJavaScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptQueryList {
  elemMatch?: Maybe<SitePageContextPostsTypeScriptInputObject>;
}

export interface SitePageContextPostsTypeScriptInputObject {
  excerpt?: Maybe<SitePageContextPostsTypeScriptExcerptQueryString>;

  html?: Maybe<SitePageContextPostsTypeScriptHtmlQueryString>;

  id?: Maybe<SitePageContextPostsTypeScriptIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsTypeScriptTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsTypeScriptFrontmatterInputObject>;
}

export interface SitePageContextPostsTypeScriptExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsTypeScriptFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsTypeScriptFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsTypeScriptFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsTypeScriptFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsTypeScriptFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsTypeScriptFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsTypeScriptFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsTypeScriptFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueQueryList {
  elemMatch?: Maybe<SitePageContextPostsVueInputObject>;
}

export interface SitePageContextPostsVueInputObject {
  excerpt?: Maybe<SitePageContextPostsVueExcerptQueryString>;

  html?: Maybe<SitePageContextPostsVueHtmlQueryString>;

  id?: Maybe<SitePageContextPostsVueIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsVueTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsVueFrontmatterInputObject>;
}

export interface SitePageContextPostsVueExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsVueFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostsVueFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostsVueFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostsVueFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsVueFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsVueFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsVueFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsVueFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeQueryList {
  elemMatch?: Maybe<SitePageContextPostsIScriptNativeInputObject>;
}

export interface SitePageContextPostsIScriptNativeInputObject {
  excerpt?: Maybe<SitePageContextPostsIScriptNativeExcerptQueryString>;

  html?: Maybe<SitePageContextPostsIScriptNativeHtmlQueryString>;

  id?: Maybe<SitePageContextPostsIScriptNativeIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsIScriptNativeTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsIScriptNativeFrontmatterInputObject>;
}

export interface SitePageContextPostsIScriptNativeExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsIScriptNativeFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsIScriptNativeFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsIScriptNativeFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsIScriptNativeFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsIScriptNativeFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIScriptNativeFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseQueryList {
  elemMatch?: Maybe<SitePageContextPostsCourseInputObject>;
}

export interface SitePageContextPostsCourseInputObject {
  excerpt?: Maybe<SitePageContextPostsCourseExcerptQueryString>;

  html?: Maybe<SitePageContextPostsCourseHtmlQueryString>;

  id?: Maybe<SitePageContextPostsCourseIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsCourseTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsCourseFrontmatterInputObject>;
}

export interface SitePageContextPostsCourseExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsCourseFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsCourseFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsCourseFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsCourseFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsCourseFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsCourseFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsCourseFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsCourseFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidQueryList {
  elemMatch?: Maybe<SitePageContextPostsAndroidInputObject>;
}

export interface SitePageContextPostsAndroidInputObject {
  excerpt?: Maybe<SitePageContextPostsAndroidExcerptQueryString>;

  html?: Maybe<SitePageContextPostsAndroidHtmlQueryString>;

  id?: Maybe<SitePageContextPostsAndroidIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsAndroidTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsAndroidFrontmatterInputObject>;
}

export interface SitePageContextPostsAndroidExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsAndroidFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsAndroidFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsAndroidFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsAndroidFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsAndroidFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsAndroidFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsAndroidFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsAndroidFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabQueryList {
  elemMatch?: Maybe<SitePageContextPostsFabInputObject>;
}

export interface SitePageContextPostsFabInputObject {
  excerpt?: Maybe<SitePageContextPostsFabExcerptQueryString>;

  html?: Maybe<SitePageContextPostsFabHtmlQueryString>;

  id?: Maybe<SitePageContextPostsFabIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsFabTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsFabFrontmatterInputObject>;
}

export interface SitePageContextPostsFabExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsFabFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostsFabFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostsFabFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostsFabFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsFabFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsFabFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsFabFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFabFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonQueryList {
  elemMatch?: Maybe<SitePageContextPostsFloatingActionButtonInputObject>;
}

export interface SitePageContextPostsFloatingActionButtonInputObject {
  excerpt?: Maybe<SitePageContextPostsFloatingActionButtonExcerptQueryString>;

  html?: Maybe<SitePageContextPostsFloatingActionButtonHtmlQueryString>;

  id?: Maybe<SitePageContextPostsFloatingActionButtonIdQueryString>;

  timeToRead?: Maybe<
    SitePageContextPostsFloatingActionButtonTimeToReadQueryInteger
  >;

  frontmatter?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterInputObject
  >;
}

export interface SitePageContextPostsFloatingActionButtonExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterTagsQueryList
  >;

  path?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterPathQueryString
  >;

  title?: Maybe<
    SitePageContextPostsFloatingActionButtonFrontmatterTitleQueryString
  >;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsFloatingActionButtonFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityQueryList {
  elemMatch?: Maybe<SitePageContextPostsSecurityInputObject>;
}

export interface SitePageContextPostsSecurityInputObject {
  excerpt?: Maybe<SitePageContextPostsSecurityExcerptQueryString>;

  html?: Maybe<SitePageContextPostsSecurityHtmlQueryString>;

  id?: Maybe<SitePageContextPostsSecurityIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsSecurityTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsSecurityFrontmatterInputObject>;
}

export interface SitePageContextPostsSecurityExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsSecurityFrontmatterInputObject {
  createdDate?: Maybe<
    SitePageContextPostsSecurityFrontmatterCreatedDateQueryString
  >;

  updatedDate?: Maybe<
    SitePageContextPostsSecurityFrontmatterUpdatedDateQueryString
  >;

  tags?: Maybe<SitePageContextPostsSecurityFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsSecurityFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsSecurityFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsSecurityFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsSecurityFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosQueryList {
  elemMatch?: Maybe<SitePageContextPostsIosInputObject>;
}

export interface SitePageContextPostsIosInputObject {
  excerpt?: Maybe<SitePageContextPostsIosExcerptQueryString>;

  html?: Maybe<SitePageContextPostsIosHtmlQueryString>;

  id?: Maybe<SitePageContextPostsIosIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostsIosTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostsIosFrontmatterInputObject>;
}

export interface SitePageContextPostsIosExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostsIosFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostsIosFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostsIosFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostsIosFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostsIosFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostsIosFrontmatterTitleQueryString>;
}

export interface SitePageContextPostsIosFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostsIosFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostQueryList {
  elemMatch?: Maybe<SitePageContextPostInputObject>;
}

export interface SitePageContextPostInputObject {
  excerpt?: Maybe<SitePageContextPostExcerptQueryString>;

  html?: Maybe<SitePageContextPostHtmlQueryString>;

  id?: Maybe<SitePageContextPostIdQueryString>;

  timeToRead?: Maybe<SitePageContextPostTimeToReadQueryInteger>;

  frontmatter?: Maybe<SitePageContextPostFrontmatterInputObject>;
}

export interface SitePageContextPostExcerptQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostHtmlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostTimeToReadQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageContextPostFrontmatterInputObject {
  createdDate?: Maybe<SitePageContextPostFrontmatterCreatedDateQueryString>;

  updatedDate?: Maybe<SitePageContextPostFrontmatterUpdatedDateQueryString>;

  tags?: Maybe<SitePageContextPostFrontmatterTagsQueryList>;

  path?: Maybe<SitePageContextPostFrontmatterPathQueryString>;

  title?: Maybe<SitePageContextPostFrontmatterTitleQueryString>;
}

export interface SitePageContextPostFrontmatterCreatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostFrontmatterUpdatedDateQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostFrontmatterTagsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostFrontmatterPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextPostFrontmatterTitleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextTagQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorIdQueryString>;

  name?: Maybe<SitePagePluginCreatorNameQueryString>;

  version?: Maybe<SitePagePluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;

  parent?: Maybe<SitePagePluginCreatorParentQueryString>;

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>;

  output?: Maybe<SitePagePluginCreatorPluginOptionsOutputQueryString>;

  query?: Maybe<SitePagePluginCreatorPluginOptionsQueryQueryString>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger>;

  wrapperStyle?: Maybe<
    SitePagePluginCreatorPluginOptionsWrapperStyleQueryString
  >;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  showCaptions?: Maybe<
    SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean
  >;

  pathPrefix?: Maybe<SitePagePluginCreatorPluginOptionsPathPrefixQueryString>;

  withWebp?: Maybe<SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean>;

  ignoreFileExtensions?: Maybe<
    SitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList
  >;

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>;

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>;

  pluginOptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  maxWidth?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  wrapperStyle?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString
  >;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;

  showCaptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean
  >;

  pathPrefix?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString
  >;

  withWebp?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean
  >;

  ignoreFileExtensions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsOutputQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsQueryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageInternalDescriptionQueryString>;

  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>;

  output?: Maybe<SitePluginPluginOptionsOutputQueryString_2>;

  query?: Maybe<SitePluginPluginOptionsQueryQueryString_2>;

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  maxWidth?: Maybe<SitePluginPluginOptionsMaxWidthQueryInteger_2>;

  wrapperStyle?: Maybe<SitePluginPluginOptionsWrapperStyleQueryString_2>;

  backgroundColor?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>;

  showCaptions?: Maybe<SitePluginPluginOptionsShowCaptionsQueryBoolean_2>;

  pathPrefix?: Maybe<SitePluginPluginOptionsPathPrefixQueryString_2>;

  withWebp?: Maybe<SitePluginPluginOptionsWithWebpQueryBoolean_2>;

  ignoreFileExtensions?: Maybe<
    SitePluginPluginOptionsIgnoreFileExtensionsQueryList_2
  >;

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  maxWidth?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  wrapperStyle?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2
  >;

  backgroundColor?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;

  showCaptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2
  >;

  pathPrefix?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2
  >;

  withWebp?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2
  >;

  ignoreFileExtensions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2
  >;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsOutputQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsQueryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsWithWebpQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataInputObject_2 {
  siteName?: Maybe<SiteSiteMetadataSiteNameQueryString_2>;

  siteUrl?: Maybe<SiteSiteMetadataSiteUrlQueryString_2>;
}

export interface SiteSiteMetadataSiteNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataSiteUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;

  type?: Maybe<SiteInternalTypeQueryString_2>;

  owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryInternalTypeQueryString_2>;

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryInoQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;

  type?: Maybe<FileInternalTypeQueryString_2>;

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;

  description?: Maybe<FileInternalDescriptionQueryString_2>;

  owner?: Maybe<FileInternalOwnerQueryString_2>;
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileInoQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>;

  type?: Maybe<ImageSharpInternalTypeQueryString_2>;

  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>;
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;

  width?: Maybe<FixedWidthQueryFloat_3>;

  height?: Maybe<FixedHeightQueryFloat_3>;

  src?: Maybe<FixedSrcQueryString_3>;

  srcSet?: Maybe<FixedSrcSetQueryString_3>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;

  originalName?: Maybe<FixedOriginalNameQueryString_3>;
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;

  width?: Maybe<ResolutionsWidthQueryFloat_3>;

  height?: Maybe<ResolutionsHeightQueryFloat_3>;

  src?: Maybe<ResolutionsSrcQueryString_3>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;

  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>;
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;

  src?: Maybe<FluidSrcQueryString_3>;

  srcSet?: Maybe<FluidSrcSetQueryString_3>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;

  sizes?: Maybe<FluidSizesQueryString_3>;

  originalImg?: Maybe<FluidOriginalImgQueryString_3>;

  originalName?: Maybe<FluidOriginalNameQueryString_3>;

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>;

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>;
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalImgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;

  src?: Maybe<SizesSrcQueryString_3>;

  srcSet?: Maybe<SizesSrcSetQueryString_3>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;

  sizes?: Maybe<SizesSizesQueryString_3>;

  originalImg?: Maybe<SizesOriginalImgQueryString_3>;

  originalName?: Maybe<SizesOriginalNameQueryString_3>;

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>;

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>;
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalImgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalTypeName_3 {
  width?: Maybe<OriginalWidthQueryFloat_3>;

  height?: Maybe<OriginalHeightQueryFloat_3>;

  src?: Maybe<OriginalSrcQueryString_3>;
}

export interface OriginalWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_3 {
  src?: Maybe<ResizeSrcQueryString_3>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;

  width?: Maybe<ResizeWidthQueryInt_3>;

  height?: Maybe<ResizeHeightQueryInt_3>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;

  originalName?: Maybe<ResizeOriginalNameQueryString_3>;
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonPictureQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonBioQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonBiolongQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonTwitterQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonGithubQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonTypesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonInternalInputObject_2 {
  contentDigest?: Maybe<AuthorsJsonInternalContentDigestQueryString_2>;

  type?: Maybe<AuthorsJsonInternalTypeQueryString_2>;

  owner?: Maybe<AuthorsJsonInternalOwnerQueryString_2>;
}

export interface AuthorsJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface AuthorsJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>;

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>;

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>;

  path?: Maybe<MarkdownRemarkFrontmatterPathQueryString_2>;

  author?: Maybe<MarkdownRemarkFrontmatterAuthorQueryString_2>;

  createdDate?: Maybe<MarkdownRemarkFrontmatterCreatedDateQueryString_2>;

  updatedDate?: Maybe<MarkdownRemarkFrontmatterUpdatedDateQueryString_2>;

  draft?: Maybe<MarkdownRemarkFrontmatterDraftQueryBoolean_2>;

  tags?: Maybe<MarkdownRemarkFrontmatterTagsQueryList_2>;

  image?: Maybe<MarkdownRemarkFrontmatterImageQueryString_2>;

  _PARENT?: Maybe<MarkdownRemarkFrontmatterParentQueryString_2>;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface MarkdownRemarkFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterImageQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>;
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>;

  sentences?: Maybe<WordCountSentencesQueryInt_3>;

  words?: Maybe<WordCountWordsQueryInt_3>;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonImageSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonBundlesQueryList_2 {
  elemMatch?: Maybe<TracksJsonBundlesInputObject_2>;
}

export interface TracksJsonBundlesInputObject_2 {
  id?: Maybe<TracksJsonBundlesIdQueryString_2>;

  order?: Maybe<TracksJsonBundlesOrderQueryInteger_2>;

  description?: Maybe<TracksJsonBundlesDescriptionQueryString_2>;
}

export interface TracksJsonBundlesIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonBundlesOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonBundlesDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonLevelsQueryList_2 {
  elemMatch?: Maybe<TracksJsonLevelsInputObject_2>;
}

export interface TracksJsonLevelsInputObject_2 {
  levelId?: Maybe<TracksJsonLevelsLevelIdQueryInteger_2>;

  title?: Maybe<TracksJsonLevelsTitleQueryString_2>;

  description?: Maybe<TracksJsonLevelsDescriptionQueryString_2>;
}

export interface TracksJsonLevelsLevelIdQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TracksJsonLevelsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonLevelsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonInternalInputObject_2 {
  contentDigest?: Maybe<TracksJsonInternalContentDigestQueryString_2>;

  type?: Maybe<TracksJsonInternalTypeQueryString_2>;

  owner?: Maybe<TracksJsonInternalOwnerQueryString_2>;
}

export interface TracksJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface TracksJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export enum TestimonialsJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Name = 'name',
  Img = 'img',
  Twitter = 'twitter',
  Order = 'order',
  QuoteHtml = 'quoteHtml',
  TitleHtml = 'titleHtml',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum TestimonialsJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum TestimonialsJsonDistinctEnum {
  Id = 'id',
  Name = 'name',
  Img = 'img',
  Twitter = 'twitter',
  Order = 'order',
  QuoteHtml = 'quoteHtml',
  TitleHtml = 'titleHtml',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum TestimonialsJsonGroupEnum {
  Id = 'id',
  Name = 'name',
  Img = 'img',
  Twitter = 'twitter',
  Order = 'order',
  QuoteHtml = 'quoteHtml',
  TitleHtml = 'titleHtml',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum CoursesJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Notes = 'notes',
  Url = 'url',
  Flavors = 'flavors',
  Level = 'level',
  Order = 'order',
  Label = 'label',
  Launchdate = 'launchdate',
  Authors = 'authors',
  Products = 'products',
  PublishedChapters = 'publishedChapters',
  Chapters = 'chapters',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  DescriptionHtmlSections = 'descriptionHtmlSections',
  PublishingSchedule = 'publishingSchedule'
}

export enum CoursesJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum CoursesJsonDistinctEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Notes = 'notes',
  Url = 'url',
  Flavors = 'flavors',
  Level = 'level',
  Order = 'order',
  Label = 'label',
  Launchdate = 'launchdate',
  Authors = 'authors',
  Products = 'products',
  PublishedChapters = 'publishedChapters',
  Chapters = 'chapters',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  DescriptionHtmlSections = 'descriptionHtmlSections',
  PublishingSchedule = 'publishingSchedule'
}

export enum CoursesJsonGroupEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Notes = 'notes',
  Url = 'url',
  Flavors = 'flavors',
  Level = 'level',
  Order = 'order',
  Label = 'label',
  Launchdate = 'launchdate',
  Authors = 'authors',
  Products = 'products',
  PublishedChapters = 'publishedChapters',
  Chapters = 'chapters',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  DescriptionHtmlSections = 'descriptionHtmlSections',
  PublishingSchedule = 'publishingSchedule'
}

export enum BundlesJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Url = 'url',
  Promototal = 'promototal',
  Promoremaining = 'promoremaining',
  BundleLevel = 'bundleLevel',
  Products = 'products',
  CourseIds = 'courseIds',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum BundlesJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum BundlesJsonDistinctEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Url = 'url',
  Promototal = 'promototal',
  Promoremaining = 'promoremaining',
  BundleLevel = 'bundleLevel',
  Products = 'products',
  CourseIds = 'courseIds',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum BundlesJsonGroupEnum {
  Id = 'id',
  Title = 'title',
  Subtitle = 'subtitle',
  Description = 'description',
  Url = 'url',
  Promototal = 'promototal',
  Promoremaining = 'promoremaining',
  BundleLevel = 'bundleLevel',
  Products = 'products',
  CourseIds = 'courseIds',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextCourseUrl = 'context___courseUrl',
  ContextTrackId = 'context___trackId',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextTotalPages = 'context___totalPages',
  ContextCurrentPage = 'context___currentPage',
  ContextSlug = 'context___slug',
  ContextPrevPostPath = 'context___prevPostPath',
  ContextNextPostPath = 'context___nextPostPath',
  ContextPostsNativeScript = 'context___posts___NativeScript',
  ContextPostsTipsAndTricks = 'context___posts___Tips_and_Tricks',
  ContextPostsTutorial = 'context___posts___Tutorial',
  ContextPostsVideo = 'context___posts___Video',
  ContextPostsCourses = 'context___posts___Courses',
  ContextPostsAngular = 'context___posts___Angular',
  ContextPostsStyling = 'context___posts___Styling',
  ContextPostsCore = 'context___posts___Core',
  ContextPostsAuthentication = 'context___posts___Authentication',
  ContextPostsAuthorization = 'context___posts___Authorization',
  ContextPostsEnterprise = 'context___posts___Enterprise',
  ContextPostsUi = 'context___posts___UI',
  ContextPostsCordova = 'context___posts___Cordova',
  ContextPostsTip = 'context___posts___Tip',
  ContextPostsJavaScript = 'context___posts___JavaScript',
  ContextPostsTypeScript = 'context___posts___TypeScript',
  ContextPostsVue = 'context___posts___Vue',
  ContextPostsIScriptNative = 'context___posts___I_Script_Native',
  ContextPostsCourse = 'context___posts___Course',
  ContextPostsAndroid = 'context___posts___Android',
  ContextPostsFab = 'context___posts___FAB',
  ContextPostsFloatingActionButton = 'context___posts___Floating_Action_Button',
  ContextPostsSecurity = 'context___posts___Security',
  ContextPostsIOs = 'context___posts___iOS',
  ContextPost = 'context___post',
  ContextTag = 'context___tag',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextCourseUrl = 'context___courseUrl',
  ContextTrackId = 'context___trackId',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextTotalPages = 'context___totalPages',
  ContextCurrentPage = 'context___currentPage',
  ContextSlug = 'context___slug',
  ContextPrevPostPath = 'context___prevPostPath',
  ContextNextPostPath = 'context___nextPostPath',
  ContextPostsNativeScript = 'context___posts___NativeScript',
  ContextPostsTipsAndTricks = 'context___posts___Tips_and_Tricks',
  ContextPostsTutorial = 'context___posts___Tutorial',
  ContextPostsVideo = 'context___posts___Video',
  ContextPostsCourses = 'context___posts___Courses',
  ContextPostsAngular = 'context___posts___Angular',
  ContextPostsStyling = 'context___posts___Styling',
  ContextPostsCore = 'context___posts___Core',
  ContextPostsAuthentication = 'context___posts___Authentication',
  ContextPostsAuthorization = 'context___posts___Authorization',
  ContextPostsEnterprise = 'context___posts___Enterprise',
  ContextPostsUi = 'context___posts___UI',
  ContextPostsCordova = 'context___posts___Cordova',
  ContextPostsTip = 'context___posts___Tip',
  ContextPostsJavaScript = 'context___posts___JavaScript',
  ContextPostsTypeScript = 'context___posts___TypeScript',
  ContextPostsVue = 'context___posts___Vue',
  ContextPostsIScriptNative = 'context___posts___I_Script_Native',
  ContextPostsCourse = 'context___posts___Course',
  ContextPostsAndroid = 'context___posts___Android',
  ContextPostsFab = 'context___posts___FAB',
  ContextPostsFloatingActionButton = 'context___posts___Floating_Action_Button',
  ContextPostsSecurity = 'context___posts___Security',
  ContextPostsIOs = 'context___posts___iOS',
  ContextPost = 'context___post',
  ContextTag = 'context___tag',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextCourseUrl = 'context___courseUrl',
  ContextTrackId = 'context___trackId',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextTotalPages = 'context___totalPages',
  ContextCurrentPage = 'context___currentPage',
  ContextSlug = 'context___slug',
  ContextPrevPostPath = 'context___prevPostPath',
  ContextNextPostPath = 'context___nextPostPath',
  ContextPostsNativeScript = 'context___posts___NativeScript',
  ContextPostsTipsAndTricks = 'context___posts___Tips_and_Tricks',
  ContextPostsTutorial = 'context___posts___Tutorial',
  ContextPostsVideo = 'context___posts___Video',
  ContextPostsCourses = 'context___posts___Courses',
  ContextPostsAngular = 'context___posts___Angular',
  ContextPostsStyling = 'context___posts___Styling',
  ContextPostsCore = 'context___posts___Core',
  ContextPostsAuthentication = 'context___posts___Authentication',
  ContextPostsAuthorization = 'context___posts___Authorization',
  ContextPostsEnterprise = 'context___posts___Enterprise',
  ContextPostsUi = 'context___posts___UI',
  ContextPostsCordova = 'context___posts___Cordova',
  ContextPostsTip = 'context___posts___Tip',
  ContextPostsJavaScript = 'context___posts___JavaScript',
  ContextPostsTypeScript = 'context___posts___TypeScript',
  ContextPostsVue = 'context___posts___Vue',
  ContextPostsIScriptNative = 'context___posts___I_Script_Native',
  ContextPostsCourse = 'context___posts___Course',
  ContextPostsAndroid = 'context___posts___Android',
  ContextPostsFab = 'context___posts___FAB',
  ContextPostsFloatingActionButton = 'context___posts___Floating_Action_Button',
  ContextPostsSecurity = 'context___posts___Security',
  ContextPostsIOs = 'context___posts___iOS',
  ContextPost = 'context___post',
  ContextTag = 'context___tag',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum DirectoryGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL'
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName'
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum AuthorsJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  Bio = 'bio',
  Biolong = 'biolong',
  Title = 'title',
  Twitter = 'twitter',
  Github = 'github',
  Types = 'types',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum AuthorsJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum AuthorsJsonDistinctEnum {
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  Bio = 'bio',
  Biolong = 'biolong',
  Title = 'title',
  Twitter = 'twitter',
  Github = 'github',
  Types = 'types',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum AuthorsJsonGroupEnum {
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  Bio = 'bio',
  Biolong = 'biolong',
  Title = 'title',
  Twitter = 'twitter',
  Github = 'github',
  Types = 'types',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterCreatedDate = 'frontmatter___createdDate',
  FrontmatterUpdatedDate = 'frontmatter___updatedDate',
  FrontmatterDraft = 'frontmatter___draft',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterImage = 'frontmatter___image',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  Headings = 'headings',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum MarkdownRemarkDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterCreatedDate = 'frontmatter___createdDate',
  FrontmatterUpdatedDate = 'frontmatter___updatedDate',
  FrontmatterDraft = 'frontmatter___draft',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterImage = 'frontmatter___image',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath'
}

export enum MarkdownRemarkGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterCreatedDate = 'frontmatter___createdDate',
  FrontmatterUpdatedDate = 'frontmatter___updatedDate',
  FrontmatterDraft = 'frontmatter___draft',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterImage = 'frontmatter___image',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath'
}

export enum TracksJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Title = 'title',
  ImageSrc = 'imageSrc',
  Description = 'description',
  Bundles = 'bundles',
  Levels = 'levels',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum TracksJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum TracksJsonDistinctEnum {
  Id = 'id',
  Title = 'title',
  ImageSrc = 'imageSrc',
  Description = 'description',
  Bundles = 'bundles',
  Levels = 'levels',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum TracksJsonGroupEnum {
  Id = 'id',
  Title = 'title',
  ImageSrc = 'imageSrc',
  Description = 'description',
  Bundles = 'bundles',
  Levels = 'levels',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all TestimonialsJson nodes */
  allTestimonialsJson?: Maybe<TestimonialsJsonConnection>;
  /** Connection to all CoursesJson nodes */
  allCoursesJson?: Maybe<CoursesJsonConnection>;
  /** Connection to all BundlesJson nodes */
  allBundlesJson?: Maybe<BundlesJsonConnection>;
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>;
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>;
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>;
  /** Connection to all AuthorsJson nodes */
  allAuthorsJson?: Maybe<AuthorsJsonConnection>;
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;
  /** Connection to all TracksJson nodes */
  allTracksJson?: Maybe<TracksJsonConnection>;

  testimonialsJson?: Maybe<TestimonialsJson>;

  coursesJson?: Maybe<CoursesJson>;

  bundlesJson?: Maybe<BundlesJson>;

  sitePage?: Maybe<SitePage>;

  sitePlugin?: Maybe<SitePlugin>;

  site?: Maybe<Site>;

  directory?: Maybe<Directory>;

  file?: Maybe<File>;

  imageSharp?: Maybe<ImageSharp>;

  authorsJson?: Maybe<AuthorsJson>;

  markdownRemark?: Maybe<MarkdownRemark>;

  tracksJson?: Maybe<TracksJson>;
}

/** A connection to a list of items. */
export interface TestimonialsJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<TestimonialsJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<TestimonialsJsonGroupConnectionConnection>)[]>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean;
}

/** An edge in a connection. */
export interface TestimonialsJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<TestimonialsJson>;
  /** The next edge in the connection */
  next?: Maybe<TestimonialsJson>;
  /** The previous edge in the connection */
  previous?: Maybe<TestimonialsJson>;
}

/** Node of type TestimonialsJson */
export interface TestimonialsJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  name?: Maybe<string>;

  img?: Maybe<string>;

  twitter?: Maybe<string>;

  order?: Maybe<number>;

  quoteHtml?: Maybe<string>;

  titleHtml?: Maybe<string>;

  internal?: Maybe<Internal_13>;
}

export interface Internal_13 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface TestimonialsJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<TestimonialsJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface TestimonialsJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<TestimonialsJson>;
  /** The next edge in the connection */
  next?: Maybe<TestimonialsJson>;
  /** The previous edge in the connection */
  previous?: Maybe<TestimonialsJson>;
}

/** A connection to a list of items. */
export interface CoursesJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<CoursesJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<CoursesJsonGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface CoursesJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<CoursesJson>;
  /** The next edge in the connection */
  next?: Maybe<CoursesJson>;
  /** The previous edge in the connection */
  previous?: Maybe<CoursesJson>;
}

/** Node of type CoursesJson */
export interface CoursesJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  subtitle?: Maybe<string>;

  description?: Maybe<string>;

  notes?: Maybe<(Maybe<string>)[]>;

  url?: Maybe<string>;

  flavors?: Maybe<(Maybe<string>)[]>;

  level?: Maybe<number>;

  order?: Maybe<number>;

  label?: Maybe<string>;

  launchdate?: Maybe<string>;

  authors?: Maybe<(Maybe<string>)[]>;

  products?: Maybe<(Maybe<Products_3>)[]>;

  publishedChapters?: Maybe<(Maybe<number>)[]>;

  chapters?: Maybe<(Maybe<Chapters_2>)[]>;

  internal?: Maybe<Internal_14>;

  descriptionHtmlSections?: Maybe<(Maybe<DescriptionHtmlSections_2>)[]>;

  publishingSchedule?: Maybe<(Maybe<PublishingSchedule_2>)[]>;
}

export interface Products_3 {
  id?: Maybe<string>;

  name?: Maybe<string>;

  description?: Maybe<string>;

  pricesale?: Maybe<number>;

  pricereg?: Maybe<number>;

  licensesMin?: Maybe<number>;

  licensesMax?: Maybe<number>;
}

export interface Chapters_2 {
  id?: Maybe<number>;

  name?: Maybe<string>;

  lessons?: Maybe<(Maybe<Lessons_2>)[]>;
}

export interface Lessons_2 {
  chapterId?: Maybe<number>;

  id?: Maybe<Date>;

  name?: Maybe<string>;

  isPreview?: Maybe<boolean>;
}

export interface Internal_14 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface DescriptionHtmlSections_2 {
  title?: Maybe<string>;

  descriptionHtml?: Maybe<string>;
}

export interface PublishingSchedule_2 {
  id?: Maybe<number>;

  date?: Maybe<string>;
}

/** A connection to a list of items. */
export interface CoursesJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<CoursesJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface CoursesJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<CoursesJson>;
  /** The next edge in the connection */
  next?: Maybe<CoursesJson>;
  /** The previous edge in the connection */
  previous?: Maybe<CoursesJson>;
}

/** A connection to a list of items. */
export interface BundlesJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<BundlesJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<BundlesJsonGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface BundlesJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<BundlesJson>;
  /** The next edge in the connection */
  next?: Maybe<BundlesJson>;
  /** The previous edge in the connection */
  previous?: Maybe<BundlesJson>;
}

/** Node of type BundlesJson */
export interface BundlesJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  subtitle?: Maybe<string>;

  description?: Maybe<string>;

  url?: Maybe<string>;

  promototal?: Maybe<number>;

  promoremaining?: Maybe<number>;

  bundleLevel?: Maybe<number>;

  products?: Maybe<(Maybe<Products_4>)[]>;

  courseIds?: Maybe<(Maybe<string>)[]>;

  internal?: Maybe<Internal_15>;
}

export interface Products_4 {
  id?: Maybe<string>;

  name?: Maybe<string>;

  description?: Maybe<string>;

  pricesale?: Maybe<number>;

  pricereg?: Maybe<number>;

  licensesMin?: Maybe<number>;

  licensesMax?: Maybe<number>;
}

export interface Internal_15 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface BundlesJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<BundlesJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface BundlesJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<BundlesJson>;
  /** The next edge in the connection */
  next?: Maybe<BundlesJson>;
  /** The previous edge in the connection */
  previous?: Maybe<BundlesJson>;
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  jsonName?: Maybe<string>;

  internalComponentName?: Maybe<string>;

  path?: Maybe<string>;

  component?: Maybe<string>;

  componentChunkName?: Maybe<string>;

  context?: Maybe<Context>;

  pluginCreator?: Maybe<SitePlugin>;

  pluginCreatorId?: Maybe<string>;

  componentPath?: Maybe<string>;

  internal?: Maybe<Internal_16>;
}

export interface Context {
  courseUrl?: Maybe<string>;

  trackId?: Maybe<string>;

  limit?: Maybe<number>;

  skip?: Maybe<number>;

  totalPages?: Maybe<number>;

  currentPage?: Maybe<number>;

  slug?: Maybe<string>;

  prevPostPath?: Maybe<string>;

  nextPostPath?: Maybe<string>;

  posts?: Maybe<Posts>;

  post?: Maybe<(Maybe<Post>)[]>;

  tag?: Maybe<string>;
}

export interface Posts {
  NativeScript?: Maybe<(Maybe<NativeScript>)[]>;

  Tips_and_Tricks?: Maybe<(Maybe<TipsAndTricks>)[]>;

  Tutorial?: Maybe<(Maybe<Tutorial>)[]>;

  Video?: Maybe<(Maybe<Video>)[]>;

  Courses?: Maybe<(Maybe<Courses>)[]>;

  Angular?: Maybe<(Maybe<Angular>)[]>;

  Styling?: Maybe<(Maybe<Styling>)[]>;

  Core?: Maybe<(Maybe<Core>)[]>;

  Authentication?: Maybe<(Maybe<Authentication>)[]>;

  Authorization?: Maybe<(Maybe<Authorization>)[]>;

  Enterprise?: Maybe<(Maybe<Enterprise>)[]>;

  UI?: Maybe<(Maybe<Ui>)[]>;

  Cordova?: Maybe<(Maybe<Cordova>)[]>;

  Tip?: Maybe<(Maybe<Tip>)[]>;

  JavaScript?: Maybe<(Maybe<JavaScript>)[]>;

  TypeScript?: Maybe<(Maybe<TypeScript>)[]>;

  Vue?: Maybe<(Maybe<Vue>)[]>;

  I_Script_Native?: Maybe<(Maybe<IScriptNative>)[]>;

  Course?: Maybe<(Maybe<Course>)[]>;

  Android?: Maybe<(Maybe<Android>)[]>;

  FAB?: Maybe<(Maybe<Fab>)[]>;

  Floating_Action_Button?: Maybe<(Maybe<FloatingActionButton>)[]>;

  Security?: Maybe<(Maybe<Security>)[]>;

  iOS?: Maybe<(Maybe<IOs>)[]>;
}

export interface NativeScript {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_2>;
}

export interface Frontmatter_2 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface TipsAndTricks {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_3>;
}

export interface Frontmatter_3 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Tutorial {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_4>;
}

export interface Frontmatter_4 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Video {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_5>;
}

export interface Frontmatter_5 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Courses {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_6>;
}

export interface Frontmatter_6 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Angular {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_7>;
}

export interface Frontmatter_7 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Styling {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_8>;
}

export interface Frontmatter_8 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Core {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_9>;
}

export interface Frontmatter_9 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Authentication {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_10>;
}

export interface Frontmatter_10 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Authorization {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_11>;
}

export interface Frontmatter_11 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Enterprise {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_12>;
}

export interface Frontmatter_12 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Ui {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_13>;
}

export interface Frontmatter_13 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Cordova {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_14>;
}

export interface Frontmatter_14 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Tip {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_15>;
}

export interface Frontmatter_15 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface JavaScript {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_16>;
}

export interface Frontmatter_16 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface TypeScript {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_17>;
}

export interface Frontmatter_17 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Vue {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_18>;
}

export interface Frontmatter_18 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface IScriptNative {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_19>;
}

export interface Frontmatter_19 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Course {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_20>;
}

export interface Frontmatter_20 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Android {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_21>;
}

export interface Frontmatter_21 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Fab {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_22>;
}

export interface Frontmatter_22 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface FloatingActionButton {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_23>;
}

export interface Frontmatter_23 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Security {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_24>;
}

export interface Frontmatter_24 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface IOs {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_25>;
}

export interface Frontmatter_25 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

export interface Post {
  excerpt?: Maybe<string>;

  html?: Maybe<string>;

  id?: Maybe<string>;

  timeToRead?: Maybe<number>;

  frontmatter?: Maybe<Frontmatter_26>;
}

export interface Frontmatter_26 {
  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  tags?: Maybe<(Maybe<string>)[]>;

  path?: Maybe<string>;

  title?: Maybe<string>;
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  resolve?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_3>;

  nodeAPIs?: Maybe<(Maybe<string>)[]>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;

  packageJson?: Maybe<PackageJson_2>;

  internal?: Maybe<Internal_17>;
}

export interface PluginOptions_3 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>;

  output?: Maybe<string>;

  query?: Maybe<string>;

  name?: Maybe<string>;

  path?: Maybe<string>;

  linkImagesToOriginal?: Maybe<boolean>;

  maxWidth?: Maybe<number>;

  wrapperStyle?: Maybe<string>;

  backgroundColor?: Maybe<string>;

  showCaptions?: Maybe<boolean>;

  pathPrefix?: Maybe<string>;

  withWebp?: Maybe<boolean>;

  ignoreFileExtensions?: Maybe<(Maybe<string>)[]>;

  pathCheck?: Maybe<boolean>;
}

export interface Plugins_2 {
  resolve?: Maybe<string>;

  id?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_4>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;
}

export interface PluginOptions_4 {
  linkImagesToOriginal?: Maybe<boolean>;

  maxWidth?: Maybe<number>;

  wrapperStyle?: Maybe<string>;

  backgroundColor?: Maybe<string>;

  showCaptions?: Maybe<boolean>;

  pathPrefix?: Maybe<string>;

  withWebp?: Maybe<boolean>;

  ignoreFileExtensions?: Maybe<(Maybe<string>)[]>;
}

export interface PackageJson_2 {
  name?: Maybe<string>;

  description?: Maybe<string>;

  version?: Maybe<string>;

  main?: Maybe<string>;

  license?: Maybe<string>;

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>;

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>;

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>;

  keywords?: Maybe<(Maybe<string>)[]>;
}

export interface Dependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface DevDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface PeerDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface Internal_17 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_16 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_18>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
}

export interface Internal_18 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The children of this node of type bundlesJson */
  childrenBundlesJson?: Maybe<(Maybe<BundlesJson>)[]>;
  /** The children of this node of type authorsJson */
  childrenAuthorsJson?: Maybe<(Maybe<AuthorsJson>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** The children of this node of type testimonialsJson */
  childrenTestimonialsJson?: Maybe<(Maybe<TestimonialsJson>)[]>;
  /** The children of this node of type tracksJson */
  childrenTracksJson?: Maybe<(Maybe<TracksJson>)[]>;
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>;
  /** The children of this node of type coursesJson */
  childrenCoursesJson?: Maybe<(Maybe<CoursesJson>)[]>;

  internal?: Maybe<Internal_19>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>;
}

/** Node of type AuthorsJson */
export interface AuthorsJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  bio?: Maybe<string>;

  biolong?: Maybe<string>;

  title?: Maybe<string>;

  twitter?: Maybe<string>;

  github?: Maybe<string>;

  types?: Maybe<(Maybe<string>)[]>;

  internal?: Maybe<Internal_20>;
}

export interface Internal_20 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_21>;

  frontmatter?: Maybe<Frontmatter_27>;

  rawMarkdownBody?: Maybe<string>;

  fileAbsolutePath?: Maybe<string>;

  html?: Maybe<string>;

  htmlAst?: Maybe<Json>;

  excerpt?: Maybe<string>;

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>;

  timeToRead?: Maybe<number>;

  tableOfContents?: Maybe<string>;

  wordCount?: Maybe<WordCount>;
}

export interface Internal_21 {
  content?: Maybe<string>;

  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Frontmatter_27 {
  title?: Maybe<string>;

  path?: Maybe<string>;

  author?: Maybe<string>;

  createdDate?: Maybe<Date>;

  updatedDate?: Maybe<Date>;

  draft?: Maybe<boolean>;

  tags?: Maybe<(Maybe<string>)[]>;

  image?: Maybe<File>;

  _PARENT?: Maybe<string>;
}

export interface MarkdownHeading {
  value?: Maybe<string>;

  depth?: Maybe<number>;
}

export interface WordCount {
  paragraphs?: Maybe<number>;

  sentences?: Maybe<number>;

  words?: Maybe<number>;
}

/** Node of type TracksJson */
export interface TracksJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  imageSrc?: Maybe<string>;

  description?: Maybe<string>;

  bundles?: Maybe<(Maybe<Bundles_2>)[]>;

  levels?: Maybe<(Maybe<Levels_2>)[]>;

  internal?: Maybe<Internal_22>;
}

export interface Bundles_2 {
  id?: Maybe<string>;

  order?: Maybe<number>;

  description?: Maybe<string>;
}

export interface Levels_2 {
  levelId?: Maybe<number>;

  title?: Maybe<string>;

  description?: Maybe<string>;
}

export interface Internal_22 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_23>;

  fixed?: Maybe<ImageSharpFixed>;

  resolutions?: Maybe<ImageSharpResolutions>;

  fluid?: Maybe<ImageSharpFluid>;

  sizes?: Maybe<ImageSharpSizes>;

  original?: Maybe<ImageSharpOriginal>;

  resize?: Maybe<ImageSharpResize>;
}

export interface Internal_23 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface ImageSharpFixed {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  originalName?: Maybe<string>;
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  originalName?: Maybe<string>;
}

export interface ImageSharpFluid {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;

  originalImg?: Maybe<string>;

  originalName?: Maybe<string>;

  presentationWidth?: Maybe<number>;

  presentationHeight?: Maybe<number>;
}

export interface ImageSharpSizes {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;

  originalImg?: Maybe<string>;

  originalName?: Maybe<string>;

  presentationWidth?: Maybe<number>;

  presentationHeight?: Maybe<number>;
}

export interface ImageSharpOriginal {
  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;
}

export interface ImageSharpResize {
  src?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  aspectRatio?: Maybe<number>;

  originalName?: Maybe<string>;
}

export interface Internal_19 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** A connection to a list of items. */
export interface ImageSharpConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ImageSharpGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ImageSharpEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
}

/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
}

/** A connection to a list of items. */
export interface AuthorsJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<AuthorsJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<AuthorsJsonGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface AuthorsJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<AuthorsJson>;
  /** The next edge in the connection */
  next?: Maybe<AuthorsJson>;
  /** The previous edge in the connection */
  previous?: Maybe<AuthorsJson>;
}

/** A connection to a list of items. */
export interface AuthorsJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<AuthorsJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface AuthorsJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<AuthorsJson>;
  /** The next edge in the connection */
  next?: Maybe<AuthorsJson>;
  /** The previous edge in the connection */
  previous?: Maybe<AuthorsJson>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface TracksJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<TracksJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<TracksJsonGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface TracksJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<TracksJson>;
  /** The next edge in the connection */
  next?: Maybe<TracksJson>;
  /** The previous edge in the connection */
  previous?: Maybe<TracksJson>;
}

/** A connection to a list of items. */
export interface TracksJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<TracksJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface TracksJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<TracksJson>;
  /** The next edge in the connection */
  next?: Maybe<TracksJson>;
  /** The previous edge in the connection */
  previous?: Maybe<TracksJson>;
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  siteMetadata?: Maybe<SiteMetadata_2>;

  port?: Maybe<Date>;

  host?: Maybe<string>;

  pathPrefix?: Maybe<string>;

  polyfill?: Maybe<boolean>;

  buildTime?: Maybe<Date>;

  internal?: Maybe<Internal_24>;
}

export interface SiteMetadata_2 {
  siteName?: Maybe<string>;

  siteUrl?: Maybe<string>;
}

export interface Internal_24 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface AllTestimonialsJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<TestimonialsJsonConnectionSort>;

  filter?: Maybe<FilterTestimonialsJson>;
}
export interface AllCoursesJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<CoursesJsonConnectionSort>;

  filter?: Maybe<FilterCoursesJson>;
}
export interface AllBundlesJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<BundlesJsonConnectionSort>;

  filter?: Maybe<FilterBundlesJson>;
}
export interface AllSitePageQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePageConnectionSort>;

  filter?: Maybe<FilterSitePage>;
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePluginConnectionSort>;

  filter?: Maybe<FilterSitePlugin>;
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<DirectoryConnectionSort>;

  filter?: Maybe<FilterDirectory>;
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<FileConnectionSort>;

  filter?: Maybe<FilterFile>;
}
export interface AllImageSharpQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ImageSharpConnectionSort>;

  filter?: Maybe<FilterImageSharp>;
}
export interface AllAuthorsJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<AuthorsJsonConnectionSort>;

  filter?: Maybe<FilterAuthorsJson>;
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<MarkdownRemarkConnectionSort>;

  filter?: Maybe<FilterMarkdownRemark>;
}
export interface AllTracksJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<TracksJsonConnectionSort>;

  filter?: Maybe<FilterTracksJson>;
}
export interface TestimonialsJsonQueryArgs {
  id?: Maybe<TestimonialsJsonIdQueryString_2>;

  name?: Maybe<TestimonialsJsonNameQueryString_2>;

  img?: Maybe<TestimonialsJsonImgQueryString_2>;

  twitter?: Maybe<TestimonialsJsonTwitterQueryString_2>;

  order?: Maybe<TestimonialsJsonOrderQueryInteger_2>;

  quoteHtml?: Maybe<TestimonialsJsonQuoteHtmlQueryString_2>;

  titleHtml?: Maybe<TestimonialsJsonTitleHtmlQueryString_2>;

  internal?: Maybe<TestimonialsJsonInternalInputObject_2>;
}
export interface CoursesJsonQueryArgs {
  id?: Maybe<CoursesJsonIdQueryString_2>;

  title?: Maybe<CoursesJsonTitleQueryString_2>;

  subtitle?: Maybe<CoursesJsonSubtitleQueryString_2>;

  description?: Maybe<CoursesJsonDescriptionQueryString_2>;

  notes?: Maybe<CoursesJsonNotesQueryList_2>;

  url?: Maybe<CoursesJsonUrlQueryString_2>;

  flavors?: Maybe<CoursesJsonFlavorsQueryList_2>;

  level?: Maybe<CoursesJsonLevelQueryInteger_2>;

  order?: Maybe<CoursesJsonOrderQueryInteger_2>;

  label?: Maybe<CoursesJsonLabelQueryString_2>;

  launchdate?: Maybe<CoursesJsonLaunchdateQueryString_2>;

  authors?: Maybe<CoursesJsonAuthorsQueryList_2>;

  products?: Maybe<CoursesJsonProductsQueryList_2>;

  publishedChapters?: Maybe<CoursesJsonPublishedChaptersQueryList_2>;

  chapters?: Maybe<CoursesJsonChaptersQueryList_2>;

  internal?: Maybe<CoursesJsonInternalInputObject_2>;

  descriptionHtmlSections?: Maybe<
    CoursesJsonDescriptionHtmlSectionsQueryList_2
  >;

  publishingSchedule?: Maybe<CoursesJsonPublishingScheduleQueryList_2>;
}
export interface BundlesJsonQueryArgs {
  id?: Maybe<BundlesJsonIdQueryString_2>;

  title?: Maybe<BundlesJsonTitleQueryString_2>;

  subtitle?: Maybe<BundlesJsonSubtitleQueryString_2>;

  description?: Maybe<BundlesJsonDescriptionQueryString_2>;

  url?: Maybe<BundlesJsonUrlQueryString_2>;

  promototal?: Maybe<BundlesJsonPromototalQueryInteger_2>;

  promoremaining?: Maybe<BundlesJsonPromoremainingQueryInteger_2>;

  bundleLevel?: Maybe<BundlesJsonBundleLevelQueryInteger_2>;

  products?: Maybe<BundlesJsonProductsQueryList_2>;

  courseIds?: Maybe<BundlesJsonCourseIdsQueryList_2>;

  internal?: Maybe<BundlesJsonInternalInputObject_2>;
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>;

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;

  path?: Maybe<SitePagePathQueryString_2>;

  component?: Maybe<SitePageComponentQueryString>;

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;

  context?: Maybe<SitePageContextInputObject>;

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageComponentPathQueryString>;

  id?: Maybe<SitePageIdQueryString_2>;

  internal?: Maybe<SitePageInternalInputObject_2>;
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>;

  id?: Maybe<SitePluginIdQueryString_2>;

  name?: Maybe<SitePluginNameQueryString_2>;

  version?: Maybe<SitePluginVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginInternalInputObject_2>;
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;

  port?: Maybe<SitePortQueryString_2>;

  host?: Maybe<SiteHostQueryString_2>;

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;

  buildTime?: Maybe<SiteBuildTimeQueryString_2>;

  id?: Maybe<SiteIdQueryString_2>;

  internal?: Maybe<SiteInternalInputObject_2>;
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>;

  internal?: Maybe<DirectoryInternalInputObject_2>;

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>;

  extension?: Maybe<DirectoryExtensionQueryString_2>;

  size?: Maybe<DirectorySizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>;

  root?: Maybe<DirectoryRootQueryString_2>;

  dir?: Maybe<DirectoryDirQueryString_2>;

  base?: Maybe<DirectoryBaseQueryString_2>;

  ext?: Maybe<DirectoryExtQueryString_2>;

  name?: Maybe<DirectoryNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryDevQueryInteger_2>;

  mode?: Maybe<DirectoryModeQueryInteger_2>;

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryUidQueryInteger_2>;

  gid?: Maybe<DirectoryGidQueryInteger_2>;

  rdev?: Maybe<DirectoryRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryInoQueryFloat_2>;

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryAtimeQueryString_2>;

  mtime?: Maybe<DirectoryMtimeQueryString_2>;

  ctime?: Maybe<DirectoryCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>;
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>;

  internal?: Maybe<FileInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileRelativePathQueryString_2>;

  extension?: Maybe<FileExtensionQueryString_2>;

  size?: Maybe<FileSizeQueryInteger_2>;

  prettySize?: Maybe<FilePrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileAccessTimeQueryString_2>;

  changeTime?: Maybe<FileChangeTimeQueryString_2>;

  birthTime?: Maybe<FileBirthTimeQueryString_2>;

  root?: Maybe<FileRootQueryString_2>;

  dir?: Maybe<FileDirQueryString_2>;

  base?: Maybe<FileBaseQueryString_2>;

  ext?: Maybe<FileExtQueryString_2>;

  name?: Maybe<FileNameQueryString_2>;

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileDevQueryInteger_2>;

  mode?: Maybe<FileModeQueryInteger_2>;

  nlink?: Maybe<FileNlinkQueryInteger_2>;

  uid?: Maybe<FileUidQueryInteger_2>;

  gid?: Maybe<FileGidQueryInteger_2>;

  rdev?: Maybe<FileRdevQueryInteger_2>;

  blksize?: Maybe<FileBlksizeQueryInteger_2>;

  ino?: Maybe<FileInoQueryFloat_2>;

  blocks?: Maybe<FileBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileAtimeQueryString_2>;

  mtime?: Maybe<FileMtimeQueryString_2>;

  ctime?: Maybe<FileCtimeQueryString_2>;

  birthtime?: Maybe<FileBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_3>;
}
export interface ImageSharpQueryArgs {
  id?: Maybe<ImageSharpIdQueryString_2>;

  internal?: Maybe<ImageSharpInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_3>;

  resolutions?: Maybe<ResolutionsTypeName_3>;

  fluid?: Maybe<FluidTypeName_3>;

  sizes?: Maybe<SizesTypeName_3>;

  original?: Maybe<OriginalTypeName_3>;

  resize?: Maybe<ResizeTypeName_3>;
}
export interface AuthorsJsonQueryArgs {
  id?: Maybe<AuthorsJsonIdQueryString_2>;

  name?: Maybe<AuthorsJsonNameQueryString_2>;

  picture?: Maybe<AuthorsJsonPictureQueryString_2>;

  bio?: Maybe<AuthorsJsonBioQueryString_2>;

  biolong?: Maybe<AuthorsJsonBiolongQueryString_2>;

  title?: Maybe<AuthorsJsonTitleQueryString_2>;

  twitter?: Maybe<AuthorsJsonTwitterQueryString_2>;

  github?: Maybe<AuthorsJsonGithubQueryString_2>;

  types?: Maybe<AuthorsJsonTypesQueryList_2>;

  internal?: Maybe<AuthorsJsonInternalInputObject_2>;
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>;

  excerpt?: Maybe<ExcerptQueryString_3>;

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>;

  fileAbsolutePath?: Maybe<MarkdownRemarkFileAbsolutePathQueryString_2>;

  html?: Maybe<HtmlQueryString_3>;

  headings?: Maybe<HeadingsQueryList_3>;

  timeToRead?: Maybe<TimeToReadQueryInt_3>;

  tableOfContents?: Maybe<TableOfContentsQueryString_3>;

  wordCount?: Maybe<WordCountTypeName_3>;
}
export interface TracksJsonQueryArgs {
  id?: Maybe<TracksJsonIdQueryString_2>;

  title?: Maybe<TracksJsonTitleQueryString_2>;

  imageSrc?: Maybe<TracksJsonImageSrcQueryString_2>;

  description?: Maybe<TracksJsonDescriptionQueryString_2>;

  bundles?: Maybe<TracksJsonBundlesQueryList_2>;

  levels?: Maybe<TracksJsonLevelsQueryList_2>;

  internal?: Maybe<TracksJsonInternalInputObject_2>;
}
export interface DistinctTestimonialsJsonConnectionArgs {
  field?: Maybe<TestimonialsJsonDistinctEnum>;
}
export interface GroupTestimonialsJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<TestimonialsJsonGroupEnum>;
}
export interface DistinctCoursesJsonConnectionArgs {
  field?: Maybe<CoursesJsonDistinctEnum>;
}
export interface GroupCoursesJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<CoursesJsonGroupEnum>;
}
export interface IdLessons_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctBundlesJsonConnectionArgs {
  field?: Maybe<BundlesJsonDistinctEnum>;
}
export interface GroupBundlesJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<BundlesJsonGroupEnum>;
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>;
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePageGroupEnum>;
}
export interface CreatedDateFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_3Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_3Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_4Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_4Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_5Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_5Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_6Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_6Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_7Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_7Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_8Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_8Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_9Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_9Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_10Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_10Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_11Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_11Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_12Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_12Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_13Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_13Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_14Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_14Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_15Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_15Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_16Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_16Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_17Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_17Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_18Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_18Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_19Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_19Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_20Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_20Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_21Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_21Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_22Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_22Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_23Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_23Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_24Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_24Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_25Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_25Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedDateFrontmatter_26Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_26Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>;
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePluginGroupEnum>;
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>;
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<DirectoryGroupEnum>;
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>;
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<FileGroupEnum>;
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number;

  truncate?: boolean;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string;
}
export interface CreatedDateFrontmatter_27Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedDateFrontmatter_27Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  base64Width?: Maybe<number>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  grayscale?: boolean;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: Maybe<number>;

  toFormat?: Maybe<ImageFormat>;

  toFormatBase64?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  fit?: Maybe<ImageFit>;

  background?: string;

  rotate?: number;

  trim?: number;
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  base64Width?: Maybe<number>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  grayscale?: boolean;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: Maybe<number>;

  toFormat?: Maybe<ImageFormat>;

  toFormatBase64?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  fit?: Maybe<ImageFit>;

  background?: string;

  rotate?: number;

  trim?: number;
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>;

  maxHeight?: Maybe<number>;

  base64Width?: Maybe<number>;

  grayscale?: boolean;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: Maybe<number>;

  toFormat?: Maybe<ImageFormat>;

  toFormatBase64?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  fit?: Maybe<ImageFit>;

  background?: string;

  rotate?: number;

  trim?: number;

  sizes?: string;
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[];
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>;

  maxHeight?: Maybe<number>;

  base64Width?: Maybe<number>;

  grayscale?: boolean;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: Maybe<number>;

  toFormat?: Maybe<ImageFormat>;

  toFormatBase64?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  fit?: Maybe<ImageFit>;

  background?: string;

  rotate?: number;

  trim?: number;

  sizes?: string;
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[];
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  quality?: Maybe<number>;

  jpegProgressive?: boolean;

  pngCompressionLevel?: number;

  pngCompressionSpeed?: number;

  grayscale?: boolean;

  duotone?: Maybe<DuotoneGradient>;

  base64?: boolean;

  traceSVG?: Maybe<Potrace>;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  fit?: Maybe<ImageFit>;

  background?: string;

  rotate?: number;

  trim?: number;
}
export interface DistinctImageSharpConnectionArgs {
  field?: Maybe<ImageSharpDistinctEnum>;
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ImageSharpGroupEnum>;
}
export interface DistinctAuthorsJsonConnectionArgs {
  field?: Maybe<AuthorsJsonDistinctEnum>;
}
export interface GroupAuthorsJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<AuthorsJsonGroupEnum>;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<MarkdownRemarkGroupEnum>;
}
export interface DistinctTracksJsonConnectionArgs {
  field?: Maybe<TracksJsonDistinctEnum>;
}
export interface GroupTracksJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<TracksJsonGroupEnum>;
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
