export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type AuthorsJson = Node & {
   __typename?: 'AuthorsJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  picture?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
  biolong?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  github?: Maybe<Scalars['String']>,
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type AuthorsJsonConnection = {
   __typename?: 'AuthorsJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorsJsonEdge>,
  nodes: Array<AuthorsJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<AuthorsJsonGroupConnection>,
};


export type AuthorsJsonConnectionDistinctArgs = {
  field: AuthorsJsonFieldsEnum
};


export type AuthorsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: AuthorsJsonFieldsEnum
};

export type AuthorsJsonEdge = {
   __typename?: 'AuthorsJsonEdge',
  next?: Maybe<AuthorsJson>,
  node: AuthorsJson,
  previous?: Maybe<AuthorsJson>,
};

export enum AuthorsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  picture = 'picture',
  bio = 'bio',
  biolong = 'biolong',
  title = 'title',
  twitter = 'twitter',
  github = 'github',
  types = 'types'
}

export type AuthorsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  biolong?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  github?: Maybe<StringQueryOperatorInput>,
  types?: Maybe<StringQueryOperatorInput>,
};

export type AuthorsJsonFilterListInput = {
  elemMatch?: Maybe<AuthorsJsonFilterInput>,
};

export type AuthorsJsonGroupConnection = {
   __typename?: 'AuthorsJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorsJsonEdge>,
  nodes: Array<AuthorsJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type AuthorsJsonSortInput = {
  fields?: Maybe<Array<Maybe<AuthorsJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type BundlesJson = Node & {
   __typename?: 'BundlesJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  promototal?: Maybe<Scalars['Int']>,
  promoremaining?: Maybe<Scalars['Int']>,
  bundleLevel?: Maybe<Scalars['Int']>,
  products?: Maybe<Array<Maybe<BundlesJsonProducts>>>,
  courseIds?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type BundlesJsonConnection = {
   __typename?: 'BundlesJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<BundlesJsonEdge>,
  nodes: Array<BundlesJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<BundlesJsonGroupConnection>,
};


export type BundlesJsonConnectionDistinctArgs = {
  field: BundlesJsonFieldsEnum
};


export type BundlesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: BundlesJsonFieldsEnum
};

export type BundlesJsonEdge = {
   __typename?: 'BundlesJsonEdge',
  next?: Maybe<BundlesJson>,
  node: BundlesJson,
  previous?: Maybe<BundlesJson>,
};

export enum BundlesJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  url = 'url',
  promototal = 'promototal',
  promoremaining = 'promoremaining',
  bundleLevel = 'bundleLevel',
  products = 'products',
  products___id = 'products___id',
  products___name = 'products___name',
  products___description = 'products___description',
  products___pricesale = 'products___pricesale',
  products___pricereg = 'products___pricereg',
  products___licensesMin = 'products___licensesMin',
  products___licensesMax = 'products___licensesMax',
  courseIds = 'courseIds'
}

export type BundlesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  promototal?: Maybe<IntQueryOperatorInput>,
  promoremaining?: Maybe<IntQueryOperatorInput>,
  bundleLevel?: Maybe<IntQueryOperatorInput>,
  products?: Maybe<BundlesJsonProductsFilterListInput>,
  courseIds?: Maybe<StringQueryOperatorInput>,
};

export type BundlesJsonFilterListInput = {
  elemMatch?: Maybe<BundlesJsonFilterInput>,
};

export type BundlesJsonGroupConnection = {
   __typename?: 'BundlesJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<BundlesJsonEdge>,
  nodes: Array<BundlesJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type BundlesJsonProducts = {
   __typename?: 'BundlesJsonProducts',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  pricesale?: Maybe<Scalars['Int']>,
  pricereg?: Maybe<Scalars['Int']>,
  licensesMin?: Maybe<Scalars['Int']>,
  licensesMax?: Maybe<Scalars['Int']>,
};

export type BundlesJsonProductsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  pricesale?: Maybe<IntQueryOperatorInput>,
  pricereg?: Maybe<IntQueryOperatorInput>,
  licensesMin?: Maybe<IntQueryOperatorInput>,
  licensesMax?: Maybe<IntQueryOperatorInput>,
};

export type BundlesJsonProductsFilterListInput = {
  elemMatch?: Maybe<BundlesJsonProductsFilterInput>,
};

export type BundlesJsonSortInput = {
  fields?: Maybe<Array<Maybe<BundlesJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type CoursesJson = Node & {
   __typename?: 'CoursesJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  flavors?: Maybe<Array<Maybe<Scalars['String']>>>,
  level?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  launchdate?: Maybe<Scalars['String']>,
  authors?: Maybe<Array<Maybe<Scalars['String']>>>,
  products?: Maybe<Array<Maybe<CoursesJsonProducts>>>,
  publishedChapters?: Maybe<Array<Maybe<Scalars['Int']>>>,
  chapters?: Maybe<Array<Maybe<CoursesJsonChapters>>>,
  descriptionHtmlSections?: Maybe<Array<Maybe<CoursesJsonDescriptionHtmlSections>>>,
  publishingSchedule?: Maybe<Array<Maybe<CoursesJsonPublishingSchedule>>>,
  notes?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CoursesJsonChapters = {
   __typename?: 'CoursesJsonChapters',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  lessons?: Maybe<Array<Maybe<CoursesJsonChaptersLessons>>>,
};

export type CoursesJsonChaptersFilterInput = {
  id?: Maybe<IntQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  lessons?: Maybe<CoursesJsonChaptersLessonsFilterListInput>,
};

export type CoursesJsonChaptersFilterListInput = {
  elemMatch?: Maybe<CoursesJsonChaptersFilterInput>,
};

export type CoursesJsonChaptersLessons = {
   __typename?: 'CoursesJsonChaptersLessons',
  chapterId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  isPreview?: Maybe<Scalars['Boolean']>,
};

export type CoursesJsonChaptersLessonsFilterInput = {
  chapterId?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  isPreview?: Maybe<BooleanQueryOperatorInput>,
};

export type CoursesJsonChaptersLessonsFilterListInput = {
  elemMatch?: Maybe<CoursesJsonChaptersLessonsFilterInput>,
};

export type CoursesJsonConnection = {
   __typename?: 'CoursesJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<CoursesJsonEdge>,
  nodes: Array<CoursesJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<CoursesJsonGroupConnection>,
};


export type CoursesJsonConnectionDistinctArgs = {
  field: CoursesJsonFieldsEnum
};


export type CoursesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: CoursesJsonFieldsEnum
};

export type CoursesJsonDescriptionHtmlSections = {
   __typename?: 'CoursesJsonDescriptionHtmlSections',
  title?: Maybe<Scalars['String']>,
  descriptionHtml?: Maybe<Scalars['String']>,
};

export type CoursesJsonDescriptionHtmlSectionsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  descriptionHtml?: Maybe<StringQueryOperatorInput>,
};

export type CoursesJsonDescriptionHtmlSectionsFilterListInput = {
  elemMatch?: Maybe<CoursesJsonDescriptionHtmlSectionsFilterInput>,
};

export type CoursesJsonEdge = {
   __typename?: 'CoursesJsonEdge',
  next?: Maybe<CoursesJson>,
  node: CoursesJson,
  previous?: Maybe<CoursesJson>,
};

export enum CoursesJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  url = 'url',
  flavors = 'flavors',
  level = 'level',
  order = 'order',
  label = 'label',
  launchdate = 'launchdate',
  authors = 'authors',
  products = 'products',
  products___id = 'products___id',
  products___name = 'products___name',
  products___description = 'products___description',
  products___pricesale = 'products___pricesale',
  products___pricereg = 'products___pricereg',
  products___licensesMin = 'products___licensesMin',
  products___licensesMax = 'products___licensesMax',
  products___prodType = 'products___prodType',
  products___numPayments = 'products___numPayments',
  products___recurring = 'products___recurring',
  publishedChapters = 'publishedChapters',
  chapters = 'chapters',
  chapters___id = 'chapters___id',
  chapters___name = 'chapters___name',
  chapters___lessons = 'chapters___lessons',
  chapters___lessons___chapterId = 'chapters___lessons___chapterId',
  chapters___lessons___id = 'chapters___lessons___id',
  chapters___lessons___name = 'chapters___lessons___name',
  chapters___lessons___isPreview = 'chapters___lessons___isPreview',
  descriptionHtmlSections = 'descriptionHtmlSections',
  descriptionHtmlSections___title = 'descriptionHtmlSections___title',
  descriptionHtmlSections___descriptionHtml = 'descriptionHtmlSections___descriptionHtml',
  publishingSchedule = 'publishingSchedule',
  publishingSchedule___id = 'publishingSchedule___id',
  publishingSchedule___date = 'publishingSchedule___date',
  notes = 'notes'
}

export type CoursesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  flavors?: Maybe<StringQueryOperatorInput>,
  level?: Maybe<IntQueryOperatorInput>,
  order?: Maybe<IntQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  launchdate?: Maybe<StringQueryOperatorInput>,
  authors?: Maybe<StringQueryOperatorInput>,
  products?: Maybe<CoursesJsonProductsFilterListInput>,
  publishedChapters?: Maybe<IntQueryOperatorInput>,
  chapters?: Maybe<CoursesJsonChaptersFilterListInput>,
  descriptionHtmlSections?: Maybe<CoursesJsonDescriptionHtmlSectionsFilterListInput>,
  publishingSchedule?: Maybe<CoursesJsonPublishingScheduleFilterListInput>,
  notes?: Maybe<StringQueryOperatorInput>,
};

export type CoursesJsonFilterListInput = {
  elemMatch?: Maybe<CoursesJsonFilterInput>,
};

export type CoursesJsonGroupConnection = {
   __typename?: 'CoursesJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<CoursesJsonEdge>,
  nodes: Array<CoursesJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type CoursesJsonProducts = {
   __typename?: 'CoursesJsonProducts',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  pricesale?: Maybe<Scalars['Int']>,
  pricereg?: Maybe<Scalars['Int']>,
  licensesMin?: Maybe<Scalars['Int']>,
  licensesMax?: Maybe<Scalars['Int']>,
  prodType?: Maybe<Scalars['String']>,
  numPayments?: Maybe<Scalars['Int']>,
  recurring?: Maybe<Scalars['Boolean']>,
};

export type CoursesJsonProductsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  pricesale?: Maybe<IntQueryOperatorInput>,
  pricereg?: Maybe<IntQueryOperatorInput>,
  licensesMin?: Maybe<IntQueryOperatorInput>,
  licensesMax?: Maybe<IntQueryOperatorInput>,
  prodType?: Maybe<StringQueryOperatorInput>,
  numPayments?: Maybe<IntQueryOperatorInput>,
  recurring?: Maybe<BooleanQueryOperatorInput>,
};

export type CoursesJsonProductsFilterListInput = {
  elemMatch?: Maybe<CoursesJsonProductsFilterInput>,
};

export type CoursesJsonPublishingSchedule = {
   __typename?: 'CoursesJsonPublishingSchedule',
  id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['String']>,
};

export type CoursesJsonPublishingScheduleFilterInput = {
  id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<StringQueryOperatorInput>,
};

export type CoursesJsonPublishingScheduleFilterListInput = {
  elemMatch?: Maybe<CoursesJsonPublishingScheduleFilterInput>,
};

export type CoursesJsonSortInput = {
  fields?: Maybe<Array<Maybe<CoursesJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childrenAuthorsJson?: Maybe<Array<Maybe<AuthorsJson>>>,
  childrenBundlesJson?: Maybe<Array<Maybe<BundlesJson>>>,
  childPreviewsJson?: Maybe<PreviewsJson>,
  childrenTestimonialsJson?: Maybe<Array<Maybe<TestimonialsJson>>>,
  childrenTracksJson?: Maybe<Array<Maybe<TracksJson>>>,
  childrenCoursesJson?: Maybe<Array<Maybe<CoursesJson>>>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childrenAuthorsJson = 'childrenAuthorsJson',
  childrenAuthorsJson___id = 'childrenAuthorsJson___id',
  childrenAuthorsJson___parent___id = 'childrenAuthorsJson___parent___id',
  childrenAuthorsJson___parent___parent___id = 'childrenAuthorsJson___parent___parent___id',
  childrenAuthorsJson___parent___parent___children = 'childrenAuthorsJson___parent___parent___children',
  childrenAuthorsJson___parent___children = 'childrenAuthorsJson___parent___children',
  childrenAuthorsJson___parent___children___id = 'childrenAuthorsJson___parent___children___id',
  childrenAuthorsJson___parent___children___children = 'childrenAuthorsJson___parent___children___children',
  childrenAuthorsJson___parent___internal___content = 'childrenAuthorsJson___parent___internal___content',
  childrenAuthorsJson___parent___internal___contentDigest = 'childrenAuthorsJson___parent___internal___contentDigest',
  childrenAuthorsJson___parent___internal___description = 'childrenAuthorsJson___parent___internal___description',
  childrenAuthorsJson___parent___internal___fieldOwners = 'childrenAuthorsJson___parent___internal___fieldOwners',
  childrenAuthorsJson___parent___internal___ignoreType = 'childrenAuthorsJson___parent___internal___ignoreType',
  childrenAuthorsJson___parent___internal___mediaType = 'childrenAuthorsJson___parent___internal___mediaType',
  childrenAuthorsJson___parent___internal___owner = 'childrenAuthorsJson___parent___internal___owner',
  childrenAuthorsJson___parent___internal___type = 'childrenAuthorsJson___parent___internal___type',
  childrenAuthorsJson___children = 'childrenAuthorsJson___children',
  childrenAuthorsJson___children___id = 'childrenAuthorsJson___children___id',
  childrenAuthorsJson___children___parent___id = 'childrenAuthorsJson___children___parent___id',
  childrenAuthorsJson___children___parent___children = 'childrenAuthorsJson___children___parent___children',
  childrenAuthorsJson___children___children = 'childrenAuthorsJson___children___children',
  childrenAuthorsJson___children___children___id = 'childrenAuthorsJson___children___children___id',
  childrenAuthorsJson___children___children___children = 'childrenAuthorsJson___children___children___children',
  childrenAuthorsJson___children___internal___content = 'childrenAuthorsJson___children___internal___content',
  childrenAuthorsJson___children___internal___contentDigest = 'childrenAuthorsJson___children___internal___contentDigest',
  childrenAuthorsJson___children___internal___description = 'childrenAuthorsJson___children___internal___description',
  childrenAuthorsJson___children___internal___fieldOwners = 'childrenAuthorsJson___children___internal___fieldOwners',
  childrenAuthorsJson___children___internal___ignoreType = 'childrenAuthorsJson___children___internal___ignoreType',
  childrenAuthorsJson___children___internal___mediaType = 'childrenAuthorsJson___children___internal___mediaType',
  childrenAuthorsJson___children___internal___owner = 'childrenAuthorsJson___children___internal___owner',
  childrenAuthorsJson___children___internal___type = 'childrenAuthorsJson___children___internal___type',
  childrenAuthorsJson___internal___content = 'childrenAuthorsJson___internal___content',
  childrenAuthorsJson___internal___contentDigest = 'childrenAuthorsJson___internal___contentDigest',
  childrenAuthorsJson___internal___description = 'childrenAuthorsJson___internal___description',
  childrenAuthorsJson___internal___fieldOwners = 'childrenAuthorsJson___internal___fieldOwners',
  childrenAuthorsJson___internal___ignoreType = 'childrenAuthorsJson___internal___ignoreType',
  childrenAuthorsJson___internal___mediaType = 'childrenAuthorsJson___internal___mediaType',
  childrenAuthorsJson___internal___owner = 'childrenAuthorsJson___internal___owner',
  childrenAuthorsJson___internal___type = 'childrenAuthorsJson___internal___type',
  childrenAuthorsJson___name = 'childrenAuthorsJson___name',
  childrenAuthorsJson___picture = 'childrenAuthorsJson___picture',
  childrenAuthorsJson___bio = 'childrenAuthorsJson___bio',
  childrenAuthorsJson___biolong = 'childrenAuthorsJson___biolong',
  childrenAuthorsJson___title = 'childrenAuthorsJson___title',
  childrenAuthorsJson___twitter = 'childrenAuthorsJson___twitter',
  childrenAuthorsJson___github = 'childrenAuthorsJson___github',
  childrenAuthorsJson___types = 'childrenAuthorsJson___types',
  childrenBundlesJson = 'childrenBundlesJson',
  childrenBundlesJson___id = 'childrenBundlesJson___id',
  childrenBundlesJson___parent___id = 'childrenBundlesJson___parent___id',
  childrenBundlesJson___parent___parent___id = 'childrenBundlesJson___parent___parent___id',
  childrenBundlesJson___parent___parent___children = 'childrenBundlesJson___parent___parent___children',
  childrenBundlesJson___parent___children = 'childrenBundlesJson___parent___children',
  childrenBundlesJson___parent___children___id = 'childrenBundlesJson___parent___children___id',
  childrenBundlesJson___parent___children___children = 'childrenBundlesJson___parent___children___children',
  childrenBundlesJson___parent___internal___content = 'childrenBundlesJson___parent___internal___content',
  childrenBundlesJson___parent___internal___contentDigest = 'childrenBundlesJson___parent___internal___contentDigest',
  childrenBundlesJson___parent___internal___description = 'childrenBundlesJson___parent___internal___description',
  childrenBundlesJson___parent___internal___fieldOwners = 'childrenBundlesJson___parent___internal___fieldOwners',
  childrenBundlesJson___parent___internal___ignoreType = 'childrenBundlesJson___parent___internal___ignoreType',
  childrenBundlesJson___parent___internal___mediaType = 'childrenBundlesJson___parent___internal___mediaType',
  childrenBundlesJson___parent___internal___owner = 'childrenBundlesJson___parent___internal___owner',
  childrenBundlesJson___parent___internal___type = 'childrenBundlesJson___parent___internal___type',
  childrenBundlesJson___children = 'childrenBundlesJson___children',
  childrenBundlesJson___children___id = 'childrenBundlesJson___children___id',
  childrenBundlesJson___children___parent___id = 'childrenBundlesJson___children___parent___id',
  childrenBundlesJson___children___parent___children = 'childrenBundlesJson___children___parent___children',
  childrenBundlesJson___children___children = 'childrenBundlesJson___children___children',
  childrenBundlesJson___children___children___id = 'childrenBundlesJson___children___children___id',
  childrenBundlesJson___children___children___children = 'childrenBundlesJson___children___children___children',
  childrenBundlesJson___children___internal___content = 'childrenBundlesJson___children___internal___content',
  childrenBundlesJson___children___internal___contentDigest = 'childrenBundlesJson___children___internal___contentDigest',
  childrenBundlesJson___children___internal___description = 'childrenBundlesJson___children___internal___description',
  childrenBundlesJson___children___internal___fieldOwners = 'childrenBundlesJson___children___internal___fieldOwners',
  childrenBundlesJson___children___internal___ignoreType = 'childrenBundlesJson___children___internal___ignoreType',
  childrenBundlesJson___children___internal___mediaType = 'childrenBundlesJson___children___internal___mediaType',
  childrenBundlesJson___children___internal___owner = 'childrenBundlesJson___children___internal___owner',
  childrenBundlesJson___children___internal___type = 'childrenBundlesJson___children___internal___type',
  childrenBundlesJson___internal___content = 'childrenBundlesJson___internal___content',
  childrenBundlesJson___internal___contentDigest = 'childrenBundlesJson___internal___contentDigest',
  childrenBundlesJson___internal___description = 'childrenBundlesJson___internal___description',
  childrenBundlesJson___internal___fieldOwners = 'childrenBundlesJson___internal___fieldOwners',
  childrenBundlesJson___internal___ignoreType = 'childrenBundlesJson___internal___ignoreType',
  childrenBundlesJson___internal___mediaType = 'childrenBundlesJson___internal___mediaType',
  childrenBundlesJson___internal___owner = 'childrenBundlesJson___internal___owner',
  childrenBundlesJson___internal___type = 'childrenBundlesJson___internal___type',
  childrenBundlesJson___title = 'childrenBundlesJson___title',
  childrenBundlesJson___subtitle = 'childrenBundlesJson___subtitle',
  childrenBundlesJson___description = 'childrenBundlesJson___description',
  childrenBundlesJson___url = 'childrenBundlesJson___url',
  childrenBundlesJson___promototal = 'childrenBundlesJson___promototal',
  childrenBundlesJson___promoremaining = 'childrenBundlesJson___promoremaining',
  childrenBundlesJson___bundleLevel = 'childrenBundlesJson___bundleLevel',
  childrenBundlesJson___products = 'childrenBundlesJson___products',
  childrenBundlesJson___products___id = 'childrenBundlesJson___products___id',
  childrenBundlesJson___products___name = 'childrenBundlesJson___products___name',
  childrenBundlesJson___products___description = 'childrenBundlesJson___products___description',
  childrenBundlesJson___products___pricesale = 'childrenBundlesJson___products___pricesale',
  childrenBundlesJson___products___pricereg = 'childrenBundlesJson___products___pricereg',
  childrenBundlesJson___products___licensesMin = 'childrenBundlesJson___products___licensesMin',
  childrenBundlesJson___products___licensesMax = 'childrenBundlesJson___products___licensesMax',
  childrenBundlesJson___courseIds = 'childrenBundlesJson___courseIds',
  childPreviewsJson___id = 'childPreviewsJson___id',
  childPreviewsJson___parent___id = 'childPreviewsJson___parent___id',
  childPreviewsJson___parent___parent___id = 'childPreviewsJson___parent___parent___id',
  childPreviewsJson___parent___parent___children = 'childPreviewsJson___parent___parent___children',
  childPreviewsJson___parent___children = 'childPreviewsJson___parent___children',
  childPreviewsJson___parent___children___id = 'childPreviewsJson___parent___children___id',
  childPreviewsJson___parent___children___children = 'childPreviewsJson___parent___children___children',
  childPreviewsJson___parent___internal___content = 'childPreviewsJson___parent___internal___content',
  childPreviewsJson___parent___internal___contentDigest = 'childPreviewsJson___parent___internal___contentDigest',
  childPreviewsJson___parent___internal___description = 'childPreviewsJson___parent___internal___description',
  childPreviewsJson___parent___internal___fieldOwners = 'childPreviewsJson___parent___internal___fieldOwners',
  childPreviewsJson___parent___internal___ignoreType = 'childPreviewsJson___parent___internal___ignoreType',
  childPreviewsJson___parent___internal___mediaType = 'childPreviewsJson___parent___internal___mediaType',
  childPreviewsJson___parent___internal___owner = 'childPreviewsJson___parent___internal___owner',
  childPreviewsJson___parent___internal___type = 'childPreviewsJson___parent___internal___type',
  childPreviewsJson___children = 'childPreviewsJson___children',
  childPreviewsJson___children___id = 'childPreviewsJson___children___id',
  childPreviewsJson___children___parent___id = 'childPreviewsJson___children___parent___id',
  childPreviewsJson___children___parent___children = 'childPreviewsJson___children___parent___children',
  childPreviewsJson___children___children = 'childPreviewsJson___children___children',
  childPreviewsJson___children___children___id = 'childPreviewsJson___children___children___id',
  childPreviewsJson___children___children___children = 'childPreviewsJson___children___children___children',
  childPreviewsJson___children___internal___content = 'childPreviewsJson___children___internal___content',
  childPreviewsJson___children___internal___contentDigest = 'childPreviewsJson___children___internal___contentDigest',
  childPreviewsJson___children___internal___description = 'childPreviewsJson___children___internal___description',
  childPreviewsJson___children___internal___fieldOwners = 'childPreviewsJson___children___internal___fieldOwners',
  childPreviewsJson___children___internal___ignoreType = 'childPreviewsJson___children___internal___ignoreType',
  childPreviewsJson___children___internal___mediaType = 'childPreviewsJson___children___internal___mediaType',
  childPreviewsJson___children___internal___owner = 'childPreviewsJson___children___internal___owner',
  childPreviewsJson___children___internal___type = 'childPreviewsJson___children___internal___type',
  childPreviewsJson___internal___content = 'childPreviewsJson___internal___content',
  childPreviewsJson___internal___contentDigest = 'childPreviewsJson___internal___contentDigest',
  childPreviewsJson___internal___description = 'childPreviewsJson___internal___description',
  childPreviewsJson___internal___fieldOwners = 'childPreviewsJson___internal___fieldOwners',
  childPreviewsJson___internal___ignoreType = 'childPreviewsJson___internal___ignoreType',
  childPreviewsJson___internal___mediaType = 'childPreviewsJson___internal___mediaType',
  childPreviewsJson___internal___owner = 'childPreviewsJson___internal___owner',
  childPreviewsJson___internal___type = 'childPreviewsJson___internal___type',
  childPreviewsJson___coursePreviews = 'childPreviewsJson___coursePreviews',
  childPreviewsJson___coursePreviews___courseId = 'childPreviewsJson___coursePreviews___courseId',
  childPreviewsJson___coursePreviews___videoId = 'childPreviewsJson___coursePreviews___videoId',
  childPreviewsJson___chapterPreviews = 'childPreviewsJson___chapterPreviews',
  childPreviewsJson___chapterPreviews___chapterId = 'childPreviewsJson___chapterPreviews___chapterId',
  childPreviewsJson___chapterPreviews___videoId = 'childPreviewsJson___chapterPreviews___videoId',
  childPreviewsJson___lessonPreviews = 'childPreviewsJson___lessonPreviews',
  childPreviewsJson___lessonPreviews___lessonId = 'childPreviewsJson___lessonPreviews___lessonId',
  childPreviewsJson___lessonPreviews___videoId = 'childPreviewsJson___lessonPreviews___videoId',
  childrenTestimonialsJson = 'childrenTestimonialsJson',
  childrenTestimonialsJson___id = 'childrenTestimonialsJson___id',
  childrenTestimonialsJson___parent___id = 'childrenTestimonialsJson___parent___id',
  childrenTestimonialsJson___parent___parent___id = 'childrenTestimonialsJson___parent___parent___id',
  childrenTestimonialsJson___parent___parent___children = 'childrenTestimonialsJson___parent___parent___children',
  childrenTestimonialsJson___parent___children = 'childrenTestimonialsJson___parent___children',
  childrenTestimonialsJson___parent___children___id = 'childrenTestimonialsJson___parent___children___id',
  childrenTestimonialsJson___parent___children___children = 'childrenTestimonialsJson___parent___children___children',
  childrenTestimonialsJson___parent___internal___content = 'childrenTestimonialsJson___parent___internal___content',
  childrenTestimonialsJson___parent___internal___contentDigest = 'childrenTestimonialsJson___parent___internal___contentDigest',
  childrenTestimonialsJson___parent___internal___description = 'childrenTestimonialsJson___parent___internal___description',
  childrenTestimonialsJson___parent___internal___fieldOwners = 'childrenTestimonialsJson___parent___internal___fieldOwners',
  childrenTestimonialsJson___parent___internal___ignoreType = 'childrenTestimonialsJson___parent___internal___ignoreType',
  childrenTestimonialsJson___parent___internal___mediaType = 'childrenTestimonialsJson___parent___internal___mediaType',
  childrenTestimonialsJson___parent___internal___owner = 'childrenTestimonialsJson___parent___internal___owner',
  childrenTestimonialsJson___parent___internal___type = 'childrenTestimonialsJson___parent___internal___type',
  childrenTestimonialsJson___children = 'childrenTestimonialsJson___children',
  childrenTestimonialsJson___children___id = 'childrenTestimonialsJson___children___id',
  childrenTestimonialsJson___children___parent___id = 'childrenTestimonialsJson___children___parent___id',
  childrenTestimonialsJson___children___parent___children = 'childrenTestimonialsJson___children___parent___children',
  childrenTestimonialsJson___children___children = 'childrenTestimonialsJson___children___children',
  childrenTestimonialsJson___children___children___id = 'childrenTestimonialsJson___children___children___id',
  childrenTestimonialsJson___children___children___children = 'childrenTestimonialsJson___children___children___children',
  childrenTestimonialsJson___children___internal___content = 'childrenTestimonialsJson___children___internal___content',
  childrenTestimonialsJson___children___internal___contentDigest = 'childrenTestimonialsJson___children___internal___contentDigest',
  childrenTestimonialsJson___children___internal___description = 'childrenTestimonialsJson___children___internal___description',
  childrenTestimonialsJson___children___internal___fieldOwners = 'childrenTestimonialsJson___children___internal___fieldOwners',
  childrenTestimonialsJson___children___internal___ignoreType = 'childrenTestimonialsJson___children___internal___ignoreType',
  childrenTestimonialsJson___children___internal___mediaType = 'childrenTestimonialsJson___children___internal___mediaType',
  childrenTestimonialsJson___children___internal___owner = 'childrenTestimonialsJson___children___internal___owner',
  childrenTestimonialsJson___children___internal___type = 'childrenTestimonialsJson___children___internal___type',
  childrenTestimonialsJson___internal___content = 'childrenTestimonialsJson___internal___content',
  childrenTestimonialsJson___internal___contentDigest = 'childrenTestimonialsJson___internal___contentDigest',
  childrenTestimonialsJson___internal___description = 'childrenTestimonialsJson___internal___description',
  childrenTestimonialsJson___internal___fieldOwners = 'childrenTestimonialsJson___internal___fieldOwners',
  childrenTestimonialsJson___internal___ignoreType = 'childrenTestimonialsJson___internal___ignoreType',
  childrenTestimonialsJson___internal___mediaType = 'childrenTestimonialsJson___internal___mediaType',
  childrenTestimonialsJson___internal___owner = 'childrenTestimonialsJson___internal___owner',
  childrenTestimonialsJson___internal___type = 'childrenTestimonialsJson___internal___type',
  childrenTestimonialsJson___name = 'childrenTestimonialsJson___name',
  childrenTestimonialsJson___img = 'childrenTestimonialsJson___img',
  childrenTestimonialsJson___twitter = 'childrenTestimonialsJson___twitter',
  childrenTestimonialsJson___order = 'childrenTestimonialsJson___order',
  childrenTestimonialsJson___quoteHtml = 'childrenTestimonialsJson___quoteHtml',
  childrenTestimonialsJson___titleHtml = 'childrenTestimonialsJson___titleHtml',
  childrenTracksJson = 'childrenTracksJson',
  childrenTracksJson___id = 'childrenTracksJson___id',
  childrenTracksJson___parent___id = 'childrenTracksJson___parent___id',
  childrenTracksJson___parent___parent___id = 'childrenTracksJson___parent___parent___id',
  childrenTracksJson___parent___parent___children = 'childrenTracksJson___parent___parent___children',
  childrenTracksJson___parent___children = 'childrenTracksJson___parent___children',
  childrenTracksJson___parent___children___id = 'childrenTracksJson___parent___children___id',
  childrenTracksJson___parent___children___children = 'childrenTracksJson___parent___children___children',
  childrenTracksJson___parent___internal___content = 'childrenTracksJson___parent___internal___content',
  childrenTracksJson___parent___internal___contentDigest = 'childrenTracksJson___parent___internal___contentDigest',
  childrenTracksJson___parent___internal___description = 'childrenTracksJson___parent___internal___description',
  childrenTracksJson___parent___internal___fieldOwners = 'childrenTracksJson___parent___internal___fieldOwners',
  childrenTracksJson___parent___internal___ignoreType = 'childrenTracksJson___parent___internal___ignoreType',
  childrenTracksJson___parent___internal___mediaType = 'childrenTracksJson___parent___internal___mediaType',
  childrenTracksJson___parent___internal___owner = 'childrenTracksJson___parent___internal___owner',
  childrenTracksJson___parent___internal___type = 'childrenTracksJson___parent___internal___type',
  childrenTracksJson___children = 'childrenTracksJson___children',
  childrenTracksJson___children___id = 'childrenTracksJson___children___id',
  childrenTracksJson___children___parent___id = 'childrenTracksJson___children___parent___id',
  childrenTracksJson___children___parent___children = 'childrenTracksJson___children___parent___children',
  childrenTracksJson___children___children = 'childrenTracksJson___children___children',
  childrenTracksJson___children___children___id = 'childrenTracksJson___children___children___id',
  childrenTracksJson___children___children___children = 'childrenTracksJson___children___children___children',
  childrenTracksJson___children___internal___content = 'childrenTracksJson___children___internal___content',
  childrenTracksJson___children___internal___contentDigest = 'childrenTracksJson___children___internal___contentDigest',
  childrenTracksJson___children___internal___description = 'childrenTracksJson___children___internal___description',
  childrenTracksJson___children___internal___fieldOwners = 'childrenTracksJson___children___internal___fieldOwners',
  childrenTracksJson___children___internal___ignoreType = 'childrenTracksJson___children___internal___ignoreType',
  childrenTracksJson___children___internal___mediaType = 'childrenTracksJson___children___internal___mediaType',
  childrenTracksJson___children___internal___owner = 'childrenTracksJson___children___internal___owner',
  childrenTracksJson___children___internal___type = 'childrenTracksJson___children___internal___type',
  childrenTracksJson___internal___content = 'childrenTracksJson___internal___content',
  childrenTracksJson___internal___contentDigest = 'childrenTracksJson___internal___contentDigest',
  childrenTracksJson___internal___description = 'childrenTracksJson___internal___description',
  childrenTracksJson___internal___fieldOwners = 'childrenTracksJson___internal___fieldOwners',
  childrenTracksJson___internal___ignoreType = 'childrenTracksJson___internal___ignoreType',
  childrenTracksJson___internal___mediaType = 'childrenTracksJson___internal___mediaType',
  childrenTracksJson___internal___owner = 'childrenTracksJson___internal___owner',
  childrenTracksJson___internal___type = 'childrenTracksJson___internal___type',
  childrenTracksJson___title = 'childrenTracksJson___title',
  childrenTracksJson___imageSrc = 'childrenTracksJson___imageSrc',
  childrenTracksJson___description = 'childrenTracksJson___description',
  childrenTracksJson___bundles = 'childrenTracksJson___bundles',
  childrenTracksJson___bundles___id = 'childrenTracksJson___bundles___id',
  childrenTracksJson___bundles___order = 'childrenTracksJson___bundles___order',
  childrenTracksJson___bundles___description = 'childrenTracksJson___bundles___description',
  childrenTracksJson___bundles___title = 'childrenTracksJson___bundles___title',
  childrenTracksJson___levels = 'childrenTracksJson___levels',
  childrenTracksJson___levels___levelId = 'childrenTracksJson___levels___levelId',
  childrenTracksJson___levels___title = 'childrenTracksJson___levels___title',
  childrenTracksJson___levels___description = 'childrenTracksJson___levels___description',
  childrenCoursesJson = 'childrenCoursesJson',
  childrenCoursesJson___id = 'childrenCoursesJson___id',
  childrenCoursesJson___parent___id = 'childrenCoursesJson___parent___id',
  childrenCoursesJson___parent___parent___id = 'childrenCoursesJson___parent___parent___id',
  childrenCoursesJson___parent___parent___children = 'childrenCoursesJson___parent___parent___children',
  childrenCoursesJson___parent___children = 'childrenCoursesJson___parent___children',
  childrenCoursesJson___parent___children___id = 'childrenCoursesJson___parent___children___id',
  childrenCoursesJson___parent___children___children = 'childrenCoursesJson___parent___children___children',
  childrenCoursesJson___parent___internal___content = 'childrenCoursesJson___parent___internal___content',
  childrenCoursesJson___parent___internal___contentDigest = 'childrenCoursesJson___parent___internal___contentDigest',
  childrenCoursesJson___parent___internal___description = 'childrenCoursesJson___parent___internal___description',
  childrenCoursesJson___parent___internal___fieldOwners = 'childrenCoursesJson___parent___internal___fieldOwners',
  childrenCoursesJson___parent___internal___ignoreType = 'childrenCoursesJson___parent___internal___ignoreType',
  childrenCoursesJson___parent___internal___mediaType = 'childrenCoursesJson___parent___internal___mediaType',
  childrenCoursesJson___parent___internal___owner = 'childrenCoursesJson___parent___internal___owner',
  childrenCoursesJson___parent___internal___type = 'childrenCoursesJson___parent___internal___type',
  childrenCoursesJson___children = 'childrenCoursesJson___children',
  childrenCoursesJson___children___id = 'childrenCoursesJson___children___id',
  childrenCoursesJson___children___parent___id = 'childrenCoursesJson___children___parent___id',
  childrenCoursesJson___children___parent___children = 'childrenCoursesJson___children___parent___children',
  childrenCoursesJson___children___children = 'childrenCoursesJson___children___children',
  childrenCoursesJson___children___children___id = 'childrenCoursesJson___children___children___id',
  childrenCoursesJson___children___children___children = 'childrenCoursesJson___children___children___children',
  childrenCoursesJson___children___internal___content = 'childrenCoursesJson___children___internal___content',
  childrenCoursesJson___children___internal___contentDigest = 'childrenCoursesJson___children___internal___contentDigest',
  childrenCoursesJson___children___internal___description = 'childrenCoursesJson___children___internal___description',
  childrenCoursesJson___children___internal___fieldOwners = 'childrenCoursesJson___children___internal___fieldOwners',
  childrenCoursesJson___children___internal___ignoreType = 'childrenCoursesJson___children___internal___ignoreType',
  childrenCoursesJson___children___internal___mediaType = 'childrenCoursesJson___children___internal___mediaType',
  childrenCoursesJson___children___internal___owner = 'childrenCoursesJson___children___internal___owner',
  childrenCoursesJson___children___internal___type = 'childrenCoursesJson___children___internal___type',
  childrenCoursesJson___internal___content = 'childrenCoursesJson___internal___content',
  childrenCoursesJson___internal___contentDigest = 'childrenCoursesJson___internal___contentDigest',
  childrenCoursesJson___internal___description = 'childrenCoursesJson___internal___description',
  childrenCoursesJson___internal___fieldOwners = 'childrenCoursesJson___internal___fieldOwners',
  childrenCoursesJson___internal___ignoreType = 'childrenCoursesJson___internal___ignoreType',
  childrenCoursesJson___internal___mediaType = 'childrenCoursesJson___internal___mediaType',
  childrenCoursesJson___internal___owner = 'childrenCoursesJson___internal___owner',
  childrenCoursesJson___internal___type = 'childrenCoursesJson___internal___type',
  childrenCoursesJson___title = 'childrenCoursesJson___title',
  childrenCoursesJson___subtitle = 'childrenCoursesJson___subtitle',
  childrenCoursesJson___description = 'childrenCoursesJson___description',
  childrenCoursesJson___url = 'childrenCoursesJson___url',
  childrenCoursesJson___flavors = 'childrenCoursesJson___flavors',
  childrenCoursesJson___level = 'childrenCoursesJson___level',
  childrenCoursesJson___order = 'childrenCoursesJson___order',
  childrenCoursesJson___label = 'childrenCoursesJson___label',
  childrenCoursesJson___launchdate = 'childrenCoursesJson___launchdate',
  childrenCoursesJson___authors = 'childrenCoursesJson___authors',
  childrenCoursesJson___products = 'childrenCoursesJson___products',
  childrenCoursesJson___products___id = 'childrenCoursesJson___products___id',
  childrenCoursesJson___products___name = 'childrenCoursesJson___products___name',
  childrenCoursesJson___products___description = 'childrenCoursesJson___products___description',
  childrenCoursesJson___products___pricesale = 'childrenCoursesJson___products___pricesale',
  childrenCoursesJson___products___pricereg = 'childrenCoursesJson___products___pricereg',
  childrenCoursesJson___products___licensesMin = 'childrenCoursesJson___products___licensesMin',
  childrenCoursesJson___products___licensesMax = 'childrenCoursesJson___products___licensesMax',
  childrenCoursesJson___products___prodType = 'childrenCoursesJson___products___prodType',
  childrenCoursesJson___products___numPayments = 'childrenCoursesJson___products___numPayments',
  childrenCoursesJson___products___recurring = 'childrenCoursesJson___products___recurring',
  childrenCoursesJson___publishedChapters = 'childrenCoursesJson___publishedChapters',
  childrenCoursesJson___chapters = 'childrenCoursesJson___chapters',
  childrenCoursesJson___chapters___id = 'childrenCoursesJson___chapters___id',
  childrenCoursesJson___chapters___name = 'childrenCoursesJson___chapters___name',
  childrenCoursesJson___chapters___lessons = 'childrenCoursesJson___chapters___lessons',
  childrenCoursesJson___chapters___lessons___chapterId = 'childrenCoursesJson___chapters___lessons___chapterId',
  childrenCoursesJson___chapters___lessons___id = 'childrenCoursesJson___chapters___lessons___id',
  childrenCoursesJson___chapters___lessons___name = 'childrenCoursesJson___chapters___lessons___name',
  childrenCoursesJson___chapters___lessons___isPreview = 'childrenCoursesJson___chapters___lessons___isPreview',
  childrenCoursesJson___descriptionHtmlSections = 'childrenCoursesJson___descriptionHtmlSections',
  childrenCoursesJson___descriptionHtmlSections___title = 'childrenCoursesJson___descriptionHtmlSections___title',
  childrenCoursesJson___descriptionHtmlSections___descriptionHtml = 'childrenCoursesJson___descriptionHtmlSections___descriptionHtml',
  childrenCoursesJson___publishingSchedule = 'childrenCoursesJson___publishingSchedule',
  childrenCoursesJson___publishingSchedule___id = 'childrenCoursesJson___publishingSchedule___id',
  childrenCoursesJson___publishingSchedule___date = 'childrenCoursesJson___publishingSchedule___date',
  childrenCoursesJson___notes = 'childrenCoursesJson___notes',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___frontmatter___path = 'childMarkdownRemark___frontmatter___path',
  childMarkdownRemark___frontmatter___author = 'childMarkdownRemark___frontmatter___author',
  childMarkdownRemark___frontmatter___createdDate = 'childMarkdownRemark___frontmatter___createdDate',
  childMarkdownRemark___frontmatter___updatedDate = 'childMarkdownRemark___frontmatter___updatedDate',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark___frontmatter___draft',
  childMarkdownRemark___frontmatter___tags = 'childMarkdownRemark___frontmatter___tags',
  childMarkdownRemark___frontmatter___image___sourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
  childMarkdownRemark___frontmatter___image___absolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
  childMarkdownRemark___frontmatter___image___relativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
  childMarkdownRemark___frontmatter___image___extension = 'childMarkdownRemark___frontmatter___image___extension',
  childMarkdownRemark___frontmatter___image___size = 'childMarkdownRemark___frontmatter___image___size',
  childMarkdownRemark___frontmatter___image___prettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
  childMarkdownRemark___frontmatter___image___modifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
  childMarkdownRemark___frontmatter___image___accessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
  childMarkdownRemark___frontmatter___image___changeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
  childMarkdownRemark___frontmatter___image___birthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
  childMarkdownRemark___frontmatter___image___root = 'childMarkdownRemark___frontmatter___image___root',
  childMarkdownRemark___frontmatter___image___dir = 'childMarkdownRemark___frontmatter___image___dir',
  childMarkdownRemark___frontmatter___image___base = 'childMarkdownRemark___frontmatter___image___base',
  childMarkdownRemark___frontmatter___image___ext = 'childMarkdownRemark___frontmatter___image___ext',
  childMarkdownRemark___frontmatter___image___name = 'childMarkdownRemark___frontmatter___image___name',
  childMarkdownRemark___frontmatter___image___relativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
  childMarkdownRemark___frontmatter___image___dev = 'childMarkdownRemark___frontmatter___image___dev',
  childMarkdownRemark___frontmatter___image___mode = 'childMarkdownRemark___frontmatter___image___mode',
  childMarkdownRemark___frontmatter___image___nlink = 'childMarkdownRemark___frontmatter___image___nlink',
  childMarkdownRemark___frontmatter___image___uid = 'childMarkdownRemark___frontmatter___image___uid',
  childMarkdownRemark___frontmatter___image___gid = 'childMarkdownRemark___frontmatter___image___gid',
  childMarkdownRemark___frontmatter___image___rdev = 'childMarkdownRemark___frontmatter___image___rdev',
  childMarkdownRemark___frontmatter___image___ino = 'childMarkdownRemark___frontmatter___image___ino',
  childMarkdownRemark___frontmatter___image___atimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
  childMarkdownRemark___frontmatter___image___mtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
  childMarkdownRemark___frontmatter___image___ctimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
  childMarkdownRemark___frontmatter___image___atime = 'childMarkdownRemark___frontmatter___image___atime',
  childMarkdownRemark___frontmatter___image___mtime = 'childMarkdownRemark___frontmatter___image___mtime',
  childMarkdownRemark___frontmatter___image___ctime = 'childMarkdownRemark___frontmatter___image___ctime',
  childMarkdownRemark___frontmatter___image___birthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
  childMarkdownRemark___frontmatter___image___birthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
  childMarkdownRemark___frontmatter___image___blksize = 'childMarkdownRemark___frontmatter___image___blksize',
  childMarkdownRemark___frontmatter___image___blocks = 'childMarkdownRemark___frontmatter___image___blocks',
  childMarkdownRemark___frontmatter___image___publicURL = 'childMarkdownRemark___frontmatter___image___publicURL',
  childMarkdownRemark___frontmatter___image___id = 'childMarkdownRemark___frontmatter___image___id',
  childMarkdownRemark___frontmatter___image___children = 'childMarkdownRemark___frontmatter___image___children',
  childMarkdownRemark___frontmatter___image___childrenAuthorsJson = 'childMarkdownRemark___frontmatter___image___childrenAuthorsJson',
  childMarkdownRemark___frontmatter___image___childrenBundlesJson = 'childMarkdownRemark___frontmatter___image___childrenBundlesJson',
  childMarkdownRemark___frontmatter___image___childrenTestimonialsJson = 'childMarkdownRemark___frontmatter___image___childrenTestimonialsJson',
  childMarkdownRemark___frontmatter___image___childrenTracksJson = 'childMarkdownRemark___frontmatter___image___childrenTracksJson',
  childMarkdownRemark___frontmatter___image___childrenCoursesJson = 'childMarkdownRemark___frontmatter___image___childrenCoursesJson',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenAuthorsJson?: Maybe<AuthorsJsonFilterListInput>,
  childrenBundlesJson?: Maybe<BundlesJsonFilterListInput>,
  childPreviewsJson?: Maybe<PreviewsJsonFilterInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childrenTracksJson?: Maybe<TracksJsonFilterListInput>,
  childrenCoursesJson?: Maybe<CoursesJsonFilterListInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter___title',
  frontmatter___path = 'frontmatter___path',
  frontmatter___author = 'frontmatter___author',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___updatedDate = 'frontmatter___updatedDate',
  frontmatter___draft = 'frontmatter___draft',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___image___sourceInstanceName = 'frontmatter___image___sourceInstanceName',
  frontmatter___image___absolutePath = 'frontmatter___image___absolutePath',
  frontmatter___image___relativePath = 'frontmatter___image___relativePath',
  frontmatter___image___extension = 'frontmatter___image___extension',
  frontmatter___image___size = 'frontmatter___image___size',
  frontmatter___image___prettySize = 'frontmatter___image___prettySize',
  frontmatter___image___modifiedTime = 'frontmatter___image___modifiedTime',
  frontmatter___image___accessTime = 'frontmatter___image___accessTime',
  frontmatter___image___changeTime = 'frontmatter___image___changeTime',
  frontmatter___image___birthTime = 'frontmatter___image___birthTime',
  frontmatter___image___root = 'frontmatter___image___root',
  frontmatter___image___dir = 'frontmatter___image___dir',
  frontmatter___image___base = 'frontmatter___image___base',
  frontmatter___image___ext = 'frontmatter___image___ext',
  frontmatter___image___name = 'frontmatter___image___name',
  frontmatter___image___relativeDirectory = 'frontmatter___image___relativeDirectory',
  frontmatter___image___dev = 'frontmatter___image___dev',
  frontmatter___image___mode = 'frontmatter___image___mode',
  frontmatter___image___nlink = 'frontmatter___image___nlink',
  frontmatter___image___uid = 'frontmatter___image___uid',
  frontmatter___image___gid = 'frontmatter___image___gid',
  frontmatter___image___rdev = 'frontmatter___image___rdev',
  frontmatter___image___ino = 'frontmatter___image___ino',
  frontmatter___image___atimeMs = 'frontmatter___image___atimeMs',
  frontmatter___image___mtimeMs = 'frontmatter___image___mtimeMs',
  frontmatter___image___ctimeMs = 'frontmatter___image___ctimeMs',
  frontmatter___image___atime = 'frontmatter___image___atime',
  frontmatter___image___mtime = 'frontmatter___image___mtime',
  frontmatter___image___ctime = 'frontmatter___image___ctime',
  frontmatter___image___birthtime = 'frontmatter___image___birthtime',
  frontmatter___image___birthtimeMs = 'frontmatter___image___birthtimeMs',
  frontmatter___image___blksize = 'frontmatter___image___blksize',
  frontmatter___image___blocks = 'frontmatter___image___blocks',
  frontmatter___image___publicURL = 'frontmatter___image___publicURL',
  frontmatter___image___childImageSharp___id = 'frontmatter___image___childImageSharp___id',
  frontmatter___image___childImageSharp___children = 'frontmatter___image___childImageSharp___children',
  frontmatter___image___id = 'frontmatter___image___id',
  frontmatter___image___parent___id = 'frontmatter___image___parent___id',
  frontmatter___image___parent___children = 'frontmatter___image___parent___children',
  frontmatter___image___children = 'frontmatter___image___children',
  frontmatter___image___children___id = 'frontmatter___image___children___id',
  frontmatter___image___children___children = 'frontmatter___image___children___children',
  frontmatter___image___internal___content = 'frontmatter___image___internal___content',
  frontmatter___image___internal___contentDigest = 'frontmatter___image___internal___contentDigest',
  frontmatter___image___internal___description = 'frontmatter___image___internal___description',
  frontmatter___image___internal___fieldOwners = 'frontmatter___image___internal___fieldOwners',
  frontmatter___image___internal___ignoreType = 'frontmatter___image___internal___ignoreType',
  frontmatter___image___internal___mediaType = 'frontmatter___image___internal___mediaType',
  frontmatter___image___internal___owner = 'frontmatter___image___internal___owner',
  frontmatter___image___internal___type = 'frontmatter___image___internal___type',
  frontmatter___image___childrenAuthorsJson = 'frontmatter___image___childrenAuthorsJson',
  frontmatter___image___childrenAuthorsJson___id = 'frontmatter___image___childrenAuthorsJson___id',
  frontmatter___image___childrenAuthorsJson___children = 'frontmatter___image___childrenAuthorsJson___children',
  frontmatter___image___childrenAuthorsJson___name = 'frontmatter___image___childrenAuthorsJson___name',
  frontmatter___image___childrenAuthorsJson___picture = 'frontmatter___image___childrenAuthorsJson___picture',
  frontmatter___image___childrenAuthorsJson___bio = 'frontmatter___image___childrenAuthorsJson___bio',
  frontmatter___image___childrenAuthorsJson___biolong = 'frontmatter___image___childrenAuthorsJson___biolong',
  frontmatter___image___childrenAuthorsJson___title = 'frontmatter___image___childrenAuthorsJson___title',
  frontmatter___image___childrenAuthorsJson___twitter = 'frontmatter___image___childrenAuthorsJson___twitter',
  frontmatter___image___childrenAuthorsJson___github = 'frontmatter___image___childrenAuthorsJson___github',
  frontmatter___image___childrenAuthorsJson___types = 'frontmatter___image___childrenAuthorsJson___types',
  frontmatter___image___childrenBundlesJson = 'frontmatter___image___childrenBundlesJson',
  frontmatter___image___childrenBundlesJson___id = 'frontmatter___image___childrenBundlesJson___id',
  frontmatter___image___childrenBundlesJson___children = 'frontmatter___image___childrenBundlesJson___children',
  frontmatter___image___childrenBundlesJson___title = 'frontmatter___image___childrenBundlesJson___title',
  frontmatter___image___childrenBundlesJson___subtitle = 'frontmatter___image___childrenBundlesJson___subtitle',
  frontmatter___image___childrenBundlesJson___description = 'frontmatter___image___childrenBundlesJson___description',
  frontmatter___image___childrenBundlesJson___url = 'frontmatter___image___childrenBundlesJson___url',
  frontmatter___image___childrenBundlesJson___promototal = 'frontmatter___image___childrenBundlesJson___promototal',
  frontmatter___image___childrenBundlesJson___promoremaining = 'frontmatter___image___childrenBundlesJson___promoremaining',
  frontmatter___image___childrenBundlesJson___bundleLevel = 'frontmatter___image___childrenBundlesJson___bundleLevel',
  frontmatter___image___childrenBundlesJson___products = 'frontmatter___image___childrenBundlesJson___products',
  frontmatter___image___childrenBundlesJson___courseIds = 'frontmatter___image___childrenBundlesJson___courseIds',
  frontmatter___image___childPreviewsJson___id = 'frontmatter___image___childPreviewsJson___id',
  frontmatter___image___childPreviewsJson___children = 'frontmatter___image___childPreviewsJson___children',
  frontmatter___image___childPreviewsJson___coursePreviews = 'frontmatter___image___childPreviewsJson___coursePreviews',
  frontmatter___image___childPreviewsJson___chapterPreviews = 'frontmatter___image___childPreviewsJson___chapterPreviews',
  frontmatter___image___childPreviewsJson___lessonPreviews = 'frontmatter___image___childPreviewsJson___lessonPreviews',
  frontmatter___image___childrenTestimonialsJson = 'frontmatter___image___childrenTestimonialsJson',
  frontmatter___image___childrenTestimonialsJson___id = 'frontmatter___image___childrenTestimonialsJson___id',
  frontmatter___image___childrenTestimonialsJson___children = 'frontmatter___image___childrenTestimonialsJson___children',
  frontmatter___image___childrenTestimonialsJson___name = 'frontmatter___image___childrenTestimonialsJson___name',
  frontmatter___image___childrenTestimonialsJson___img = 'frontmatter___image___childrenTestimonialsJson___img',
  frontmatter___image___childrenTestimonialsJson___twitter = 'frontmatter___image___childrenTestimonialsJson___twitter',
  frontmatter___image___childrenTestimonialsJson___order = 'frontmatter___image___childrenTestimonialsJson___order',
  frontmatter___image___childrenTestimonialsJson___quoteHtml = 'frontmatter___image___childrenTestimonialsJson___quoteHtml',
  frontmatter___image___childrenTestimonialsJson___titleHtml = 'frontmatter___image___childrenTestimonialsJson___titleHtml',
  frontmatter___image___childrenTracksJson = 'frontmatter___image___childrenTracksJson',
  frontmatter___image___childrenTracksJson___id = 'frontmatter___image___childrenTracksJson___id',
  frontmatter___image___childrenTracksJson___children = 'frontmatter___image___childrenTracksJson___children',
  frontmatter___image___childrenTracksJson___title = 'frontmatter___image___childrenTracksJson___title',
  frontmatter___image___childrenTracksJson___imageSrc = 'frontmatter___image___childrenTracksJson___imageSrc',
  frontmatter___image___childrenTracksJson___description = 'frontmatter___image___childrenTracksJson___description',
  frontmatter___image___childrenTracksJson___bundles = 'frontmatter___image___childrenTracksJson___bundles',
  frontmatter___image___childrenTracksJson___levels = 'frontmatter___image___childrenTracksJson___levels',
  frontmatter___image___childrenCoursesJson = 'frontmatter___image___childrenCoursesJson',
  frontmatter___image___childrenCoursesJson___id = 'frontmatter___image___childrenCoursesJson___id',
  frontmatter___image___childrenCoursesJson___children = 'frontmatter___image___childrenCoursesJson___children',
  frontmatter___image___childrenCoursesJson___title = 'frontmatter___image___childrenCoursesJson___title',
  frontmatter___image___childrenCoursesJson___subtitle = 'frontmatter___image___childrenCoursesJson___subtitle',
  frontmatter___image___childrenCoursesJson___description = 'frontmatter___image___childrenCoursesJson___description',
  frontmatter___image___childrenCoursesJson___url = 'frontmatter___image___childrenCoursesJson___url',
  frontmatter___image___childrenCoursesJson___flavors = 'frontmatter___image___childrenCoursesJson___flavors',
  frontmatter___image___childrenCoursesJson___level = 'frontmatter___image___childrenCoursesJson___level',
  frontmatter___image___childrenCoursesJson___order = 'frontmatter___image___childrenCoursesJson___order',
  frontmatter___image___childrenCoursesJson___label = 'frontmatter___image___childrenCoursesJson___label',
  frontmatter___image___childrenCoursesJson___launchdate = 'frontmatter___image___childrenCoursesJson___launchdate',
  frontmatter___image___childrenCoursesJson___authors = 'frontmatter___image___childrenCoursesJson___authors',
  frontmatter___image___childrenCoursesJson___products = 'frontmatter___image___childrenCoursesJson___products',
  frontmatter___image___childrenCoursesJson___publishedChapters = 'frontmatter___image___childrenCoursesJson___publishedChapters',
  frontmatter___image___childrenCoursesJson___chapters = 'frontmatter___image___childrenCoursesJson___chapters',
  frontmatter___image___childrenCoursesJson___descriptionHtmlSections = 'frontmatter___image___childrenCoursesJson___descriptionHtmlSections',
  frontmatter___image___childrenCoursesJson___publishingSchedule = 'frontmatter___image___childrenCoursesJson___publishingSchedule',
  frontmatter___image___childrenCoursesJson___notes = 'frontmatter___image___childrenCoursesJson___notes',
  frontmatter___image___childMarkdownRemark___id = 'frontmatter___image___childMarkdownRemark___id',
  frontmatter___image___childMarkdownRemark___excerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
  frontmatter___image___childMarkdownRemark___rawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
  frontmatter___image___childMarkdownRemark___fileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
  frontmatter___image___childMarkdownRemark___html = 'frontmatter___image___childMarkdownRemark___html',
  frontmatter___image___childMarkdownRemark___htmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
  frontmatter___image___childMarkdownRemark___excerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
  frontmatter___image___childMarkdownRemark___headings = 'frontmatter___image___childMarkdownRemark___headings',
  frontmatter___image___childMarkdownRemark___timeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
  frontmatter___image___childMarkdownRemark___tableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
  frontmatter___image___childMarkdownRemark___children = 'frontmatter___image___childMarkdownRemark___children',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  draft?: Maybe<Scalars['Boolean']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  image?: Maybe<File>,
};


export type MarkdownRemarkFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MarkdownRemarkFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  draft?: Maybe<BooleanQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<FileFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type PreviewsJson = Node & {
   __typename?: 'PreviewsJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  coursePreviews?: Maybe<Array<Maybe<PreviewsJsonCoursePreviews>>>,
  chapterPreviews?: Maybe<Array<Maybe<PreviewsJsonChapterPreviews>>>,
  lessonPreviews?: Maybe<Array<Maybe<PreviewsJsonLessonPreviews>>>,
};

export type PreviewsJsonChapterPreviews = {
   __typename?: 'PreviewsJsonChapterPreviews',
  chapterId?: Maybe<Scalars['Int']>,
  videoId?: Maybe<Scalars['String']>,
};

export type PreviewsJsonChapterPreviewsFilterInput = {
  chapterId?: Maybe<IntQueryOperatorInput>,
  videoId?: Maybe<StringQueryOperatorInput>,
};

export type PreviewsJsonChapterPreviewsFilterListInput = {
  elemMatch?: Maybe<PreviewsJsonChapterPreviewsFilterInput>,
};

export type PreviewsJsonConnection = {
   __typename?: 'PreviewsJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<PreviewsJsonEdge>,
  nodes: Array<PreviewsJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<PreviewsJsonGroupConnection>,
};


export type PreviewsJsonConnectionDistinctArgs = {
  field: PreviewsJsonFieldsEnum
};


export type PreviewsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: PreviewsJsonFieldsEnum
};

export type PreviewsJsonCoursePreviews = {
   __typename?: 'PreviewsJsonCoursePreviews',
  courseId?: Maybe<Scalars['String']>,
  videoId?: Maybe<Scalars['String']>,
};

export type PreviewsJsonCoursePreviewsFilterInput = {
  courseId?: Maybe<StringQueryOperatorInput>,
  videoId?: Maybe<StringQueryOperatorInput>,
};

export type PreviewsJsonCoursePreviewsFilterListInput = {
  elemMatch?: Maybe<PreviewsJsonCoursePreviewsFilterInput>,
};

export type PreviewsJsonEdge = {
   __typename?: 'PreviewsJsonEdge',
  next?: Maybe<PreviewsJson>,
  node: PreviewsJson,
  previous?: Maybe<PreviewsJson>,
};

export enum PreviewsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  coursePreviews = 'coursePreviews',
  coursePreviews___courseId = 'coursePreviews___courseId',
  coursePreviews___videoId = 'coursePreviews___videoId',
  chapterPreviews = 'chapterPreviews',
  chapterPreviews___chapterId = 'chapterPreviews___chapterId',
  chapterPreviews___videoId = 'chapterPreviews___videoId',
  lessonPreviews = 'lessonPreviews',
  lessonPreviews___lessonId = 'lessonPreviews___lessonId',
  lessonPreviews___videoId = 'lessonPreviews___videoId'
}

export type PreviewsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  coursePreviews?: Maybe<PreviewsJsonCoursePreviewsFilterListInput>,
  chapterPreviews?: Maybe<PreviewsJsonChapterPreviewsFilterListInput>,
  lessonPreviews?: Maybe<PreviewsJsonLessonPreviewsFilterListInput>,
};

export type PreviewsJsonGroupConnection = {
   __typename?: 'PreviewsJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<PreviewsJsonEdge>,
  nodes: Array<PreviewsJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type PreviewsJsonLessonPreviews = {
   __typename?: 'PreviewsJsonLessonPreviews',
  lessonId?: Maybe<Scalars['String']>,
  videoId?: Maybe<Scalars['String']>,
};

export type PreviewsJsonLessonPreviewsFilterInput = {
  lessonId?: Maybe<StringQueryOperatorInput>,
  videoId?: Maybe<StringQueryOperatorInput>,
};

export type PreviewsJsonLessonPreviewsFilterListInput = {
  elemMatch?: Maybe<PreviewsJsonLessonPreviewsFilterInput>,
};

export type PreviewsJsonSortInput = {
  fields?: Maybe<Array<Maybe<PreviewsJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  previewsJson?: Maybe<PreviewsJson>,
  allPreviewsJson: PreviewsJsonConnection,
  coursesJson?: Maybe<CoursesJson>,
  allCoursesJson: CoursesJsonConnection,
  tracksJson?: Maybe<TracksJson>,
  allTracksJson: TracksJsonConnection,
  testimonialsJson?: Maybe<TestimonialsJson>,
  allTestimonialsJson: TestimonialsJsonConnection,
  bundlesJson?: Maybe<BundlesJson>,
  allBundlesJson: BundlesJsonConnection,
  authorsJson?: Maybe<AuthorsJson>,
  allAuthorsJson: AuthorsJsonConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenAuthorsJson?: Maybe<AuthorsJsonFilterListInput>,
  childrenBundlesJson?: Maybe<BundlesJsonFilterListInput>,
  childPreviewsJson?: Maybe<PreviewsJsonFilterInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childrenTracksJson?: Maybe<TracksJsonFilterListInput>,
  childrenCoursesJson?: Maybe<CoursesJsonFilterListInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryPreviewsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  coursePreviews?: Maybe<PreviewsJsonCoursePreviewsFilterListInput>,
  chapterPreviews?: Maybe<PreviewsJsonChapterPreviewsFilterListInput>,
  lessonPreviews?: Maybe<PreviewsJsonLessonPreviewsFilterListInput>
};


export type QueryAllPreviewsJsonArgs = {
  filter?: Maybe<PreviewsJsonFilterInput>,
  sort?: Maybe<PreviewsJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryCoursesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  flavors?: Maybe<StringQueryOperatorInput>,
  level?: Maybe<IntQueryOperatorInput>,
  order?: Maybe<IntQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  launchdate?: Maybe<StringQueryOperatorInput>,
  authors?: Maybe<StringQueryOperatorInput>,
  products?: Maybe<CoursesJsonProductsFilterListInput>,
  publishedChapters?: Maybe<IntQueryOperatorInput>,
  chapters?: Maybe<CoursesJsonChaptersFilterListInput>,
  descriptionHtmlSections?: Maybe<CoursesJsonDescriptionHtmlSectionsFilterListInput>,
  publishingSchedule?: Maybe<CoursesJsonPublishingScheduleFilterListInput>,
  notes?: Maybe<StringQueryOperatorInput>
};


export type QueryAllCoursesJsonArgs = {
  filter?: Maybe<CoursesJsonFilterInput>,
  sort?: Maybe<CoursesJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTracksJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  imageSrc?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  bundles?: Maybe<TracksJsonBundlesFilterListInput>,
  levels?: Maybe<TracksJsonLevelsFilterListInput>
};


export type QueryAllTracksJsonArgs = {
  filter?: Maybe<TracksJsonFilterInput>,
  sort?: Maybe<TracksJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTestimonialsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  img?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<IntQueryOperatorInput>,
  quoteHtml?: Maybe<StringQueryOperatorInput>,
  titleHtml?: Maybe<StringQueryOperatorInput>
};


export type QueryAllTestimonialsJsonArgs = {
  filter?: Maybe<TestimonialsJsonFilterInput>,
  sort?: Maybe<TestimonialsJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryBundlesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  promototal?: Maybe<IntQueryOperatorInput>,
  promoremaining?: Maybe<IntQueryOperatorInput>,
  bundleLevel?: Maybe<IntQueryOperatorInput>,
  products?: Maybe<BundlesJsonProductsFilterListInput>,
  courseIds?: Maybe<StringQueryOperatorInput>
};


export type QueryAllBundlesJsonArgs = {
  filter?: Maybe<BundlesJsonFilterInput>,
  sort?: Maybe<BundlesJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryAuthorsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  biolong?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  github?: Maybe<StringQueryOperatorInput>,
  types?: Maybe<StringQueryOperatorInput>
};


export type QueryAllAuthorsJsonArgs = {
  filter?: Maybe<AuthorsJsonFilterInput>,
  sort?: Maybe<AuthorsJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___siteName = 'siteMetadata___siteName',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  internalComponentName?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  courseUrl?: Maybe<Scalars['String']>,
  trackId?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  totalPages?: Maybe<Scalars['Int']>,
  currentPage?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  prevPostPath?: Maybe<Scalars['String']>,
  nextPostPath?: Maybe<Scalars['String']>,
  posts?: Maybe<SitePageContextPosts>,
  post?: Maybe<Array<Maybe<SitePageContextPost>>>,
  tag?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  courseUrl?: Maybe<StringQueryOperatorInput>,
  trackId?: Maybe<StringQueryOperatorInput>,
  limit?: Maybe<IntQueryOperatorInput>,
  skip?: Maybe<IntQueryOperatorInput>,
  totalPages?: Maybe<IntQueryOperatorInput>,
  currentPage?: Maybe<IntQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  prevPostPath?: Maybe<StringQueryOperatorInput>,
  nextPostPath?: Maybe<StringQueryOperatorInput>,
  posts?: Maybe<SitePageContextPostsFilterInput>,
  post?: Maybe<SitePageContextPostFilterListInput>,
  tag?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPost = {
   __typename?: 'SitePageContextPost',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostFrontmatter>,
};

export type SitePageContextPostFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostFrontmatterFilterInput>,
};

export type SitePageContextPostFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostFilterInput>,
};

export type SitePageContextPostFrontmatter = {
   __typename?: 'SitePageContextPostFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPosts = {
   __typename?: 'SitePageContextPosts',
  Azure?: Maybe<Array<Maybe<SitePageContextPostsAzure>>>,
  Mobile?: Maybe<Array<Maybe<SitePageContextPostsMobile>>>,
  NativeScript?: Maybe<Array<Maybe<SitePageContextPostsNativeScript>>>,
  iOS?: Maybe<Array<Maybe<SitePageContextPostsIos>>>,
  JavaScript?: Maybe<Array<Maybe<SitePageContextPostsJavaScript>>>,
  Simulator?: Maybe<Array<Maybe<SitePageContextPostsSimulator>>>,
  TypeScript?: Maybe<Array<Maybe<SitePageContextPostsTypeScript>>>,
  Visual_Studio_Code?: Maybe<Array<Maybe<SitePageContextPostsVisual_Studio_Code>>>,
  Organization?: Maybe<Array<Maybe<SitePageContextPostsOrganization>>>,
  Tips_and_Tricks?: Maybe<Array<Maybe<SitePageContextPostsTips_And_Tricks>>>,
  Pluralsight?: Maybe<Array<Maybe<SitePageContextPostsPluralsight>>>,
  tutorial?: Maybe<Array<Maybe<SitePageContextPostsTutorial>>>,
  video?: Maybe<Array<Maybe<SitePageContextPostsVideo>>>,
  Office365?: Maybe<Array<Maybe<SitePageContextPostsOffice365>>>,
  CLI?: Maybe<Array<Maybe<SitePageContextPostsCli>>>,
  GitHub?: Maybe<Array<Maybe<SitePageContextPostsGitHub>>>,
  OAuth?: Maybe<Array<Maybe<SitePageContextPostsOAuth>>>,
  Plugins?: Maybe<Array<Maybe<SitePageContextPostsPlugins>>>,
  Facebook?: Maybe<Array<Maybe<SitePageContextPostsFacebook>>>,
  Android?: Maybe<Array<Maybe<SitePageContextPostsAndroid>>>,
  Angular?: Maybe<Array<Maybe<SitePageContextPostsAngular>>>,
  Animation?: Maybe<Array<Maybe<SitePageContextPostsAnimation>>>,
  Training?: Maybe<Array<Maybe<SitePageContextPostsTraining>>>,
  NativeScripting?: Maybe<Array<Maybe<SitePageContextPostsNativeScripting>>>,
  Tutorial?: Maybe<Array<Maybe<SitePageContextPostsTutorial>>>,
  Video?: Maybe<Array<Maybe<SitePageContextPostsVideo>>>,
  Courses?: Maybe<Array<Maybe<SitePageContextPostsCourses>>>,
  Styling?: Maybe<Array<Maybe<SitePageContextPostsStyling>>>,
  Core?: Maybe<Array<Maybe<SitePageContextPostsCore>>>,
  Authentication?: Maybe<Array<Maybe<SitePageContextPostsAuthentication>>>,
  Authorization?: Maybe<Array<Maybe<SitePageContextPostsAuthorization>>>,
  Enterprise?: Maybe<Array<Maybe<SitePageContextPostsEnterprise>>>,
  UI?: Maybe<Array<Maybe<SitePageContextPostsUi>>>,
  Cordova?: Maybe<Array<Maybe<SitePageContextPostsCordova>>>,
  Tip?: Maybe<Array<Maybe<SitePageContextPostsTip>>>,
  Vue?: Maybe<Array<Maybe<SitePageContextPostsVue>>>,
  I_Script_Native?: Maybe<Array<Maybe<SitePageContextPostsI_Script_Native>>>,
  Course?: Maybe<Array<Maybe<SitePageContextPostsCourse>>>,
  FAB?: Maybe<Array<Maybe<SitePageContextPostsFab>>>,
  Floating_Action_Button?: Maybe<Array<Maybe<SitePageContextPostsFloating_Action_Button>>>,
  Security?: Maybe<Array<Maybe<SitePageContextPostsSecurity>>>,
  Architecture?: Maybe<Array<Maybe<SitePageContextPostsArchitecture>>>,
  Maps?: Maybe<Array<Maybe<SitePageContextPostsMaps>>>,
  Testing?: Maybe<Array<Maybe<SitePageContextPostsTesting>>>,
  CI?: Maybe<Array<Maybe<SitePageContextPostsCi>>>,
  npx?: Maybe<Array<Maybe<SitePageContextPostsNpx>>>,
  Fastlane?: Maybe<Array<Maybe<SitePageContextPostsFastlane>>>,
  GitHub_Actions?: Maybe<Array<Maybe<SitePageContextPostsGitHub_Actions>>>,
  Azure_Pipeline?: Maybe<Array<Maybe<SitePageContextPostsAzure_Pipeline>>>,
};

export type SitePageContextPostsAndroid = {
   __typename?: 'SitePageContextPostsAndroid',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAndroidFrontmatter>,
};

export type SitePageContextPostsAndroidFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAndroidFrontmatterFilterInput>,
};

export type SitePageContextPostsAndroidFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAndroidFilterInput>,
};

export type SitePageContextPostsAndroidFrontmatter = {
   __typename?: 'SitePageContextPostsAndroidFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAndroidFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAndroidFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAndroidFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAngular = {
   __typename?: 'SitePageContextPostsAngular',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAngularFrontmatter>,
};

export type SitePageContextPostsAngularFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAngularFrontmatterFilterInput>,
};

export type SitePageContextPostsAngularFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAngularFilterInput>,
};

export type SitePageContextPostsAngularFrontmatter = {
   __typename?: 'SitePageContextPostsAngularFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAngularFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAngularFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAngularFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAnimation = {
   __typename?: 'SitePageContextPostsAnimation',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAnimationFrontmatter>,
};

export type SitePageContextPostsAnimationFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAnimationFrontmatterFilterInput>,
};

export type SitePageContextPostsAnimationFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAnimationFilterInput>,
};

export type SitePageContextPostsAnimationFrontmatter = {
   __typename?: 'SitePageContextPostsAnimationFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAnimationFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAnimationFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAnimationFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsArchitecture = {
   __typename?: 'SitePageContextPostsArchitecture',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsArchitectureFrontmatter>,
};

export type SitePageContextPostsArchitectureFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsArchitectureFrontmatterFilterInput>,
};

export type SitePageContextPostsArchitectureFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsArchitectureFilterInput>,
};

export type SitePageContextPostsArchitectureFrontmatter = {
   __typename?: 'SitePageContextPostsArchitectureFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsArchitectureFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsArchitectureFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsArchitectureFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAuthentication = {
   __typename?: 'SitePageContextPostsAuthentication',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAuthenticationFrontmatter>,
};

export type SitePageContextPostsAuthenticationFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAuthenticationFrontmatterFilterInput>,
};

export type SitePageContextPostsAuthenticationFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAuthenticationFilterInput>,
};

export type SitePageContextPostsAuthenticationFrontmatter = {
   __typename?: 'SitePageContextPostsAuthenticationFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAuthenticationFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAuthenticationFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAuthenticationFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAuthorization = {
   __typename?: 'SitePageContextPostsAuthorization',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAuthorizationFrontmatter>,
};

export type SitePageContextPostsAuthorizationFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAuthorizationFrontmatterFilterInput>,
};

export type SitePageContextPostsAuthorizationFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAuthorizationFilterInput>,
};

export type SitePageContextPostsAuthorizationFrontmatter = {
   __typename?: 'SitePageContextPostsAuthorizationFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAuthorizationFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAuthorizationFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAuthorizationFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAzure = {
   __typename?: 'SitePageContextPostsAzure',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAzureFrontmatter>,
};

export type SitePageContextPostsAzure_Pipeline = {
   __typename?: 'SitePageContextPostsAzure_Pipeline',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsAzure_PipelineFrontmatter>,
};

export type SitePageContextPostsAzure_PipelineFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAzure_PipelineFrontmatterFilterInput>,
};

export type SitePageContextPostsAzure_PipelineFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAzure_PipelineFilterInput>,
};

export type SitePageContextPostsAzure_PipelineFrontmatter = {
   __typename?: 'SitePageContextPostsAzure_PipelineFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAzure_PipelineFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAzure_PipelineFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAzure_PipelineFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsAzureFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsAzureFrontmatterFilterInput>,
};

export type SitePageContextPostsAzureFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsAzureFilterInput>,
};

export type SitePageContextPostsAzureFrontmatter = {
   __typename?: 'SitePageContextPostsAzureFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsAzureFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsAzureFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsAzureFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCi = {
   __typename?: 'SitePageContextPostsCI',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCiFrontmatter>,
};

export type SitePageContextPostsCiFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCiFrontmatterFilterInput>,
};

export type SitePageContextPostsCiFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCiFilterInput>,
};

export type SitePageContextPostsCiFrontmatter = {
   __typename?: 'SitePageContextPostsCIFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCiFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCiFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCiFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCli = {
   __typename?: 'SitePageContextPostsCLI',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCliFrontmatter>,
};

export type SitePageContextPostsCliFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCliFrontmatterFilterInput>,
};

export type SitePageContextPostsCliFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCliFilterInput>,
};

export type SitePageContextPostsCliFrontmatter = {
   __typename?: 'SitePageContextPostsCLIFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCliFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCliFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCliFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCordova = {
   __typename?: 'SitePageContextPostsCordova',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCordovaFrontmatter>,
};

export type SitePageContextPostsCordovaFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCordovaFrontmatterFilterInput>,
};

export type SitePageContextPostsCordovaFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCordovaFilterInput>,
};

export type SitePageContextPostsCordovaFrontmatter = {
   __typename?: 'SitePageContextPostsCordovaFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCordovaFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCordovaFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCordovaFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCore = {
   __typename?: 'SitePageContextPostsCore',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCoreFrontmatter>,
};

export type SitePageContextPostsCoreFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCoreFrontmatterFilterInput>,
};

export type SitePageContextPostsCoreFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCoreFilterInput>,
};

export type SitePageContextPostsCoreFrontmatter = {
   __typename?: 'SitePageContextPostsCoreFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCoreFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCoreFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCoreFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCourse = {
   __typename?: 'SitePageContextPostsCourse',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCourseFrontmatter>,
};

export type SitePageContextPostsCourseFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCourseFrontmatterFilterInput>,
};

export type SitePageContextPostsCourseFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCourseFilterInput>,
};

export type SitePageContextPostsCourseFrontmatter = {
   __typename?: 'SitePageContextPostsCourseFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCourseFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCourseFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCourseFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsCourses = {
   __typename?: 'SitePageContextPostsCourses',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsCoursesFrontmatter>,
};

export type SitePageContextPostsCoursesFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsCoursesFrontmatterFilterInput>,
};

export type SitePageContextPostsCoursesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsCoursesFilterInput>,
};

export type SitePageContextPostsCoursesFrontmatter = {
   __typename?: 'SitePageContextPostsCoursesFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsCoursesFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsCoursesFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsCoursesFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsEnterprise = {
   __typename?: 'SitePageContextPostsEnterprise',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsEnterpriseFrontmatter>,
};

export type SitePageContextPostsEnterpriseFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsEnterpriseFrontmatterFilterInput>,
};

export type SitePageContextPostsEnterpriseFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsEnterpriseFilterInput>,
};

export type SitePageContextPostsEnterpriseFrontmatter = {
   __typename?: 'SitePageContextPostsEnterpriseFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsEnterpriseFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsEnterpriseFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsEnterpriseFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsFab = {
   __typename?: 'SitePageContextPostsFAB',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsFabFrontmatter>,
};

export type SitePageContextPostsFabFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsFabFrontmatterFilterInput>,
};

export type SitePageContextPostsFabFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsFabFilterInput>,
};

export type SitePageContextPostsFabFrontmatter = {
   __typename?: 'SitePageContextPostsFABFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsFabFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsFabFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsFabFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsFacebook = {
   __typename?: 'SitePageContextPostsFacebook',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsFacebookFrontmatter>,
};

export type SitePageContextPostsFacebookFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsFacebookFrontmatterFilterInput>,
};

export type SitePageContextPostsFacebookFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsFacebookFilterInput>,
};

export type SitePageContextPostsFacebookFrontmatter = {
   __typename?: 'SitePageContextPostsFacebookFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsFacebookFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsFacebookFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsFacebookFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsFastlane = {
   __typename?: 'SitePageContextPostsFastlane',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsFastlaneFrontmatter>,
};

export type SitePageContextPostsFastlaneFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsFastlaneFrontmatterFilterInput>,
};

export type SitePageContextPostsFastlaneFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsFastlaneFilterInput>,
};

export type SitePageContextPostsFastlaneFrontmatter = {
   __typename?: 'SitePageContextPostsFastlaneFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsFastlaneFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsFastlaneFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsFastlaneFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsFilterInput = {
  Azure?: Maybe<SitePageContextPostsAzureFilterListInput>,
  Mobile?: Maybe<SitePageContextPostsMobileFilterListInput>,
  NativeScript?: Maybe<SitePageContextPostsNativeScriptFilterListInput>,
  iOS?: Maybe<SitePageContextPostsIosFilterListInput>,
  JavaScript?: Maybe<SitePageContextPostsJavaScriptFilterListInput>,
  Simulator?: Maybe<SitePageContextPostsSimulatorFilterListInput>,
  TypeScript?: Maybe<SitePageContextPostsTypeScriptFilterListInput>,
  Visual_Studio_Code?: Maybe<SitePageContextPostsVisual_Studio_CodeFilterListInput>,
  Organization?: Maybe<SitePageContextPostsOrganizationFilterListInput>,
  Tips_and_Tricks?: Maybe<SitePageContextPostsTips_And_TricksFilterListInput>,
  Pluralsight?: Maybe<SitePageContextPostsPluralsightFilterListInput>,
  tutorial?: Maybe<SitePageContextPostsTutorialFilterListInput>,
  video?: Maybe<SitePageContextPostsVideoFilterListInput>,
  Office365?: Maybe<SitePageContextPostsOffice365FilterListInput>,
  CLI?: Maybe<SitePageContextPostsCliFilterListInput>,
  GitHub?: Maybe<SitePageContextPostsGitHubFilterListInput>,
  OAuth?: Maybe<SitePageContextPostsOAuthFilterListInput>,
  Plugins?: Maybe<SitePageContextPostsPluginsFilterListInput>,
  Facebook?: Maybe<SitePageContextPostsFacebookFilterListInput>,
  Android?: Maybe<SitePageContextPostsAndroidFilterListInput>,
  Angular?: Maybe<SitePageContextPostsAngularFilterListInput>,
  Animation?: Maybe<SitePageContextPostsAnimationFilterListInput>,
  Training?: Maybe<SitePageContextPostsTrainingFilterListInput>,
  NativeScripting?: Maybe<SitePageContextPostsNativeScriptingFilterListInput>,
  Tutorial?: Maybe<SitePageContextPostsTutorialFilterListInput>,
  Video?: Maybe<SitePageContextPostsVideoFilterListInput>,
  Courses?: Maybe<SitePageContextPostsCoursesFilterListInput>,
  Styling?: Maybe<SitePageContextPostsStylingFilterListInput>,
  Core?: Maybe<SitePageContextPostsCoreFilterListInput>,
  Authentication?: Maybe<SitePageContextPostsAuthenticationFilterListInput>,
  Authorization?: Maybe<SitePageContextPostsAuthorizationFilterListInput>,
  Enterprise?: Maybe<SitePageContextPostsEnterpriseFilterListInput>,
  UI?: Maybe<SitePageContextPostsUiFilterListInput>,
  Cordova?: Maybe<SitePageContextPostsCordovaFilterListInput>,
  Tip?: Maybe<SitePageContextPostsTipFilterListInput>,
  Vue?: Maybe<SitePageContextPostsVueFilterListInput>,
  I_Script_Native?: Maybe<SitePageContextPostsI_Script_NativeFilterListInput>,
  Course?: Maybe<SitePageContextPostsCourseFilterListInput>,
  FAB?: Maybe<SitePageContextPostsFabFilterListInput>,
  Floating_Action_Button?: Maybe<SitePageContextPostsFloating_Action_ButtonFilterListInput>,
  Security?: Maybe<SitePageContextPostsSecurityFilterListInput>,
  Architecture?: Maybe<SitePageContextPostsArchitectureFilterListInput>,
  Maps?: Maybe<SitePageContextPostsMapsFilterListInput>,
  Testing?: Maybe<SitePageContextPostsTestingFilterListInput>,
  CI?: Maybe<SitePageContextPostsCiFilterListInput>,
  npx?: Maybe<SitePageContextPostsNpxFilterListInput>,
  Fastlane?: Maybe<SitePageContextPostsFastlaneFilterListInput>,
  GitHub_Actions?: Maybe<SitePageContextPostsGitHub_ActionsFilterListInput>,
  Azure_Pipeline?: Maybe<SitePageContextPostsAzure_PipelineFilterListInput>,
};

export type SitePageContextPostsFloating_Action_Button = {
   __typename?: 'SitePageContextPostsFloating_Action_Button',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsFloating_Action_ButtonFrontmatter>,
};

export type SitePageContextPostsFloating_Action_ButtonFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsFloating_Action_ButtonFrontmatterFilterInput>,
};

export type SitePageContextPostsFloating_Action_ButtonFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsFloating_Action_ButtonFilterInput>,
};

export type SitePageContextPostsFloating_Action_ButtonFrontmatter = {
   __typename?: 'SitePageContextPostsFloating_Action_ButtonFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsFloating_Action_ButtonFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsFloating_Action_ButtonFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsFloating_Action_ButtonFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsGitHub = {
   __typename?: 'SitePageContextPostsGitHub',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsGitHubFrontmatter>,
};

export type SitePageContextPostsGitHub_Actions = {
   __typename?: 'SitePageContextPostsGitHub_Actions',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsGitHub_ActionsFrontmatter>,
};

export type SitePageContextPostsGitHub_ActionsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsGitHub_ActionsFrontmatterFilterInput>,
};

export type SitePageContextPostsGitHub_ActionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsGitHub_ActionsFilterInput>,
};

export type SitePageContextPostsGitHub_ActionsFrontmatter = {
   __typename?: 'SitePageContextPostsGitHub_ActionsFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsGitHub_ActionsFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsGitHub_ActionsFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsGitHub_ActionsFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsGitHubFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsGitHubFrontmatterFilterInput>,
};

export type SitePageContextPostsGitHubFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsGitHubFilterInput>,
};

export type SitePageContextPostsGitHubFrontmatter = {
   __typename?: 'SitePageContextPostsGitHubFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsGitHubFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsGitHubFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsGitHubFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsI_Script_Native = {
   __typename?: 'SitePageContextPostsI_Script_Native',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsI_Script_NativeFrontmatter>,
};

export type SitePageContextPostsI_Script_NativeFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsI_Script_NativeFrontmatterFilterInput>,
};

export type SitePageContextPostsI_Script_NativeFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsI_Script_NativeFilterInput>,
};

export type SitePageContextPostsI_Script_NativeFrontmatter = {
   __typename?: 'SitePageContextPostsI_Script_NativeFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsI_Script_NativeFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsI_Script_NativeFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsI_Script_NativeFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsIos = {
   __typename?: 'SitePageContextPostsIOS',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsIosFrontmatter>,
};

export type SitePageContextPostsIosFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsIosFrontmatterFilterInput>,
};

export type SitePageContextPostsIosFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsIosFilterInput>,
};

export type SitePageContextPostsIosFrontmatter = {
   __typename?: 'SitePageContextPostsIOSFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsIosFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsIosFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsIosFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsJavaScript = {
   __typename?: 'SitePageContextPostsJavaScript',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsJavaScriptFrontmatter>,
};

export type SitePageContextPostsJavaScriptFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsJavaScriptFrontmatterFilterInput>,
};

export type SitePageContextPostsJavaScriptFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsJavaScriptFilterInput>,
};

export type SitePageContextPostsJavaScriptFrontmatter = {
   __typename?: 'SitePageContextPostsJavaScriptFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsJavaScriptFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsJavaScriptFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsJavaScriptFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsMaps = {
   __typename?: 'SitePageContextPostsMaps',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsMapsFrontmatter>,
};

export type SitePageContextPostsMapsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsMapsFrontmatterFilterInput>,
};

export type SitePageContextPostsMapsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsMapsFilterInput>,
};

export type SitePageContextPostsMapsFrontmatter = {
   __typename?: 'SitePageContextPostsMapsFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsMapsFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsMapsFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsMapsFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsMobile = {
   __typename?: 'SitePageContextPostsMobile',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsMobileFrontmatter>,
};

export type SitePageContextPostsMobileFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsMobileFrontmatterFilterInput>,
};

export type SitePageContextPostsMobileFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsMobileFilterInput>,
};

export type SitePageContextPostsMobileFrontmatter = {
   __typename?: 'SitePageContextPostsMobileFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsMobileFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsMobileFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsMobileFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsNativeScript = {
   __typename?: 'SitePageContextPostsNativeScript',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsNativeScriptFrontmatter>,
};

export type SitePageContextPostsNativeScriptFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsNativeScriptFrontmatterFilterInput>,
};

export type SitePageContextPostsNativeScriptFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsNativeScriptFilterInput>,
};

export type SitePageContextPostsNativeScriptFrontmatter = {
   __typename?: 'SitePageContextPostsNativeScriptFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsNativeScriptFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsNativeScriptFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsNativeScriptFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsNativeScripting = {
   __typename?: 'SitePageContextPostsNativeScripting',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsNativeScriptingFrontmatter>,
};

export type SitePageContextPostsNativeScriptingFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsNativeScriptingFrontmatterFilterInput>,
};

export type SitePageContextPostsNativeScriptingFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsNativeScriptingFilterInput>,
};

export type SitePageContextPostsNativeScriptingFrontmatter = {
   __typename?: 'SitePageContextPostsNativeScriptingFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsNativeScriptingFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsNativeScriptingFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsNativeScriptingFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsNpx = {
   __typename?: 'SitePageContextPostsNpx',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsNpxFrontmatter>,
};

export type SitePageContextPostsNpxFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsNpxFrontmatterFilterInput>,
};

export type SitePageContextPostsNpxFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsNpxFilterInput>,
};

export type SitePageContextPostsNpxFrontmatter = {
   __typename?: 'SitePageContextPostsNpxFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsNpxFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsNpxFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsNpxFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsOAuth = {
   __typename?: 'SitePageContextPostsOAuth',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsOAuthFrontmatter>,
};

export type SitePageContextPostsOAuthFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsOAuthFrontmatterFilterInput>,
};

export type SitePageContextPostsOAuthFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsOAuthFilterInput>,
};

export type SitePageContextPostsOAuthFrontmatter = {
   __typename?: 'SitePageContextPostsOAuthFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsOAuthFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsOAuthFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsOAuthFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsOffice365 = {
   __typename?: 'SitePageContextPostsOffice365',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsOffice365Frontmatter>,
};

export type SitePageContextPostsOffice365FilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsOffice365FrontmatterFilterInput>,
};

export type SitePageContextPostsOffice365FilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsOffice365FilterInput>,
};

export type SitePageContextPostsOffice365Frontmatter = {
   __typename?: 'SitePageContextPostsOffice365Frontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsOffice365FrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsOffice365FrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsOffice365FrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsOrganization = {
   __typename?: 'SitePageContextPostsOrganization',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsOrganizationFrontmatter>,
};

export type SitePageContextPostsOrganizationFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsOrganizationFrontmatterFilterInput>,
};

export type SitePageContextPostsOrganizationFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsOrganizationFilterInput>,
};

export type SitePageContextPostsOrganizationFrontmatter = {
   __typename?: 'SitePageContextPostsOrganizationFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsOrganizationFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsOrganizationFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsOrganizationFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsPlugins = {
   __typename?: 'SitePageContextPostsPlugins',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsPluginsFrontmatter>,
};

export type SitePageContextPostsPluginsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsPluginsFrontmatterFilterInput>,
};

export type SitePageContextPostsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsPluginsFilterInput>,
};

export type SitePageContextPostsPluginsFrontmatter = {
   __typename?: 'SitePageContextPostsPluginsFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsPluginsFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsPluginsFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsPluginsFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsPluralsight = {
   __typename?: 'SitePageContextPostsPluralsight',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsPluralsightFrontmatter>,
};

export type SitePageContextPostsPluralsightFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsPluralsightFrontmatterFilterInput>,
};

export type SitePageContextPostsPluralsightFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsPluralsightFilterInput>,
};

export type SitePageContextPostsPluralsightFrontmatter = {
   __typename?: 'SitePageContextPostsPluralsightFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsPluralsightFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsPluralsightFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsPluralsightFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsSecurity = {
   __typename?: 'SitePageContextPostsSecurity',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsSecurityFrontmatter>,
};

export type SitePageContextPostsSecurityFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsSecurityFrontmatterFilterInput>,
};

export type SitePageContextPostsSecurityFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsSecurityFilterInput>,
};

export type SitePageContextPostsSecurityFrontmatter = {
   __typename?: 'SitePageContextPostsSecurityFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsSecurityFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsSecurityFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsSecurityFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsSimulator = {
   __typename?: 'SitePageContextPostsSimulator',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsSimulatorFrontmatter>,
};

export type SitePageContextPostsSimulatorFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsSimulatorFrontmatterFilterInput>,
};

export type SitePageContextPostsSimulatorFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsSimulatorFilterInput>,
};

export type SitePageContextPostsSimulatorFrontmatter = {
   __typename?: 'SitePageContextPostsSimulatorFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsSimulatorFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsSimulatorFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsSimulatorFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsStyling = {
   __typename?: 'SitePageContextPostsStyling',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsStylingFrontmatter>,
};

export type SitePageContextPostsStylingFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsStylingFrontmatterFilterInput>,
};

export type SitePageContextPostsStylingFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsStylingFilterInput>,
};

export type SitePageContextPostsStylingFrontmatter = {
   __typename?: 'SitePageContextPostsStylingFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsStylingFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsStylingFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsStylingFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTesting = {
   __typename?: 'SitePageContextPostsTesting',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTestingFrontmatter>,
};

export type SitePageContextPostsTestingFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTestingFrontmatterFilterInput>,
};

export type SitePageContextPostsTestingFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTestingFilterInput>,
};

export type SitePageContextPostsTestingFrontmatter = {
   __typename?: 'SitePageContextPostsTestingFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTestingFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTestingFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTestingFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTip = {
   __typename?: 'SitePageContextPostsTip',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTipFrontmatter>,
};

export type SitePageContextPostsTipFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTipFrontmatterFilterInput>,
};

export type SitePageContextPostsTipFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTipFilterInput>,
};

export type SitePageContextPostsTipFrontmatter = {
   __typename?: 'SitePageContextPostsTipFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTipFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTipFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTipFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTips_And_Tricks = {
   __typename?: 'SitePageContextPostsTips_and_Tricks',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTips_And_TricksFrontmatter>,
};

export type SitePageContextPostsTips_And_TricksFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTips_And_TricksFrontmatterFilterInput>,
};

export type SitePageContextPostsTips_And_TricksFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTips_And_TricksFilterInput>,
};

export type SitePageContextPostsTips_And_TricksFrontmatter = {
   __typename?: 'SitePageContextPostsTips_and_TricksFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTips_And_TricksFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTips_And_TricksFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTips_And_TricksFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTraining = {
   __typename?: 'SitePageContextPostsTraining',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTrainingFrontmatter>,
};

export type SitePageContextPostsTrainingFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTrainingFrontmatterFilterInput>,
};

export type SitePageContextPostsTrainingFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTrainingFilterInput>,
};

export type SitePageContextPostsTrainingFrontmatter = {
   __typename?: 'SitePageContextPostsTrainingFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTrainingFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTrainingFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTrainingFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTutorial = {
   __typename?: 'SitePageContextPostsTutorial',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTutorialFrontmatter>,
};

export type SitePageContextPostsTutorialFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTutorialFrontmatterFilterInput>,
};

export type SitePageContextPostsTutorialFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTutorialFilterInput>,
};

export type SitePageContextPostsTutorialFrontmatter = {
   __typename?: 'SitePageContextPostsTutorialFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTutorialFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTutorialFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTutorialFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsTypeScript = {
   __typename?: 'SitePageContextPostsTypeScript',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsTypeScriptFrontmatter>,
};

export type SitePageContextPostsTypeScriptFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsTypeScriptFrontmatterFilterInput>,
};

export type SitePageContextPostsTypeScriptFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsTypeScriptFilterInput>,
};

export type SitePageContextPostsTypeScriptFrontmatter = {
   __typename?: 'SitePageContextPostsTypeScriptFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsTypeScriptFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsTypeScriptFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsTypeScriptFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsUi = {
   __typename?: 'SitePageContextPostsUI',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsUiFrontmatter>,
};

export type SitePageContextPostsUiFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsUiFrontmatterFilterInput>,
};

export type SitePageContextPostsUiFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsUiFilterInput>,
};

export type SitePageContextPostsUiFrontmatter = {
   __typename?: 'SitePageContextPostsUIFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsUiFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsUiFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsUiFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsVideo = {
   __typename?: 'SitePageContextPostsVideo',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsVideoFrontmatter>,
};

export type SitePageContextPostsVideoFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsVideoFrontmatterFilterInput>,
};

export type SitePageContextPostsVideoFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsVideoFilterInput>,
};

export type SitePageContextPostsVideoFrontmatter = {
   __typename?: 'SitePageContextPostsVideoFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsVideoFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsVideoFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsVideoFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsVisual_Studio_Code = {
   __typename?: 'SitePageContextPostsVisual_Studio_Code',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsVisual_Studio_CodeFrontmatter>,
};

export type SitePageContextPostsVisual_Studio_CodeFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsVisual_Studio_CodeFrontmatterFilterInput>,
};

export type SitePageContextPostsVisual_Studio_CodeFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsVisual_Studio_CodeFilterInput>,
};

export type SitePageContextPostsVisual_Studio_CodeFrontmatter = {
   __typename?: 'SitePageContextPostsVisual_Studio_CodeFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsVisual_Studio_CodeFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsVisual_Studio_CodeFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsVisual_Studio_CodeFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPostsVue = {
   __typename?: 'SitePageContextPostsVue',
  excerpt?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  timeToRead?: Maybe<Scalars['Int']>,
  frontmatter?: Maybe<SitePageContextPostsVueFrontmatter>,
};

export type SitePageContextPostsVueFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextPostsVueFrontmatterFilterInput>,
};

export type SitePageContextPostsVueFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsVueFilterInput>,
};

export type SitePageContextPostsVueFrontmatter = {
   __typename?: 'SitePageContextPostsVueFrontmatter',
  createdDate?: Maybe<Scalars['Date']>,
  updatedDate?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  path?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type SitePageContextPostsVueFrontmatterCreatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SitePageContextPostsVueFrontmatterUpdatedDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePageContextPostsVueFrontmatterFilterInput = {
  createdDate?: Maybe<DateQueryOperatorInput>,
  updatedDate?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___courseUrl = 'context___courseUrl',
  context___trackId = 'context___trackId',
  context___limit = 'context___limit',
  context___skip = 'context___skip',
  context___totalPages = 'context___totalPages',
  context___currentPage = 'context___currentPage',
  context___slug = 'context___slug',
  context___prevPostPath = 'context___prevPostPath',
  context___nextPostPath = 'context___nextPostPath',
  context___posts___Azure = 'context___posts___Azure',
  context___posts___Azure___excerpt = 'context___posts___Azure___excerpt',
  context___posts___Azure___html = 'context___posts___Azure___html',
  context___posts___Azure___id = 'context___posts___Azure___id',
  context___posts___Azure___timeToRead = 'context___posts___Azure___timeToRead',
  context___posts___Mobile = 'context___posts___Mobile',
  context___posts___Mobile___excerpt = 'context___posts___Mobile___excerpt',
  context___posts___Mobile___html = 'context___posts___Mobile___html',
  context___posts___Mobile___id = 'context___posts___Mobile___id',
  context___posts___Mobile___timeToRead = 'context___posts___Mobile___timeToRead',
  context___posts___NativeScript = 'context___posts___NativeScript',
  context___posts___NativeScript___excerpt = 'context___posts___NativeScript___excerpt',
  context___posts___NativeScript___html = 'context___posts___NativeScript___html',
  context___posts___NativeScript___id = 'context___posts___NativeScript___id',
  context___posts___NativeScript___timeToRead = 'context___posts___NativeScript___timeToRead',
  context___posts___iOS = 'context___posts___iOS',
  context___posts___iOS___excerpt = 'context___posts___iOS___excerpt',
  context___posts___iOS___html = 'context___posts___iOS___html',
  context___posts___iOS___id = 'context___posts___iOS___id',
  context___posts___iOS___timeToRead = 'context___posts___iOS___timeToRead',
  context___posts___JavaScript = 'context___posts___JavaScript',
  context___posts___JavaScript___excerpt = 'context___posts___JavaScript___excerpt',
  context___posts___JavaScript___html = 'context___posts___JavaScript___html',
  context___posts___JavaScript___id = 'context___posts___JavaScript___id',
  context___posts___JavaScript___timeToRead = 'context___posts___JavaScript___timeToRead',
  context___posts___Simulator = 'context___posts___Simulator',
  context___posts___Simulator___excerpt = 'context___posts___Simulator___excerpt',
  context___posts___Simulator___html = 'context___posts___Simulator___html',
  context___posts___Simulator___id = 'context___posts___Simulator___id',
  context___posts___Simulator___timeToRead = 'context___posts___Simulator___timeToRead',
  context___posts___TypeScript = 'context___posts___TypeScript',
  context___posts___TypeScript___excerpt = 'context___posts___TypeScript___excerpt',
  context___posts___TypeScript___html = 'context___posts___TypeScript___html',
  context___posts___TypeScript___id = 'context___posts___TypeScript___id',
  context___posts___TypeScript___timeToRead = 'context___posts___TypeScript___timeToRead',
  context___posts___Visual_Studio_Code = 'context___posts___Visual_Studio_Code',
  context___posts___Visual_Studio_Code___excerpt = 'context___posts___Visual_Studio_Code___excerpt',
  context___posts___Visual_Studio_Code___html = 'context___posts___Visual_Studio_Code___html',
  context___posts___Visual_Studio_Code___id = 'context___posts___Visual_Studio_Code___id',
  context___posts___Visual_Studio_Code___timeToRead = 'context___posts___Visual_Studio_Code___timeToRead',
  context___posts___Organization = 'context___posts___Organization',
  context___posts___Organization___excerpt = 'context___posts___Organization___excerpt',
  context___posts___Organization___html = 'context___posts___Organization___html',
  context___posts___Organization___id = 'context___posts___Organization___id',
  context___posts___Organization___timeToRead = 'context___posts___Organization___timeToRead',
  context___posts___Tips_and_Tricks = 'context___posts___Tips_and_Tricks',
  context___posts___Tips_and_Tricks___excerpt = 'context___posts___Tips_and_Tricks___excerpt',
  context___posts___Tips_and_Tricks___html = 'context___posts___Tips_and_Tricks___html',
  context___posts___Tips_and_Tricks___id = 'context___posts___Tips_and_Tricks___id',
  context___posts___Tips_and_Tricks___timeToRead = 'context___posts___Tips_and_Tricks___timeToRead',
  context___posts___Pluralsight = 'context___posts___Pluralsight',
  context___posts___Pluralsight___excerpt = 'context___posts___Pluralsight___excerpt',
  context___posts___Pluralsight___html = 'context___posts___Pluralsight___html',
  context___posts___Pluralsight___id = 'context___posts___Pluralsight___id',
  context___posts___Pluralsight___timeToRead = 'context___posts___Pluralsight___timeToRead',
  context___posts___tutorial = 'context___posts___tutorial',
  context___posts___tutorial___excerpt = 'context___posts___tutorial___excerpt',
  context___posts___tutorial___html = 'context___posts___tutorial___html',
  context___posts___tutorial___id = 'context___posts___tutorial___id',
  context___posts___tutorial___timeToRead = 'context___posts___tutorial___timeToRead',
  context___posts___video = 'context___posts___video',
  context___posts___video___excerpt = 'context___posts___video___excerpt',
  context___posts___video___html = 'context___posts___video___html',
  context___posts___video___id = 'context___posts___video___id',
  context___posts___video___timeToRead = 'context___posts___video___timeToRead',
  context___posts___Office365 = 'context___posts___Office365',
  context___posts___Office365___excerpt = 'context___posts___Office365___excerpt',
  context___posts___Office365___html = 'context___posts___Office365___html',
  context___posts___Office365___id = 'context___posts___Office365___id',
  context___posts___Office365___timeToRead = 'context___posts___Office365___timeToRead',
  context___posts___CLI = 'context___posts___CLI',
  context___posts___CLI___excerpt = 'context___posts___CLI___excerpt',
  context___posts___CLI___html = 'context___posts___CLI___html',
  context___posts___CLI___id = 'context___posts___CLI___id',
  context___posts___CLI___timeToRead = 'context___posts___CLI___timeToRead',
  context___posts___GitHub = 'context___posts___GitHub',
  context___posts___GitHub___excerpt = 'context___posts___GitHub___excerpt',
  context___posts___GitHub___html = 'context___posts___GitHub___html',
  context___posts___GitHub___id = 'context___posts___GitHub___id',
  context___posts___GitHub___timeToRead = 'context___posts___GitHub___timeToRead',
  context___posts___OAuth = 'context___posts___OAuth',
  context___posts___OAuth___excerpt = 'context___posts___OAuth___excerpt',
  context___posts___OAuth___html = 'context___posts___OAuth___html',
  context___posts___OAuth___id = 'context___posts___OAuth___id',
  context___posts___OAuth___timeToRead = 'context___posts___OAuth___timeToRead',
  context___posts___Plugins = 'context___posts___Plugins',
  context___posts___Plugins___excerpt = 'context___posts___Plugins___excerpt',
  context___posts___Plugins___html = 'context___posts___Plugins___html',
  context___posts___Plugins___id = 'context___posts___Plugins___id',
  context___posts___Plugins___timeToRead = 'context___posts___Plugins___timeToRead',
  context___posts___Facebook = 'context___posts___Facebook',
  context___posts___Facebook___excerpt = 'context___posts___Facebook___excerpt',
  context___posts___Facebook___html = 'context___posts___Facebook___html',
  context___posts___Facebook___id = 'context___posts___Facebook___id',
  context___posts___Facebook___timeToRead = 'context___posts___Facebook___timeToRead',
  context___posts___Android = 'context___posts___Android',
  context___posts___Android___excerpt = 'context___posts___Android___excerpt',
  context___posts___Android___html = 'context___posts___Android___html',
  context___posts___Android___id = 'context___posts___Android___id',
  context___posts___Android___timeToRead = 'context___posts___Android___timeToRead',
  context___posts___Angular = 'context___posts___Angular',
  context___posts___Angular___excerpt = 'context___posts___Angular___excerpt',
  context___posts___Angular___html = 'context___posts___Angular___html',
  context___posts___Angular___id = 'context___posts___Angular___id',
  context___posts___Angular___timeToRead = 'context___posts___Angular___timeToRead',
  context___posts___Animation = 'context___posts___Animation',
  context___posts___Animation___excerpt = 'context___posts___Animation___excerpt',
  context___posts___Animation___html = 'context___posts___Animation___html',
  context___posts___Animation___id = 'context___posts___Animation___id',
  context___posts___Animation___timeToRead = 'context___posts___Animation___timeToRead',
  context___posts___Training = 'context___posts___Training',
  context___posts___Training___excerpt = 'context___posts___Training___excerpt',
  context___posts___Training___html = 'context___posts___Training___html',
  context___posts___Training___id = 'context___posts___Training___id',
  context___posts___Training___timeToRead = 'context___posts___Training___timeToRead',
  context___posts___NativeScripting = 'context___posts___NativeScripting',
  context___posts___NativeScripting___excerpt = 'context___posts___NativeScripting___excerpt',
  context___posts___NativeScripting___html = 'context___posts___NativeScripting___html',
  context___posts___NativeScripting___id = 'context___posts___NativeScripting___id',
  context___posts___NativeScripting___timeToRead = 'context___posts___NativeScripting___timeToRead',
  context___posts___Tutorial = 'context___posts___Tutorial',
  context___posts___Tutorial___excerpt = 'context___posts___Tutorial___excerpt',
  context___posts___Tutorial___html = 'context___posts___Tutorial___html',
  context___posts___Tutorial___id = 'context___posts___Tutorial___id',
  context___posts___Tutorial___timeToRead = 'context___posts___Tutorial___timeToRead',
  context___posts___Video = 'context___posts___Video',
  context___posts___Video___excerpt = 'context___posts___Video___excerpt',
  context___posts___Video___html = 'context___posts___Video___html',
  context___posts___Video___id = 'context___posts___Video___id',
  context___posts___Video___timeToRead = 'context___posts___Video___timeToRead',
  context___posts___Courses = 'context___posts___Courses',
  context___posts___Courses___excerpt = 'context___posts___Courses___excerpt',
  context___posts___Courses___html = 'context___posts___Courses___html',
  context___posts___Courses___id = 'context___posts___Courses___id',
  context___posts___Courses___timeToRead = 'context___posts___Courses___timeToRead',
  context___posts___Styling = 'context___posts___Styling',
  context___posts___Styling___excerpt = 'context___posts___Styling___excerpt',
  context___posts___Styling___html = 'context___posts___Styling___html',
  context___posts___Styling___id = 'context___posts___Styling___id',
  context___posts___Styling___timeToRead = 'context___posts___Styling___timeToRead',
  context___posts___Core = 'context___posts___Core',
  context___posts___Core___excerpt = 'context___posts___Core___excerpt',
  context___posts___Core___html = 'context___posts___Core___html',
  context___posts___Core___id = 'context___posts___Core___id',
  context___posts___Core___timeToRead = 'context___posts___Core___timeToRead',
  context___posts___Authentication = 'context___posts___Authentication',
  context___posts___Authentication___excerpt = 'context___posts___Authentication___excerpt',
  context___posts___Authentication___html = 'context___posts___Authentication___html',
  context___posts___Authentication___id = 'context___posts___Authentication___id',
  context___posts___Authentication___timeToRead = 'context___posts___Authentication___timeToRead',
  context___posts___Authorization = 'context___posts___Authorization',
  context___posts___Authorization___excerpt = 'context___posts___Authorization___excerpt',
  context___posts___Authorization___html = 'context___posts___Authorization___html',
  context___posts___Authorization___id = 'context___posts___Authorization___id',
  context___posts___Authorization___timeToRead = 'context___posts___Authorization___timeToRead',
  context___posts___Enterprise = 'context___posts___Enterprise',
  context___posts___Enterprise___excerpt = 'context___posts___Enterprise___excerpt',
  context___posts___Enterprise___html = 'context___posts___Enterprise___html',
  context___posts___Enterprise___id = 'context___posts___Enterprise___id',
  context___posts___Enterprise___timeToRead = 'context___posts___Enterprise___timeToRead',
  context___posts___UI = 'context___posts___UI',
  context___posts___UI___excerpt = 'context___posts___UI___excerpt',
  context___posts___UI___html = 'context___posts___UI___html',
  context___posts___UI___id = 'context___posts___UI___id',
  context___posts___UI___timeToRead = 'context___posts___UI___timeToRead',
  context___posts___Cordova = 'context___posts___Cordova',
  context___posts___Cordova___excerpt = 'context___posts___Cordova___excerpt',
  context___posts___Cordova___html = 'context___posts___Cordova___html',
  context___posts___Cordova___id = 'context___posts___Cordova___id',
  context___posts___Cordova___timeToRead = 'context___posts___Cordova___timeToRead',
  context___posts___Tip = 'context___posts___Tip',
  context___posts___Tip___excerpt = 'context___posts___Tip___excerpt',
  context___posts___Tip___html = 'context___posts___Tip___html',
  context___posts___Tip___id = 'context___posts___Tip___id',
  context___posts___Tip___timeToRead = 'context___posts___Tip___timeToRead',
  context___posts___Vue = 'context___posts___Vue',
  context___posts___Vue___excerpt = 'context___posts___Vue___excerpt',
  context___posts___Vue___html = 'context___posts___Vue___html',
  context___posts___Vue___id = 'context___posts___Vue___id',
  context___posts___Vue___timeToRead = 'context___posts___Vue___timeToRead',
  context___posts___I_Script_Native = 'context___posts___I_Script_Native',
  context___posts___I_Script_Native___excerpt = 'context___posts___I_Script_Native___excerpt',
  context___posts___I_Script_Native___html = 'context___posts___I_Script_Native___html',
  context___posts___I_Script_Native___id = 'context___posts___I_Script_Native___id',
  context___posts___I_Script_Native___timeToRead = 'context___posts___I_Script_Native___timeToRead',
  context___posts___Course = 'context___posts___Course',
  context___posts___Course___excerpt = 'context___posts___Course___excerpt',
  context___posts___Course___html = 'context___posts___Course___html',
  context___posts___Course___id = 'context___posts___Course___id',
  context___posts___Course___timeToRead = 'context___posts___Course___timeToRead',
  context___posts___FAB = 'context___posts___FAB',
  context___posts___FAB___excerpt = 'context___posts___FAB___excerpt',
  context___posts___FAB___html = 'context___posts___FAB___html',
  context___posts___FAB___id = 'context___posts___FAB___id',
  context___posts___FAB___timeToRead = 'context___posts___FAB___timeToRead',
  context___posts___Floating_Action_Button = 'context___posts___Floating_Action_Button',
  context___posts___Floating_Action_Button___excerpt = 'context___posts___Floating_Action_Button___excerpt',
  context___posts___Floating_Action_Button___html = 'context___posts___Floating_Action_Button___html',
  context___posts___Floating_Action_Button___id = 'context___posts___Floating_Action_Button___id',
  context___posts___Floating_Action_Button___timeToRead = 'context___posts___Floating_Action_Button___timeToRead',
  context___posts___Security = 'context___posts___Security',
  context___posts___Security___excerpt = 'context___posts___Security___excerpt',
  context___posts___Security___html = 'context___posts___Security___html',
  context___posts___Security___id = 'context___posts___Security___id',
  context___posts___Security___timeToRead = 'context___posts___Security___timeToRead',
  context___posts___Architecture = 'context___posts___Architecture',
  context___posts___Architecture___excerpt = 'context___posts___Architecture___excerpt',
  context___posts___Architecture___html = 'context___posts___Architecture___html',
  context___posts___Architecture___id = 'context___posts___Architecture___id',
  context___posts___Architecture___timeToRead = 'context___posts___Architecture___timeToRead',
  context___posts___Maps = 'context___posts___Maps',
  context___posts___Maps___excerpt = 'context___posts___Maps___excerpt',
  context___posts___Maps___html = 'context___posts___Maps___html',
  context___posts___Maps___id = 'context___posts___Maps___id',
  context___posts___Maps___timeToRead = 'context___posts___Maps___timeToRead',
  context___posts___Testing = 'context___posts___Testing',
  context___posts___Testing___excerpt = 'context___posts___Testing___excerpt',
  context___posts___Testing___html = 'context___posts___Testing___html',
  context___posts___Testing___id = 'context___posts___Testing___id',
  context___posts___Testing___timeToRead = 'context___posts___Testing___timeToRead',
  context___posts___CI = 'context___posts___CI',
  context___posts___CI___excerpt = 'context___posts___CI___excerpt',
  context___posts___CI___html = 'context___posts___CI___html',
  context___posts___CI___id = 'context___posts___CI___id',
  context___posts___CI___timeToRead = 'context___posts___CI___timeToRead',
  context___posts___npx = 'context___posts___npx',
  context___posts___npx___excerpt = 'context___posts___npx___excerpt',
  context___posts___npx___html = 'context___posts___npx___html',
  context___posts___npx___id = 'context___posts___npx___id',
  context___posts___npx___timeToRead = 'context___posts___npx___timeToRead',
  context___posts___Fastlane = 'context___posts___Fastlane',
  context___posts___Fastlane___excerpt = 'context___posts___Fastlane___excerpt',
  context___posts___Fastlane___html = 'context___posts___Fastlane___html',
  context___posts___Fastlane___id = 'context___posts___Fastlane___id',
  context___posts___Fastlane___timeToRead = 'context___posts___Fastlane___timeToRead',
  context___posts___GitHub_Actions = 'context___posts___GitHub_Actions',
  context___posts___GitHub_Actions___excerpt = 'context___posts___GitHub_Actions___excerpt',
  context___posts___GitHub_Actions___html = 'context___posts___GitHub_Actions___html',
  context___posts___GitHub_Actions___id = 'context___posts___GitHub_Actions___id',
  context___posts___GitHub_Actions___timeToRead = 'context___posts___GitHub_Actions___timeToRead',
  context___posts___Azure_Pipeline = 'context___posts___Azure_Pipeline',
  context___posts___Azure_Pipeline___excerpt = 'context___posts___Azure_Pipeline___excerpt',
  context___posts___Azure_Pipeline___html = 'context___posts___Azure_Pipeline___html',
  context___posts___Azure_Pipeline___id = 'context___posts___Azure_Pipeline___id',
  context___posts___Azure_Pipeline___timeToRead = 'context___posts___Azure_Pipeline___timeToRead',
  context___post = 'context___post',
  context___post___excerpt = 'context___post___excerpt',
  context___post___html = 'context___post___html',
  context___post___id = 'context___post___id',
  context___post___timeToRead = 'context___post___timeToRead',
  context___post___frontmatter___createdDate = 'context___post___frontmatter___createdDate',
  context___post___frontmatter___updatedDate = 'context___post___frontmatter___updatedDate',
  context___post___frontmatter___tags = 'context___post___frontmatter___tags',
  context___post___frontmatter___path = 'context___post___frontmatter___path',
  context___post___frontmatter___title = 'context___post___frontmatter___title',
  context___tag = 'context___tag',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator___pluginOptions___plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator___pluginOptions___plugins___resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator___pluginOptions___plugins___id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator___pluginOptions___plugins___name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator___pluginOptions___plugins___version',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  pluginCreator___pluginOptions___pathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator___pluginOptions___maxWidth',
  pluginCreator___pluginOptions___wrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator___pluginOptions___showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator___pluginOptions___withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator___pluginOptions___tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator___pluginOptions___loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  pluginCreator___pluginOptions___ignoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___plugins___resolve = 'pluginOptions___plugins___resolve',
  pluginOptions___plugins___id = 'pluginOptions___plugins___id',
  pluginOptions___plugins___name = 'pluginOptions___plugins___name',
  pluginOptions___plugins___version = 'pluginOptions___plugins___version',
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  pluginOptions___plugins___pluginOptions___pathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  pluginOptions___plugins___pluginOptions___wrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  pluginOptions___plugins___pluginOptions___loading = 'pluginOptions___plugins___pluginOptions___loading',
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  pluginOptions___plugins___pluginOptions___ignoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  pluginOptions___plugins___browserAPIs = 'pluginOptions___plugins___browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions___markdownCaptions',
  pluginOptions___withWebp = 'pluginOptions___withWebp',
  pluginOptions___tracedSVG = 'pluginOptions___tracedSVG',
  pluginOptions___loading = 'pluginOptions___loading',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions___disableBgImage',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  output?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  backgroundColor?: Maybe<Scalars['String']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  output?: Maybe<StringQueryOperatorInput>,
  query?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  backgroundColor?: Maybe<Scalars['String']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  siteName?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type TestimonialsJson = Node & {
   __typename?: 'TestimonialsJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  img?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  quoteHtml?: Maybe<Scalars['String']>,
  titleHtml?: Maybe<Scalars['String']>,
};

export type TestimonialsJsonConnection = {
   __typename?: 'TestimonialsJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<TestimonialsJsonEdge>,
  nodes: Array<TestimonialsJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TestimonialsJsonGroupConnection>,
};


export type TestimonialsJsonConnectionDistinctArgs = {
  field: TestimonialsJsonFieldsEnum
};


export type TestimonialsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TestimonialsJsonFieldsEnum
};

export type TestimonialsJsonEdge = {
   __typename?: 'TestimonialsJsonEdge',
  next?: Maybe<TestimonialsJson>,
  node: TestimonialsJson,
  previous?: Maybe<TestimonialsJson>,
};

export enum TestimonialsJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  img = 'img',
  twitter = 'twitter',
  order = 'order',
  quoteHtml = 'quoteHtml',
  titleHtml = 'titleHtml'
}

export type TestimonialsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  img?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<IntQueryOperatorInput>,
  quoteHtml?: Maybe<StringQueryOperatorInput>,
  titleHtml?: Maybe<StringQueryOperatorInput>,
};

export type TestimonialsJsonFilterListInput = {
  elemMatch?: Maybe<TestimonialsJsonFilterInput>,
};

export type TestimonialsJsonGroupConnection = {
   __typename?: 'TestimonialsJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<TestimonialsJsonEdge>,
  nodes: Array<TestimonialsJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TestimonialsJsonSortInput = {
  fields?: Maybe<Array<Maybe<TestimonialsJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type TracksJson = Node & {
   __typename?: 'TracksJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  imageSrc?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  bundles?: Maybe<Array<Maybe<TracksJsonBundles>>>,
  levels?: Maybe<Array<Maybe<TracksJsonLevels>>>,
};

export type TracksJsonBundles = {
   __typename?: 'TracksJsonBundles',
  id?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type TracksJsonBundlesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type TracksJsonBundlesFilterListInput = {
  elemMatch?: Maybe<TracksJsonBundlesFilterInput>,
};

export type TracksJsonConnection = {
   __typename?: 'TracksJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<TracksJsonEdge>,
  nodes: Array<TracksJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TracksJsonGroupConnection>,
};


export type TracksJsonConnectionDistinctArgs = {
  field: TracksJsonFieldsEnum
};


export type TracksJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TracksJsonFieldsEnum
};

export type TracksJsonEdge = {
   __typename?: 'TracksJsonEdge',
  next?: Maybe<TracksJson>,
  node: TracksJson,
  previous?: Maybe<TracksJson>,
};

export enum TracksJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  imageSrc = 'imageSrc',
  description = 'description',
  bundles = 'bundles',
  bundles___id = 'bundles___id',
  bundles___order = 'bundles___order',
  bundles___description = 'bundles___description',
  bundles___title = 'bundles___title',
  levels = 'levels',
  levels___levelId = 'levels___levelId',
  levels___title = 'levels___title',
  levels___description = 'levels___description'
}

export type TracksJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  imageSrc?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  bundles?: Maybe<TracksJsonBundlesFilterListInput>,
  levels?: Maybe<TracksJsonLevelsFilterListInput>,
};

export type TracksJsonFilterListInput = {
  elemMatch?: Maybe<TracksJsonFilterInput>,
};

export type TracksJsonGroupConnection = {
   __typename?: 'TracksJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<TracksJsonEdge>,
  nodes: Array<TracksJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TracksJsonLevels = {
   __typename?: 'TracksJsonLevels',
  levelId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type TracksJsonLevelsFilterInput = {
  levelId?: Maybe<IntQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type TracksJsonLevelsFilterListInput = {
  elemMatch?: Maybe<TracksJsonLevelsFilterInput>,
};

export type TracksJsonSortInput = {
  fields?: Maybe<Array<Maybe<TracksJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};


