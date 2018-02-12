/* tslint:disable */

/* The &#x60;JSON&#x60; scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/* An object with an id, parent, and children */
export interface Node {
  id: string; /* The id of the node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
}

export interface RootQueryType {
  allCoursesJson?: CoursesJsonConnection | null; /* Connection to all CoursesJson nodes */
  allBundlesJson?: BundlesJsonConnection | null; /* Connection to all BundlesJson nodes */
  allSitePage?: SitePageConnection | null; /* Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null; /* Connection to all SitePlugin nodes */
  allDirectory?: DirectoryConnection | null; /* Connection to all Directory nodes */
  allFile?: FileConnection | null; /* Connection to all File nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null; /* Connection to all MarkdownRemark nodes */
  allAuthorsJson?: AuthorsJsonConnection | null; /* Connection to all AuthorsJson nodes */
  coursesJson?: CoursesJson | null; 
  bundlesJson?: BundlesJson | null; 
  sitePage?: SitePage | null; 
  sitePlugin?: SitePlugin | null; 
  site?: Site | null; 
  directory?: Directory | null; 
  file?: File | null; 
  markdownRemark?: MarkdownRemark | null; 
  authorsJson?: AuthorsJson | null; 
}
/* A connection to a list of items. */
export interface CoursesJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: CoursesJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: coursesJsonGroupConnectionConnection[] | null; 
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean; /* When paginating, are there more items? */
}
/* An edge in a connection. */
export interface CoursesJsonEdge {
  node?: CoursesJson | null; /* The item at the end of the edge */
  next?: CoursesJson | null; /* The next edge in the connection */
  previous?: CoursesJson | null; /* The previous edge in the connection */
}
/* Node of type CoursesJson */
export interface CoursesJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  title?: string | null; 
  subtitle?: string | null; 
  description?: string | null; 
  url?: string | null; 
  flavors?: string[] | null; 
  level?: number | null; 
  label?: string | null; 
  launchdate?: string | null; 
  authors?: string[] | null; 
  products?: products_3[] | null; 
  chapters?: chapters_2[] | null; 
  internal?: internal_10 | null; 
}

export interface products_3 {
  id?: string | null; 
  name?: string | null; 
  description?: string | null; 
  pricesale?: number | null; 
  pricereg?: number | null; 
  licensesMin?: number | null; 
  licensesMax?: number | null; 
}

export interface chapters_2 {
  id?: number | null; 
  name?: string | null; 
  lessons?: lessons_2[] | null; 
}

export interface lessons_2 {
  chapterId?: number | null; 
  id?: string | null; 
  name?: string | null; 
  btnText?: string | null; 
}

export interface internal_10 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface coursesJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: coursesJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface coursesJsonGroupConnectionEdge {
  node?: CoursesJson | null; /* The item at the end of the edge */
  next?: CoursesJson | null; /* The next edge in the connection */
  previous?: CoursesJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface BundlesJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: BundlesJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: bundlesJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface BundlesJsonEdge {
  node?: BundlesJson | null; /* The item at the end of the edge */
  next?: BundlesJson | null; /* The next edge in the connection */
  previous?: BundlesJson | null; /* The previous edge in the connection */
}
/* Node of type BundlesJson */
export interface BundlesJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  title?: string | null; 
  subtitle?: string | null; 
  description?: string | null; 
  url?: string | null; 
  promototal?: number | null; 
  promoremaining?: number | null; 
  bundleLevel?: number | null; 
  products?: products_4[] | null; 
  courseIds?: string[] | null; 
  internal?: internal_11 | null; 
}

export interface products_4 {
  id?: string | null; 
  name?: string | null; 
  description?: string | null; 
  pricesale?: number | null; 
  pricereg?: number | null; 
  licensesMin?: number | null; 
  licensesMax?: number | null; 
}

export interface internal_11 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface bundlesJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: bundlesJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface bundlesJsonGroupConnectionEdge {
  node?: BundlesJson | null; /* The item at the end of the edge */
  next?: BundlesJson | null; /* The next edge in the connection */
  previous?: BundlesJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePageEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePageGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  layout?: string | null; 
  jsonName?: string | null; 
  internalComponentName?: string | null; 
  path?: string | null; 
  component?: string | null; 
  componentChunkName?: string | null; 
  context?: context | null; 
  updatedAt?: number | null; 
  pluginCreator?: SitePlugin | null; 
  pluginCreatorId?: string | null; 
  componentPath?: string | null; 
  internal?: internal_12 | null; 
}

export interface context {
  courseUrl?: string | null; 
  posts?: posts | null; 
  post?: post[] | null; 
  tag?: string | null; 
  slug?: string | null; 
}

export interface posts {
  pandas?: pandas[] | null; 
  bananas?: bananas[] | null; 
}

export interface pandas {
  excerpt?: string | null; 
  html?: string | null; 
  id?: string | null; 
  timeToRead?: number | null; 
  frontmatter?: frontmatter_2 | null; 
}

export interface frontmatter_2 {
  date?: string | null; 
  tags?: string[] | null; 
  path?: string | null; 
  title?: string | null; 
}

export interface bananas {
  excerpt?: string | null; 
  html?: string | null; 
  id?: string | null; 
  timeToRead?: number | null; 
  frontmatter?: frontmatter_3 | null; 
}

export interface frontmatter_3 {
  date?: string | null; 
  tags?: string[] | null; 
  path?: string | null; 
  title?: string | null; 
}

export interface post {
  excerpt?: string | null; 
  html?: string | null; 
  id?: string | null; 
  timeToRead?: number | null; 
  frontmatter?: frontmatter_4 | null; 
}

export interface frontmatter_4 {
  date?: string | null; 
  tags?: string[] | null; 
  path?: string | null; 
  title?: string | null; 
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  resolve?: string | null; 
  name?: string | null; 
  version?: string | null; 
  pluginOptions?: pluginOptions_2 | null; 
  nodeAPIs?: string[] | null; 
  pluginFilepath?: string | null; 
  packageJson?: packageJson_2 | null; 
  internal?: internal_13 | null; 
}

export interface pluginOptions_2 {
  name?: string | null; 
  path?: string | null; 
}

export interface packageJson_2 {
  name?: string | null; 
  description?: string | null; 
  version?: string | null; 
  main?: string | null; 
  license?: string | null; 
  dependencies?: dependencies_2[] | null; 
  devDependencies?: devDependencies_2[] | null; 
  peerDependencies?: peerDependencies_2[] | null; 
  keywords?: string[] | null; 
}

export interface dependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

export interface devDependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

export interface peerDependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

export interface internal_13 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface internal_12 {
  type?: string | null; 
  contentDigest?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePageGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePluginEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePluginGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePluginGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: DirectoryEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: directoryGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* Node of type Directory */
export interface Directory extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_14 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: number | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  blksize?: number | null; 
  ino?: number | null; 
  blocks?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
}

export interface internal_14 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: directoryGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: FileEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: fileGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* Node of type File */
export interface File extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  childrenAuthorsJson?: AuthorsJson[] | null; /* The children of this node of type authorsJson */
  childrenBundlesJson?: BundlesJson[] | null; /* The children of this node of type bundlesJson */
  childMarkdownRemark?: MarkdownRemark | null; /* The child of this node of type markdownRemark */
  childrenCoursesJson?: CoursesJson[] | null; /* The children of this node of type coursesJson */
  internal?: internal_15 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: number | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  blksize?: number | null; 
  ino?: number | null; 
  blocks?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
  publicURL?: string | null; /* Copy file to static directory and return public url to it */
}
/* Node of type AuthorsJson */
export interface AuthorsJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  name?: string | null; 
  picture?: string | null; 
  bio?: string | null; 
  title?: string | null; 
  types?: string[] | null; 
  internal?: internal_16 | null; 
}

export interface internal_16 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_17 | null; 
  frontmatter?: frontmatter_5 | null; 
  excerpt?: string | null; 
  fileAbsolutePath?: string | null; 
  html?: string | null; 
  htmlAst?: JSON | null; 
  headings?: MarkdownHeading[] | null; 
  timeToRead?: number | null; 
  tableOfContents?: string | null; 
  wordCount?: wordCount | null; 
}

export interface internal_17 {
  content?: string | null; 
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface frontmatter_5 {
  title?: string | null; 
  path?: string | null; 
  date?: string | null; 
  tags?: string[] | null; 
  _PARENT?: string | null; 
  parent?: string | null; 
}

export interface MarkdownHeading {
  value?: string | null; 
  depth?: number | null; 
}

export interface wordCount {
  paragraphs?: number | null; 
  sentences?: number | null; 
  words?: number | null; 
}

export interface internal_15 {
  contentDigest?: string | null; 
  mediaType?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: fileGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: MarkdownRemarkEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: markdownRemarkGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: markdownRemarkGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface AuthorsJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: AuthorsJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: authorsJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface AuthorsJsonEdge {
  node?: AuthorsJson | null; /* The item at the end of the edge */
  next?: AuthorsJson | null; /* The next edge in the connection */
  previous?: AuthorsJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface authorsJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: authorsJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface authorsJsonGroupConnectionEdge {
  node?: AuthorsJson | null; /* The item at the end of the edge */
  next?: AuthorsJson | null; /* The next edge in the connection */
  previous?: AuthorsJson | null; /* The previous edge in the connection */
}
/* Node of type Site */
export interface Site extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  siteMetadata?: siteMetadata_2 | null; 
  port?: string | null; 
  host?: string | null; 
  pathPrefix?: string | null; 
  polyfill?: boolean | null; 
  buildTime?: string | null; 
  internal?: internal_18 | null; 
}

export interface siteMetadata_2 {
  siteName?: string | null; 
  foo?: string | null; 
}

export interface internal_18 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface coursesJsonConnectionSort {
  fields: CoursesJsonConnectionSortByFieldsEnum[]; 
  order?: coursesJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterCoursesJson {
  id?: coursesJsonConnectionIdQueryString_2 | null; 
  title?: coursesJsonConnectionTitleQueryString_2 | null; 
  subtitle?: coursesJsonConnectionSubtitleQueryString_2 | null; 
  description?: coursesJsonConnectionDescriptionQueryString_2 | null; 
  url?: coursesJsonConnectionUrlQueryString_2 | null; 
  flavors?: coursesJsonConnectionFlavorsQueryList_2 | null; 
  level?: coursesJsonConnectionLevelQueryInteger_2 | null; 
  label?: coursesJsonConnectionLabelQueryString_2 | null; 
  launchdate?: coursesJsonConnectionLaunchdateQueryString_2 | null; 
  authors?: coursesJsonConnectionAuthorsQueryList_2 | null; 
  products?: coursesJsonConnectionProductsQueryList_2 | null; 
  chapters?: coursesJsonConnectionChaptersQueryList_2 | null; 
  internal?: coursesJsonConnectionInternalInputObject_2 | null; 
}

export interface coursesJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionSubtitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionFlavorsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface coursesJsonConnectionLevelQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionLabelQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionLaunchdateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionAuthorsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface coursesJsonConnectionProductsQueryList_2 {
  in?: coursesJsonConnectionProductsInputObject_2[] | null; 
}

export interface coursesJsonConnectionProductsInputObject_2 {
  id?: coursesJsonConnectionProductsIdQueryString_2 | null; 
  name?: coursesJsonConnectionProductsNameQueryString_2 | null; 
  description?: coursesJsonConnectionProductsDescriptionQueryString_2 | null; 
  pricesale?: coursesJsonConnectionProductsPricesaleQueryInteger_2 | null; 
  pricereg?: coursesJsonConnectionProductsPriceregQueryInteger_2 | null; 
  licensesMin?: coursesJsonConnectionProductsLicensesMinQueryInteger_2 | null; 
  licensesMax?: coursesJsonConnectionProductsLicensesMaxQueryInteger_2 | null; 
}

export interface coursesJsonConnectionProductsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionProductsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionProductsDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionProductsPricesaleQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionProductsPriceregQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionProductsLicensesMinQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionProductsLicensesMaxQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionChaptersQueryList_2 {
  in?: coursesJsonConnectionChaptersInputObject_2[] | null; 
}

export interface coursesJsonConnectionChaptersInputObject_2 {
  id?: coursesJsonConnectionChaptersIdQueryInteger_2 | null; 
  name?: coursesJsonConnectionChaptersNameQueryString_2 | null; 
  lessons?: coursesJsonConnectionChaptersLessonsQueryList_2 | null; 
}

export interface coursesJsonConnectionChaptersIdQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionChaptersNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionChaptersLessonsQueryList_2 {
  in?: coursesJsonConnectionChaptersLessonsInputObject_2[] | null; 
}

export interface coursesJsonConnectionChaptersLessonsInputObject_2 {
  chapterId?: coursesJsonConnectionChaptersLessonsChapterIdQueryInteger_2 | null; 
  id?: coursesJsonConnectionChaptersLessonsIdQueryString_2 | null; 
  name?: coursesJsonConnectionChaptersLessonsNameQueryString_2 | null; 
  btnText?: coursesJsonConnectionChaptersLessonsBtnTextQueryString_2 | null; 
}

export interface coursesJsonConnectionChaptersLessonsChapterIdQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonConnectionChaptersLessonsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionChaptersLessonsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionChaptersLessonsBtnTextQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionInternalInputObject_2 {
  contentDigest?: coursesJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: coursesJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: coursesJsonConnectionInternalOwnerQueryString_2 | null; 
}

export interface coursesJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionSort {
  fields: BundlesJsonConnectionSortByFieldsEnum[]; 
  order?: bundlesJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterBundlesJson {
  id?: bundlesJsonConnectionIdQueryString_2 | null; 
  title?: bundlesJsonConnectionTitleQueryString_2 | null; 
  subtitle?: bundlesJsonConnectionSubtitleQueryString_2 | null; 
  description?: bundlesJsonConnectionDescriptionQueryString_2 | null; 
  url?: bundlesJsonConnectionUrlQueryString_2 | null; 
  promototal?: bundlesJsonConnectionPromototalQueryInteger_2 | null; 
  promoremaining?: bundlesJsonConnectionPromoremainingQueryInteger_2 | null; 
  bundleLevel?: bundlesJsonConnectionBundleLevelQueryInteger_2 | null; 
  products?: bundlesJsonConnectionProductsQueryList_2 | null; 
  courseIds?: bundlesJsonConnectionCourseIdsQueryList_2 | null; 
  internal?: bundlesJsonConnectionInternalInputObject_2 | null; 
}

export interface bundlesJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionSubtitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionPromototalQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionPromoremainingQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionBundleLevelQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionProductsQueryList_2 {
  in?: bundlesJsonConnectionProductsInputObject_2[] | null; 
}

export interface bundlesJsonConnectionProductsInputObject_2 {
  id?: bundlesJsonConnectionProductsIdQueryString_2 | null; 
  name?: bundlesJsonConnectionProductsNameQueryString_2 | null; 
  description?: bundlesJsonConnectionProductsDescriptionQueryString_2 | null; 
  pricesale?: bundlesJsonConnectionProductsPricesaleQueryInteger_2 | null; 
  pricereg?: bundlesJsonConnectionProductsPriceregQueryInteger_2 | null; 
  licensesMin?: bundlesJsonConnectionProductsLicensesMinQueryInteger_2 | null; 
  licensesMax?: bundlesJsonConnectionProductsLicensesMaxQueryInteger_2 | null; 
}

export interface bundlesJsonConnectionProductsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionProductsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionProductsDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionProductsPricesaleQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionProductsPriceregQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionProductsLicensesMinQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionProductsLicensesMaxQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonConnectionCourseIdsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface bundlesJsonConnectionInternalInputObject_2 {
  contentDigest?: bundlesJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: bundlesJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: bundlesJsonConnectionInternalOwnerQueryString_2 | null; 
}

export interface bundlesJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]; 
  order?: sitePageConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePage {
  layout?: sitePageConnectionLayoutQueryString | null; 
  jsonName?: sitePageConnectionJsonNameQueryString | null; 
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null; 
  path?: sitePageConnectionPathQueryString_2 | null; 
  component?: sitePageConnectionComponentQueryString | null; 
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null; 
  context?: sitePageConnectionContextInputObject | null; 
  updatedAt?: sitePageConnectionUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString | null; 
  componentPath?: sitePageConnectionComponentPathQueryString | null; 
  id?: sitePageConnectionIdQueryString_2 | null; 
  internal?: sitePageConnectionInternalInputObject_2 | null; 
}

export interface sitePageConnectionLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextInputObject {
  courseUrl?: sitePageConnectionContextCourseUrlQueryString | null; 
  posts?: sitePageConnectionContextPostsInputObject | null; 
  post?: sitePageConnectionContextPostQueryList | null; 
  tag?: sitePageConnectionContextTagQueryString | null; 
  slug?: sitePageConnectionContextSlugQueryString | null; 
}

export interface sitePageConnectionContextCourseUrlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsInputObject {
  pandas?: sitePageConnectionContextPostsPandasQueryList | null; 
  bananas?: sitePageConnectionContextPostsBananasQueryList | null; 
}

export interface sitePageConnectionContextPostsPandasQueryList {
  in?: sitePageConnectionContextPostsPandasInputObject[] | null; 
}

export interface sitePageConnectionContextPostsPandasInputObject {
  excerpt?: sitePageConnectionContextPostsPandasExcerptQueryString | null; 
  html?: sitePageConnectionContextPostsPandasHtmlQueryString | null; 
  id?: sitePageConnectionContextPostsPandasIdQueryString | null; 
  timeToRead?: sitePageConnectionContextPostsPandasTimeToReadQueryInteger | null; 
  frontmatter?: sitePageConnectionContextPostsPandasFrontmatterInputObject | null; 
}

export interface sitePageConnectionContextPostsPandasExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsPandasHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsPandasIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsPandasTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionContextPostsPandasFrontmatterInputObject {
  date?: sitePageConnectionContextPostsPandasFrontmatterDateQueryString | null; 
  tags?: sitePageConnectionContextPostsPandasFrontmatterTagsQueryList | null; 
  path?: sitePageConnectionContextPostsPandasFrontmatterPathQueryString | null; 
  title?: sitePageConnectionContextPostsPandasFrontmatterTitleQueryString | null; 
}

export interface sitePageConnectionContextPostsPandasFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsPandasFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageConnectionContextPostsPandasFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsPandasFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasQueryList {
  in?: sitePageConnectionContextPostsBananasInputObject[] | null; 
}

export interface sitePageConnectionContextPostsBananasInputObject {
  excerpt?: sitePageConnectionContextPostsBananasExcerptQueryString | null; 
  html?: sitePageConnectionContextPostsBananasHtmlQueryString | null; 
  id?: sitePageConnectionContextPostsBananasIdQueryString | null; 
  timeToRead?: sitePageConnectionContextPostsBananasTimeToReadQueryInteger | null; 
  frontmatter?: sitePageConnectionContextPostsBananasFrontmatterInputObject | null; 
}

export interface sitePageConnectionContextPostsBananasExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionContextPostsBananasFrontmatterInputObject {
  date?: sitePageConnectionContextPostsBananasFrontmatterDateQueryString | null; 
  tags?: sitePageConnectionContextPostsBananasFrontmatterTagsQueryList | null; 
  path?: sitePageConnectionContextPostsBananasFrontmatterPathQueryString | null; 
  title?: sitePageConnectionContextPostsBananasFrontmatterTitleQueryString | null; 
}

export interface sitePageConnectionContextPostsBananasFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageConnectionContextPostsBananasFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostsBananasFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostQueryList {
  in?: sitePageConnectionContextPostInputObject[] | null; 
}

export interface sitePageConnectionContextPostInputObject {
  excerpt?: sitePageConnectionContextPostExcerptQueryString | null; 
  html?: sitePageConnectionContextPostHtmlQueryString | null; 
  id?: sitePageConnectionContextPostIdQueryString | null; 
  timeToRead?: sitePageConnectionContextPostTimeToReadQueryInteger | null; 
  frontmatter?: sitePageConnectionContextPostFrontmatterInputObject | null; 
}

export interface sitePageConnectionContextPostExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionContextPostFrontmatterInputObject {
  date?: sitePageConnectionContextPostFrontmatterDateQueryString | null; 
  tags?: sitePageConnectionContextPostFrontmatterTagsQueryList | null; 
  path?: sitePageConnectionContextPostFrontmatterPathQueryString | null; 
  title?: sitePageConnectionContextPostFrontmatterTitleQueryString | null; 
}

export interface sitePageConnectionContextPostFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageConnectionContextPostFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextPostFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextTagQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null; 
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]; 
  order?: sitePluginConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null; 
  id?: sitePluginConnectionIdQueryString_2 | null; 
  name?: sitePluginConnectionNameQueryString_2 | null; 
  version?: sitePluginConnectionVersionQueryString_2 | null; 
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null; 
  internal?: sitePluginConnectionInternalInputObject_2 | null; 
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null; 
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null; 
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null; 
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null; 
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null; 
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null; 
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null; 
  type?: sitePluginConnectionInternalTypeQueryString_2 | null; 
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[]; 
  order?: directoryConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null; 
  internal?: directoryConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: directoryConnectionRelativePathQueryString_2 | null; 
  extension?: directoryConnectionExtensionQueryString_2 | null; 
  size?: directoryConnectionSizeQueryInteger_2 | null; 
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null; 
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null; 
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null; 
  root?: directoryConnectionRootQueryString_2 | null; 
  dir?: directoryConnectionDirQueryString_2 | null; 
  base?: directoryConnectionBaseQueryString_2 | null; 
  ext?: directoryConnectionExtQueryString_2 | null; 
  name?: directoryConnectionNameQueryString_2 | null; 
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: directoryConnectionDevQueryInteger_2 | null; 
  mode?: directoryConnectionModeQueryInteger_2 | null; 
  nlink?: directoryConnectionNlinkQueryInteger_2 | null; 
  uid?: directoryConnectionUidQueryInteger_2 | null; 
  gid?: directoryConnectionGidQueryInteger_2 | null; 
  rdev?: directoryConnectionRdevQueryInteger_2 | null; 
  blksize?: directoryConnectionBlksizeQueryInteger_2 | null; 
  ino?: directoryConnectionInoQueryInteger_2 | null; 
  blocks?: directoryConnectionBlocksQueryInteger_2 | null; 
  atime?: directoryConnectionAtimeQueryString_2 | null; 
  mtime?: directoryConnectionMtimeQueryString_2 | null; 
  ctime?: directoryConnectionCtimeQueryString_2 | null; 
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null; 
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null; 
  type?: directoryConnectionInternalTypeQueryString_2 | null; 
  owner?: directoryConnectionInternalOwnerQueryString_2 | null; 
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]; 
  order?: fileConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null; 
  internal?: fileConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: fileConnectionRelativePathQueryString_2 | null; 
  extension?: fileConnectionExtensionQueryString_2 | null; 
  size?: fileConnectionSizeQueryInteger_2 | null; 
  prettySize?: fileConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: fileConnectionAccessTimeQueryString_2 | null; 
  changeTime?: fileConnectionChangeTimeQueryString_2 | null; 
  birthTime?: fileConnectionBirthTimeQueryString_2 | null; 
  root?: fileConnectionRootQueryString_2 | null; 
  dir?: fileConnectionDirQueryString_2 | null; 
  base?: fileConnectionBaseQueryString_2 | null; 
  ext?: fileConnectionExtQueryString_2 | null; 
  name?: fileConnectionNameQueryString_2 | null; 
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: fileConnectionDevQueryInteger_2 | null; 
  mode?: fileConnectionModeQueryInteger_2 | null; 
  nlink?: fileConnectionNlinkQueryInteger_2 | null; 
  uid?: fileConnectionUidQueryInteger_2 | null; 
  gid?: fileConnectionGidQueryInteger_2 | null; 
  rdev?: fileConnectionRdevQueryInteger_2 | null; 
  blksize?: fileConnectionBlksizeQueryInteger_2 | null; 
  ino?: fileConnectionInoQueryInteger_2 | null; 
  blocks?: fileConnectionBlocksQueryInteger_2 | null; 
  atime?: fileConnectionAtimeQueryString_2 | null; 
  mtime?: fileConnectionMtimeQueryString_2 | null; 
  ctime?: fileConnectionCtimeQueryString_2 | null; 
  birthtime?: fileConnectionBirthtimeQueryString_2 | null; 
  publicURL?: publicUrlQueryString_4 | null; 
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null; 
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null; 
  type?: fileConnectionInternalTypeQueryString_2 | null; 
  owner?: fileConnectionInternalOwnerQueryString_2 | null; 
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface publicUrlQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[]; 
  order?: markdownRemarkConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null; 
  internal?: markdownRemarkConnectionInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null; 
  excerpt?: excerptQueryString_4 | null; 
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null; 
  html?: htmlQueryString_4 | null; 
  headings?: headingsQueryList_4 | null; 
  timeToRead?: timeToReadQueryInt_4 | null; 
  tableOfContents?: tableOfContentsQueryString_4 | null; 
  wordCount?: wordCountTypeName_4 | null; 
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null; 
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null; 
  path?: markdownRemarkConnectionFrontmatterPathQueryString_2 | null; 
  date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null; 
  tags?: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null; 
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null; 
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface excerptQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface htmlQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null; 
  depth?: headingsListElemDepthQueryInt_4 | null; 
  in?: markdownHeadingInputObject_4[] | null; 
}

export interface headingsListElemValueQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsListElemDepthQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface markdownHeadingInputObject_4 {
  value?: string | null; 
  depth?: number | null; 
}

export interface timeToReadQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface tableOfContentsQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null; 
  sentences?: wordCountSentencesQueryInt_4 | null; 
  words?: wordCountWordsQueryInt_4 | null; 
}

export interface wordCountParagraphsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountSentencesQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountWordsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface authorsJsonConnectionSort {
  fields: AuthorsJsonConnectionSortByFieldsEnum[]; 
  order?: authorsJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterAuthorsJson {
  id?: authorsJsonConnectionIdQueryString_2 | null; 
  name?: authorsJsonConnectionNameQueryString_2 | null; 
  picture?: authorsJsonConnectionPictureQueryString_2 | null; 
  bio?: authorsJsonConnectionBioQueryString_2 | null; 
  title?: authorsJsonConnectionTitleQueryString_2 | null; 
  types?: authorsJsonConnectionTypesQueryList_2 | null; 
  internal?: authorsJsonConnectionInternalInputObject_2 | null; 
}

export interface authorsJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionPictureQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionBioQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionTypesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface authorsJsonConnectionInternalInputObject_2 {
  contentDigest?: authorsJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: authorsJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: authorsJsonConnectionInternalOwnerQueryString_2 | null; 
}

export interface authorsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonSubtitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonFlavorsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface coursesJsonLevelQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonLabelQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonLaunchdateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonAuthorsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface coursesJsonProductsQueryList_2 {
  in?: coursesJsonProductsInputObject_2[] | null; 
}

export interface coursesJsonProductsInputObject_2 {
  id?: coursesJsonProductsIdQueryString_2 | null; 
  name?: coursesJsonProductsNameQueryString_2 | null; 
  description?: coursesJsonProductsDescriptionQueryString_2 | null; 
  pricesale?: coursesJsonProductsPricesaleQueryInteger_2 | null; 
  pricereg?: coursesJsonProductsPriceregQueryInteger_2 | null; 
  licensesMin?: coursesJsonProductsLicensesMinQueryInteger_2 | null; 
  licensesMax?: coursesJsonProductsLicensesMaxQueryInteger_2 | null; 
}

export interface coursesJsonProductsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonProductsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonProductsDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonProductsPricesaleQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonProductsPriceregQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonProductsLicensesMinQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonProductsLicensesMaxQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonChaptersQueryList_2 {
  in?: coursesJsonChaptersInputObject_2[] | null; 
}

export interface coursesJsonChaptersInputObject_2 {
  id?: coursesJsonChaptersIdQueryInteger_2 | null; 
  name?: coursesJsonChaptersNameQueryString_2 | null; 
  lessons?: coursesJsonChaptersLessonsQueryList_2 | null; 
}

export interface coursesJsonChaptersIdQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonChaptersNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonChaptersLessonsQueryList_2 {
  in?: coursesJsonChaptersLessonsInputObject_2[] | null; 
}

export interface coursesJsonChaptersLessonsInputObject_2 {
  chapterId?: coursesJsonChaptersLessonsChapterIdQueryInteger_2 | null; 
  id?: coursesJsonChaptersLessonsIdQueryString_2 | null; 
  name?: coursesJsonChaptersLessonsNameQueryString_2 | null; 
  btnText?: coursesJsonChaptersLessonsBtnTextQueryString_2 | null; 
}

export interface coursesJsonChaptersLessonsChapterIdQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface coursesJsonChaptersLessonsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonChaptersLessonsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonChaptersLessonsBtnTextQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonInternalInputObject_2 {
  contentDigest?: coursesJsonInternalContentDigestQueryString_2 | null; 
  type?: coursesJsonInternalTypeQueryString_2 | null; 
  owner?: coursesJsonInternalOwnerQueryString_2 | null; 
}

export interface coursesJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface coursesJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonSubtitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonPromototalQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonPromoremainingQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonBundleLevelQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonProductsQueryList_2 {
  in?: bundlesJsonProductsInputObject_2[] | null; 
}

export interface bundlesJsonProductsInputObject_2 {
  id?: bundlesJsonProductsIdQueryString_2 | null; 
  name?: bundlesJsonProductsNameQueryString_2 | null; 
  description?: bundlesJsonProductsDescriptionQueryString_2 | null; 
  pricesale?: bundlesJsonProductsPricesaleQueryInteger_2 | null; 
  pricereg?: bundlesJsonProductsPriceregQueryInteger_2 | null; 
  licensesMin?: bundlesJsonProductsLicensesMinQueryInteger_2 | null; 
  licensesMax?: bundlesJsonProductsLicensesMaxQueryInteger_2 | null; 
}

export interface bundlesJsonProductsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonProductsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonProductsDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonProductsPricesaleQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonProductsPriceregQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonProductsLicensesMinQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonProductsLicensesMaxQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface bundlesJsonCourseIdsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface bundlesJsonInternalInputObject_2 {
  contentDigest?: bundlesJsonInternalContentDigestQueryString_2 | null; 
  type?: bundlesJsonInternalTypeQueryString_2 | null; 
  owner?: bundlesJsonInternalOwnerQueryString_2 | null; 
}

export interface bundlesJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface bundlesJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePagePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextInputObject {
  courseUrl?: sitePageContextCourseUrlQueryString | null; 
  posts?: sitePageContextPostsInputObject | null; 
  post?: sitePageContextPostQueryList | null; 
  tag?: sitePageContextTagQueryString | null; 
  slug?: sitePageContextSlugQueryString | null; 
}

export interface sitePageContextCourseUrlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsInputObject {
  pandas?: sitePageContextPostsPandasQueryList | null; 
  bananas?: sitePageContextPostsBananasQueryList | null; 
}

export interface sitePageContextPostsPandasQueryList {
  in?: sitePageContextPostsPandasInputObject[] | null; 
}

export interface sitePageContextPostsPandasInputObject {
  excerpt?: sitePageContextPostsPandasExcerptQueryString | null; 
  html?: sitePageContextPostsPandasHtmlQueryString | null; 
  id?: sitePageContextPostsPandasIdQueryString | null; 
  timeToRead?: sitePageContextPostsPandasTimeToReadQueryInteger | null; 
  frontmatter?: sitePageContextPostsPandasFrontmatterInputObject | null; 
}

export interface sitePageContextPostsPandasExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsPandasHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsPandasIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsPandasTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageContextPostsPandasFrontmatterInputObject {
  date?: sitePageContextPostsPandasFrontmatterDateQueryString | null; 
  tags?: sitePageContextPostsPandasFrontmatterTagsQueryList | null; 
  path?: sitePageContextPostsPandasFrontmatterPathQueryString | null; 
  title?: sitePageContextPostsPandasFrontmatterTitleQueryString | null; 
}

export interface sitePageContextPostsPandasFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsPandasFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageContextPostsPandasFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsPandasFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasQueryList {
  in?: sitePageContextPostsBananasInputObject[] | null; 
}

export interface sitePageContextPostsBananasInputObject {
  excerpt?: sitePageContextPostsBananasExcerptQueryString | null; 
  html?: sitePageContextPostsBananasHtmlQueryString | null; 
  id?: sitePageContextPostsBananasIdQueryString | null; 
  timeToRead?: sitePageContextPostsBananasTimeToReadQueryInteger | null; 
  frontmatter?: sitePageContextPostsBananasFrontmatterInputObject | null; 
}

export interface sitePageContextPostsBananasExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageContextPostsBananasFrontmatterInputObject {
  date?: sitePageContextPostsBananasFrontmatterDateQueryString | null; 
  tags?: sitePageContextPostsBananasFrontmatterTagsQueryList | null; 
  path?: sitePageContextPostsBananasFrontmatterPathQueryString | null; 
  title?: sitePageContextPostsBananasFrontmatterTitleQueryString | null; 
}

export interface sitePageContextPostsBananasFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageContextPostsBananasFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostsBananasFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostQueryList {
  in?: sitePageContextPostInputObject[] | null; 
}

export interface sitePageContextPostInputObject {
  excerpt?: sitePageContextPostExcerptQueryString | null; 
  html?: sitePageContextPostHtmlQueryString | null; 
  id?: sitePageContextPostIdQueryString | null; 
  timeToRead?: sitePageContextPostTimeToReadQueryInteger | null; 
  frontmatter?: sitePageContextPostFrontmatterInputObject | null; 
}

export interface sitePageContextPostExcerptQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostHtmlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostTimeToReadQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageContextPostFrontmatterInputObject {
  date?: sitePageContextPostFrontmatterDateQueryString | null; 
  tags?: sitePageContextPostFrontmatterTagsQueryList | null; 
  path?: sitePageContextPostFrontmatterPathQueryString | null; 
  title?: sitePageContextPostFrontmatterTitleQueryString | null; 
}

export interface sitePageContextPostFrontmatterDateQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostFrontmatterTagsQueryList {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePageContextPostFrontmatterPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextPostFrontmatterTitleQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextTagQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null; 
  owner?: sitePageInternalOwnerQueryString_2 | null; 
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsInputObject_2 {
  name?: sitePluginPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginPluginOptionsPathQueryString_2 | null; 
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null; 
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginPackageJsonMainQueryString_2 | null; 
  license?: sitePluginPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null; 
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null; 
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null; 
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginPackageJsonPeerDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null; 
  type?: sitePluginInternalTypeQueryString_2 | null; 
  owner?: sitePluginInternalOwnerQueryString_2 | null; 
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteSiteMetadataInputObject_2 {
  siteName?: siteSiteMetadataSiteNameQueryString_2 | null; 
  foo?: siteSiteMetadataFooQueryString_2 | null; 
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteSiteMetadataFooQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePortQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteHostQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null; 
  type?: siteInternalTypeQueryString_2 | null; 
  owner?: siteInternalOwnerQueryString_2 | null; 
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null; 
  type?: directoryInternalTypeQueryString_2 | null; 
  owner?: directoryInternalOwnerQueryString_2 | null; 
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null; 
  mediaType?: fileInternalMediaTypeQueryString_2 | null; 
  type?: fileInternalTypeQueryString_2 | null; 
  owner?: fileInternalOwnerQueryString_2 | null; 
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface publicUrlQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkInternalOwnerQueryString_2 | null; 
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null; 
  path?: markdownRemarkFrontmatterPathQueryString_2 | null; 
  date?: markdownRemarkFrontmatterDateQueryString_2 | null; 
  tags?: markdownRemarkFrontmatterTagsQueryList_2 | null; 
  _PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkFrontmatterParentQueryString_4 | null; 
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface excerptQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface htmlQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null; 
  depth?: headingsListElemDepthQueryInt_3 | null; 
  in?: markdownHeadingInputObject_3[] | null; 
}

export interface headingsListElemValueQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsListElemDepthQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface markdownHeadingInputObject_3 {
  value?: string | null; 
  depth?: number | null; 
}

export interface timeToReadQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface tableOfContentsQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null; 
  sentences?: wordCountSentencesQueryInt_3 | null; 
  words?: wordCountWordsQueryInt_3 | null; 
}

export interface wordCountParagraphsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountSentencesQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountWordsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface authorsJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonPictureQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonBioQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonTypesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface authorsJsonInternalInputObject_2 {
  contentDigest?: authorsJsonInternalContentDigestQueryString_2 | null; 
  type?: authorsJsonInternalTypeQueryString_2 | null; 
  owner?: authorsJsonInternalOwnerQueryString_2 | null; 
}

export interface authorsJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorsJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}
export interface AllCoursesJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: coursesJsonConnectionSort | null; 
  filter?: filterCoursesJson | null; 
}
export interface AllBundlesJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: bundlesJsonConnectionSort | null; 
  filter?: filterBundlesJson | null; 
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePageConnectionSort | null; 
  filter?: filterSitePage | null; 
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePluginConnectionSort | null; 
  filter?: filterSitePlugin | null; 
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: directoryConnectionSort | null; 
  filter?: filterDirectory | null; 
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: fileConnectionSort | null; 
  filter?: filterFile | null; 
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: markdownRemarkConnectionSort | null; 
  filter?: filterMarkdownRemark | null; 
}
export interface AllAuthorsJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: authorsJsonConnectionSort | null; 
  filter?: filterAuthorsJson | null; 
}
export interface CoursesJsonRootQueryTypeArgs {
  id?: coursesJsonIdQueryString_2 | null; 
  title?: coursesJsonTitleQueryString_2 | null; 
  subtitle?: coursesJsonSubtitleQueryString_2 | null; 
  description?: coursesJsonDescriptionQueryString_2 | null; 
  url?: coursesJsonUrlQueryString_2 | null; 
  flavors?: coursesJsonFlavorsQueryList_2 | null; 
  level?: coursesJsonLevelQueryInteger_2 | null; 
  label?: coursesJsonLabelQueryString_2 | null; 
  launchdate?: coursesJsonLaunchdateQueryString_2 | null; 
  authors?: coursesJsonAuthorsQueryList_2 | null; 
  products?: coursesJsonProductsQueryList_2 | null; 
  chapters?: coursesJsonChaptersQueryList_2 | null; 
  internal?: coursesJsonInternalInputObject_2 | null; 
}
export interface BundlesJsonRootQueryTypeArgs {
  id?: bundlesJsonIdQueryString_2 | null; 
  title?: bundlesJsonTitleQueryString_2 | null; 
  subtitle?: bundlesJsonSubtitleQueryString_2 | null; 
  description?: bundlesJsonDescriptionQueryString_2 | null; 
  url?: bundlesJsonUrlQueryString_2 | null; 
  promototal?: bundlesJsonPromototalQueryInteger_2 | null; 
  promoremaining?: bundlesJsonPromoremainingQueryInteger_2 | null; 
  bundleLevel?: bundlesJsonBundleLevelQueryInteger_2 | null; 
  products?: bundlesJsonProductsQueryList_2 | null; 
  courseIds?: bundlesJsonCourseIdsQueryList_2 | null; 
  internal?: bundlesJsonInternalInputObject_2 | null; 
}
export interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null; 
  jsonName?: sitePageJsonNameQueryString | null; 
  internalComponentName?: sitePageInternalComponentNameQueryString | null; 
  path?: sitePagePathQueryString_2 | null; 
  component?: sitePageComponentQueryString | null; 
  componentChunkName?: sitePageComponentChunkNameQueryString | null; 
  context?: sitePageContextInputObject | null; 
  updatedAt?: sitePageUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePagePluginCreatorIdQueryString | null; 
  componentPath?: sitePageComponentPathQueryString | null; 
  id?: sitePageIdQueryString_2 | null; 
  internal?: sitePageInternalInputObject_2 | null; 
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null; 
  id?: sitePluginIdQueryString_2 | null; 
  name?: sitePluginNameQueryString_2 | null; 
  version?: sitePluginVersionQueryString_2 | null; 
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginPackageJsonInputObject_2 | null; 
  internal?: sitePluginInternalInputObject_2 | null; 
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null; 
  port?: sitePortQueryString_2 | null; 
  host?: siteHostQueryString_2 | null; 
  pathPrefix?: sitePathPrefixQueryString_2 | null; 
  polyfill?: sitePolyfillQueryBoolean_2 | null; 
  buildTime?: siteBuildTimeQueryString_2 | null; 
  id?: siteIdQueryString_2 | null; 
  internal?: siteInternalInputObject_2 | null; 
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null; 
  internal?: directoryInternalInputObject_2 | null; 
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryAbsolutePathQueryString_2 | null; 
  relativePath?: directoryRelativePathQueryString_2 | null; 
  extension?: directoryExtensionQueryString_2 | null; 
  size?: directorySizeQueryInteger_2 | null; 
  prettySize?: directoryPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryModifiedTimeQueryString_2 | null; 
  accessTime?: directoryAccessTimeQueryString_2 | null; 
  changeTime?: directoryChangeTimeQueryString_2 | null; 
  birthTime?: directoryBirthTimeQueryString_2 | null; 
  root?: directoryRootQueryString_2 | null; 
  dir?: directoryDirQueryString_2 | null; 
  base?: directoryBaseQueryString_2 | null; 
  ext?: directoryExtQueryString_2 | null; 
  name?: directoryNameQueryString_2 | null; 
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null; 
  dev?: directoryDevQueryInteger_2 | null; 
  mode?: directoryModeQueryInteger_2 | null; 
  nlink?: directoryNlinkQueryInteger_2 | null; 
  uid?: directoryUidQueryInteger_2 | null; 
  gid?: directoryGidQueryInteger_2 | null; 
  rdev?: directoryRdevQueryInteger_2 | null; 
  blksize?: directoryBlksizeQueryInteger_2 | null; 
  ino?: directoryInoQueryInteger_2 | null; 
  blocks?: directoryBlocksQueryInteger_2 | null; 
  atime?: directoryAtimeQueryString_2 | null; 
  mtime?: directoryMtimeQueryString_2 | null; 
  ctime?: directoryCtimeQueryString_2 | null; 
  birthtime?: directoryBirthtimeQueryString_2 | null; 
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null; 
  internal?: fileInternalInputObject_2 | null; 
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileAbsolutePathQueryString_2 | null; 
  relativePath?: fileRelativePathQueryString_2 | null; 
  extension?: fileExtensionQueryString_2 | null; 
  size?: fileSizeQueryInteger_2 | null; 
  prettySize?: filePrettySizeQueryString_2 | null; 
  modifiedTime?: fileModifiedTimeQueryString_2 | null; 
  accessTime?: fileAccessTimeQueryString_2 | null; 
  changeTime?: fileChangeTimeQueryString_2 | null; 
  birthTime?: fileBirthTimeQueryString_2 | null; 
  root?: fileRootQueryString_2 | null; 
  dir?: fileDirQueryString_2 | null; 
  base?: fileBaseQueryString_2 | null; 
  ext?: fileExtQueryString_2 | null; 
  name?: fileNameQueryString_2 | null; 
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null; 
  dev?: fileDevQueryInteger_2 | null; 
  mode?: fileModeQueryInteger_2 | null; 
  nlink?: fileNlinkQueryInteger_2 | null; 
  uid?: fileUidQueryInteger_2 | null; 
  gid?: fileGidQueryInteger_2 | null; 
  rdev?: fileRdevQueryInteger_2 | null; 
  blksize?: fileBlksizeQueryInteger_2 | null; 
  ino?: fileInoQueryInteger_2 | null; 
  blocks?: fileBlocksQueryInteger_2 | null; 
  atime?: fileAtimeQueryString_2 | null; 
  mtime?: fileMtimeQueryString_2 | null; 
  ctime?: fileCtimeQueryString_2 | null; 
  birthtime?: fileBirthtimeQueryString_2 | null; 
  publicURL?: publicUrlQueryString_3 | null; 
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null; 
  internal?: markdownRemarkInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null; 
  excerpt?: excerptQueryString_3 | null; 
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null; 
  html?: htmlQueryString_3 | null; 
  headings?: headingsQueryList_3 | null; 
  timeToRead?: timeToReadQueryInt_3 | null; 
  tableOfContents?: tableOfContentsQueryString_3 | null; 
  wordCount?: wordCountTypeName_3 | null; 
}
export interface AuthorsJsonRootQueryTypeArgs {
  id?: authorsJsonIdQueryString_2 | null; 
  name?: authorsJsonNameQueryString_2 | null; 
  picture?: authorsJsonPictureQueryString_2 | null; 
  bio?: authorsJsonBioQueryString_2 | null; 
  title?: authorsJsonTitleQueryString_2 | null; 
  types?: authorsJsonTypesQueryList_2 | null; 
  internal?: authorsJsonInternalInputObject_2 | null; 
}
export interface DistinctCoursesJsonConnectionArgs {
  field?: coursesJsonDistinctEnum | null; 
}
export interface GroupCoursesJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: coursesJsonGroupEnum | null; 
}
export interface IdLessons_2Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DistinctBundlesJsonConnectionArgs {
  field?: bundlesJsonDistinctEnum | null; 
}
export interface GroupBundlesJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: bundlesJsonGroupEnum | null; 
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null; 
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePageGroupEnum | null; 
}
export interface DateFrontmatter_2Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DateFrontmatter_3Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DateFrontmatter_4Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null; 
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePluginGroupEnum | null; 
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null; 
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: directoryGroupEnum | null; 
}
export interface ModifiedTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface MtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface CtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null; 
}
export interface GroupFileConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: fileGroupEnum | null; 
}
export interface ModifiedTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null; 
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null; 
}
export interface DateFrontmatter_5Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null; 
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: markdownRemarkGroupEnum | null; 
}
export interface DistinctAuthorsJsonConnectionArgs {
  field?: authorsJsonDistinctEnum | null; 
}
export interface GroupAuthorsJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: authorsJsonGroupEnum | null; 
}
export interface PortSiteArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}

export type CoursesJsonConnectionSortByFieldsEnum = "id" | "title" | "subtitle" | "description" | "url" | "flavors" | "level" | "label" | "launchdate" | "authors" | "products" | "chapters" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type coursesJsonConnectionSortOrderValues = "ASC" | "DESC";


export type coursesJsonDistinctEnum = "id" | "title" | "subtitle" | "description" | "url" | "flavors" | "level" | "label" | "launchdate" | "authors" | "products" | "chapters" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type coursesJsonGroupEnum = "id" | "title" | "subtitle" | "description" | "url" | "flavors" | "level" | "label" | "launchdate" | "authors" | "products" | "chapters" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type BundlesJsonConnectionSortByFieldsEnum = "id" | "title" | "subtitle" | "description" | "url" | "promototal" | "promoremaining" | "bundleLevel" | "products" | "courseIds" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type bundlesJsonConnectionSortOrderValues = "ASC" | "DESC";


export type bundlesJsonDistinctEnum = "id" | "title" | "subtitle" | "description" | "url" | "promototal" | "promoremaining" | "bundleLevel" | "products" | "courseIds" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type bundlesJsonGroupEnum = "id" | "title" | "subtitle" | "description" | "url" | "promototal" | "promoremaining" | "bundleLevel" | "products" | "courseIds" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type SitePageConnectionSortByFieldsEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "matchPath" | "component" | "componentChunkName" | "context___courseUrl" | "context___posts___pandas" | "context___posts___bananas" | "context___post" | "context___tag" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageConnectionSortOrderValues = "ASC" | "DESC";


export type sitePageDistinctEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___courseUrl" | "context___posts___pandas" | "context___posts___bananas" | "context___post" | "context___tag" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageGroupEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___courseUrl" | "context___posts___pandas" | "context___posts___bananas" | "context___post" | "context___tag" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "packageJson___keywords" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";


export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___name" | "pluginOptions___path" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___keywords" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___name" | "pluginOptions___path" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___keywords" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type DirectoryConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime";


export type directoryConnectionSortOrderValues = "ASC" | "DESC";


export type directoryDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime";


export type directoryGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime";


export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime" | "publicURL";


export type fileConnectionSortOrderValues = "ASC" | "DESC";


export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atime" | "mtime" | "ctime" | "birthtime";


export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "frontmatter___title" | "frontmatter___path" | "frontmatter___date" | "frontmatter___tags" | "frontmatter____PARENT" | "frontmatter___parent" | "excerpt" | "fileAbsolutePath" | "html" | "headings" | "timeToRead" | "tableOfContents" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words";


export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";


export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "frontmatter___title" | "frontmatter___path" | "frontmatter___date" | "frontmatter___tags" | "frontmatter____PARENT" | "frontmatter___parent" | "excerpt" | "fileAbsolutePath";


export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "frontmatter___title" | "frontmatter___path" | "frontmatter___date" | "frontmatter___tags" | "frontmatter____PARENT" | "frontmatter___parent" | "excerpt" | "fileAbsolutePath";


export type AuthorsJsonConnectionSortByFieldsEnum = "id" | "name" | "picture" | "bio" | "title" | "types" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type authorsJsonConnectionSortOrderValues = "ASC" | "DESC";


export type authorsJsonDistinctEnum = "id" | "name" | "picture" | "bio" | "title" | "types" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type authorsJsonGroupEnum = "id" | "name" | "picture" | "bio" | "title" | "types" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

