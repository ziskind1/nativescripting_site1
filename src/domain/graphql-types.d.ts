/* tslint:disable */

/* A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/* The &#x60;JSON&#x60; scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/* An object with an id, parent, and children */
export interface Node {
  id: string /* The id of the node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
}

export interface RootQueryType {
  allTestimonialsJson?: TestimonialsJsonConnection | null /* Connection to all TestimonialsJson nodes */;
  allCoursesJson?: CoursesJsonConnection | null /* Connection to all CoursesJson nodes */;
  allBundlesJson?: BundlesJsonConnection | null /* Connection to all BundlesJson nodes */;
  allSitePlugin?: SitePluginConnection | null /* Connection to all SitePlugin nodes */;
  allDirectory?: DirectoryConnection | null /* Connection to all Directory nodes */;
  allFile?: FileConnection | null /* Connection to all File nodes */;
  allImageSharp?: ImageSharpConnection | null /* Connection to all ImageSharp nodes */;
  allAuthorsJson?: AuthorsJsonConnection | null /* Connection to all AuthorsJson nodes */;
  allMarkdownRemark?: MarkdownRemarkConnection | null /* Connection to all MarkdownRemark nodes */;
  allSitePage?: SitePageConnection | null /* Connection to all SitePage nodes */;
  testimonialsJson?: TestimonialsJson | null;
  coursesJson?: CoursesJson | null;
  bundlesJson?: BundlesJson | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
  directory?: Directory | null;
  file?: File | null;
  imageSharp?: ImageSharp | null;
  authorsJson?: AuthorsJson | null;
  markdownRemark?: MarkdownRemark | null;
  sitePage?: SitePage | null;
}
/* A connection to a list of items. */
export interface TestimonialsJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: TestimonialsJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: testimonialsJsonGroupConnectionConnection[] | null;
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /* When paginating, are there more items? */;
}
/* An edge in a connection. */
export interface TestimonialsJsonEdge {
  node?: TestimonialsJson | null /* The item at the end of the edge */;
  next?: TestimonialsJson | null /* The next edge in the connection */;
  previous?: TestimonialsJson | null /* The previous edge in the connection */;
}
/* Node of type TestimonialsJson */
export interface TestimonialsJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  name?: string | null;
  img?: string | null;
  twitter?: string | null;
  order?: number | null;
  quoteHtml?: string | null;
  titleHtml?: string | null;
  internal?: internal_12 | null;
}

export interface internal_12 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface testimonialsJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: testimonialsJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface testimonialsJsonGroupConnectionEdge {
  node?: TestimonialsJson | null /* The item at the end of the edge */;
  next?: TestimonialsJson | null /* The next edge in the connection */;
  previous?: TestimonialsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface CoursesJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: CoursesJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: coursesJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface CoursesJsonEdge {
  node?: CoursesJson | null /* The item at the end of the edge */;
  next?: CoursesJson | null /* The next edge in the connection */;
  previous?: CoursesJson | null /* The previous edge in the connection */;
}
/* Node of type CoursesJson */
export interface CoursesJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  notes?: string[] | null;
  url?: string | null;
  flavors?: string[] | null;
  level?: number | null;
  order?: number | null;
  label?: string | null;
  launchdate?: string | null;
  authors?: string[] | null;
  products?: products_3[] | null;
  publishedChapters?: number[] | null;
  chapters?: chapters_2[] | null;
  internal?: internal_13 | null;
  publishingSchedule?: publishingSchedule_2[] | null;
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
  id?: Date | null;
  name?: string | null;
  isPreview?: boolean | null;
}

export interface internal_13 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface publishingSchedule_2 {
  id?: number | null;
  date?: string | null;
}
/* A connection to a list of items. */
export interface coursesJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: coursesJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface coursesJsonGroupConnectionEdge {
  node?: CoursesJson | null /* The item at the end of the edge */;
  next?: CoursesJson | null /* The next edge in the connection */;
  previous?: CoursesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface BundlesJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: BundlesJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: bundlesJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface BundlesJsonEdge {
  node?: BundlesJson | null /* The item at the end of the edge */;
  next?: BundlesJson | null /* The next edge in the connection */;
  previous?: BundlesJson | null /* The previous edge in the connection */;
}
/* Node of type BundlesJson */
export interface BundlesJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  url?: string | null;
  promototal?: number | null;
  promoremaining?: number | null;
  bundleLevel?: number | null;
  products?: products_4[] | null;
  courseIds?: string[] | null;
  internal?: internal_14 | null;
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

export interface internal_14 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface bundlesJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: bundlesJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface bundlesJsonGroupConnectionEdge {
  node?: BundlesJson | null /* The item at the end of the edge */;
  next?: BundlesJson | null /* The next edge in the connection */;
  previous?: BundlesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePluginEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePluginGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_3 | null;
  nodeAPIs?: string[] | null;
  browserAPIs?: string[] | null;
  ssrAPIs?: string[] | null;
  pluginFilepath?: string | null;
  packageJson?: packageJson_2 | null;
  internal?: internal_15 | null;
}

export interface pluginOptions_3 {
  plugins?: plugins_2[] | null;
  siteUrl?: string | null;
  output?: string | null;
  query?: string | null;
  name?: string | null;
  path?: string | null;
  linkImagesToOriginal?: boolean | null;
  maxWidth?: number | null;
  wrapperStyle?: string | null;
  backgroundColor?: string | null;
  showCaptions?: boolean | null;
  pathPrefix?: string | null;
  ignoreFileExtensions?: string[] | null;
}

export interface plugins_2 {
  resolve?: string | null;
  id?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_4 | null;
  pluginFilepath?: string | null;
}

export interface pluginOptions_4 {
  linkImagesToOriginal?: boolean | null;
  maxWidth?: number | null;
  wrapperStyle?: string | null;
  backgroundColor?: string | null;
  showCaptions?: boolean | null;
  pathPrefix?: string | null;
  ignoreFileExtensions?: string[] | null;
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

export interface internal_15 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePluginGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: DirectoryEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: directoryGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* Node of type Directory */
export interface Directory extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_16 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
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
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
}

export interface internal_16 {
  contentDigest?: string | null;
  type?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: directoryGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: FileEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: fileGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* Node of type File */
export interface File extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  childrenAuthorsJson?:
    | AuthorsJson[]
    | null /* The children of this node of type authorsJson */;
  childrenBundlesJson?:
    | BundlesJson[]
    | null /* The children of this node of type bundlesJson */;
  childrenTestimonialsJson?:
    | TestimonialsJson[]
    | null /* The children of this node of type testimonialsJson */;
  childMarkdownRemark?: MarkdownRemark | null /* The child of this node of type markdownRemark */;
  childImageSharp?: ImageSharp | null /* The child of this node of type imageSharp */;
  childrenCoursesJson?:
    | CoursesJson[]
    | null /* The children of this node of type coursesJson */;
  internal?: internal_17 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
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
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
  publicURL?:
    | string
    | null /* Copy file to static directory and return public url to it */;
}
/* Node of type AuthorsJson */
export interface AuthorsJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  name?: string | null;
  picture?: string | null;
  bio?: string | null;
  biolong?: string | null;
  title?: string | null;
  twitter?: string | null;
  github?: string | null;
  types?: string[] | null;
  internal?: internal_18 | null;
}

export interface internal_18 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_19 | null;
  frontmatter?: frontmatter_2 | null;
  excerpt?: string | null;
  fileAbsolutePath?: string | null;
  html?: string | null;
  htmlAst?: JSON | null;
  headings?: MarkdownHeading[] | null;
  timeToRead?: number | null;
  tableOfContents?: string | null;
  wordCount?: wordCount | null;
}

export interface internal_19 {
  content?: string | null;
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface frontmatter_2 {
  title?: string | null;
  path?: string | null;
  author?: string | null;
  createdDate?: Date | null;
  updatedDate?: Date | null;
  draft?: boolean | null;
  tags?: string[] | null;
  image?: File | null;
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
/* Node of type ImageSharp */
export interface ImageSharp extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_20 | null;
  original?: ImageSharpOriginal | null;
  resolutions?: ImageSharpResolutions | null;
  sizes?: ImageSharpSizes | null;
  responsiveResolution?: ImageSharpResponsiveResolution | null;
  responsiveSizes?: ImageSharpResponsiveSizes | null;
  resize?: ImageSharpResize | null;
}

export interface internal_20 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface ImageSharpOriginal {
  width?: number | null;
  height?: number | null;
  src?: string | null;
}

export interface ImageSharpResolutions {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  width?: number | null;
  height?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  originalName?: string | null;
}

export interface ImageSharpSizes {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes?: string | null;
  originalImg?: string | null;
  originalName?: string | null;
}

export interface ImageSharpResponsiveResolution {
  base64?: string | null;
  aspectRatio?: number | null;
  width?: number | null;
  height?: number | null;
  src?: string | null;
  srcSet?: string | null;
  originalName?: string | null;
}

export interface ImageSharpResponsiveSizes {
  base64?: string | null;
  aspectRatio?: number | null;
  src?: string | null;
  srcSet?: string | null;
  sizes?: string | null;
  originalImg?: string | null;
  originalName?: string | null;
}

export interface ImageSharpResize {
  src?: string | null;
  tracedSVG?: string | null;
  width?: number | null;
  height?: number | null;
  aspectRatio?: number | null;
  originalName?: string | null;
}

export interface internal_17 {
  contentDigest?: string | null;
  mediaType?: string | null;
  type?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: fileGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface ImageSharpConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: ImageSharpEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: imageSharpGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface ImageSharpEdge {
  node?: ImageSharp | null /* The item at the end of the edge */;
  next?: ImageSharp | null /* The next edge in the connection */;
  previous?: ImageSharp | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: imageSharpGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface imageSharpGroupConnectionEdge {
  node?: ImageSharp | null /* The item at the end of the edge */;
  next?: ImageSharp | null /* The next edge in the connection */;
  previous?: ImageSharp | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface AuthorsJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: AuthorsJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: authorsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface AuthorsJsonEdge {
  node?: AuthorsJson | null /* The item at the end of the edge */;
  next?: AuthorsJson | null /* The next edge in the connection */;
  previous?: AuthorsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface authorsJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: authorsJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface authorsJsonGroupConnectionEdge {
  node?: AuthorsJson | null /* The item at the end of the edge */;
  next?: AuthorsJson | null /* The next edge in the connection */;
  previous?: AuthorsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: MarkdownRemarkEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: markdownRemarkGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /* The item at the end of the edge */;
  next?: MarkdownRemark | null /* The next edge in the connection */;
  previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: markdownRemarkGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /* The item at the end of the edge */;
  next?: MarkdownRemark | null /* The next edge in the connection */;
  previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePageEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePageGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  layout?: string | null;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  context?: context | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: internal_21 | null;
}

export interface context {
  courseUrl?: string | null;
  slug?: string | null;
  prevPostPath?: string | null;
  nextPostPath?: string | null;
  posts?: posts | null;
  post?: post[] | null;
  tag?: string | null;
}

export interface posts {
  pandas?: pandas[] | null;
  NativeScript?: nativeScript[] | null;
  Tips_and_Tricks?: tipsAndTricks[] | null;
  Tutorial?: tutorial[] | null;
  Video?: video[] | null;
  Courses?: courses[] | null;
  Angular?: angular[] | null;
  Styling?: styling[] | null;
  Core?: core[] | null;
  Authentication?: authentication[] | null;
  Authorization?: authorization[] | null;
  Enterprise?: enterprise[] | null;
  UI?: ui[] | null;
  Cordova?: cordova[] | null;
  Tip?: tip[] | null;
  JavaScript?: javaScript[] | null;
  TypeScript?: typeScript[] | null;
}

export interface pandas {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_3 | null;
}

export interface frontmatter_3 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface nativeScript {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_4 | null;
}

export interface frontmatter_4 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface tipsAndTricks {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_5 | null;
}

export interface frontmatter_5 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface tutorial {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_6 | null;
}

export interface frontmatter_6 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface video {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_7 | null;
}

export interface frontmatter_7 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface courses {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_8 | null;
}

export interface frontmatter_8 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface angular {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_9 | null;
}

export interface frontmatter_9 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface styling {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_10 | null;
}

export interface frontmatter_10 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface core {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_11 | null;
}

export interface frontmatter_11 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface authentication {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_12 | null;
}

export interface frontmatter_12 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface authorization {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_13 | null;
}

export interface frontmatter_13 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface enterprise {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_14 | null;
}

export interface frontmatter_14 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface ui {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_15 | null;
}

export interface frontmatter_15 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface cordova {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_16 | null;
}

export interface frontmatter_16 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface tip {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_17 | null;
}

export interface frontmatter_17 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface javaScript {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_18 | null;
}

export interface frontmatter_18 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface typeScript {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_19 | null;
}

export interface frontmatter_19 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface post {
  excerpt?: string | null;
  html?: string | null;
  id?: string | null;
  timeToRead?: number | null;
  frontmatter?: frontmatter_20 | null;
}

export interface frontmatter_20 {
  createdDate?: Date | null;
  updatedDate?: Date | null;
  tags?: string[] | null;
  path?: string | null;
  title?: string | null;
}

export interface internal_21 {
  type?: string | null;
  contentDigest?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePageGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* Node of type Site */
export interface Site extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  siteMetadata?: siteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: internal_22 | null;
}

export interface siteMetadata_2 {
  siteName?: string | null;
  siteUrl?: string | null;
}

export interface internal_22 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface testimonialsJsonConnectionSort {
  fields: TestimonialsJsonConnectionSortByFieldsEnum[];
  order?: testimonialsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterTestimonialsJson {
  id?: testimonialsJsonConnectionIdQueryString_2 | null;
  name?: testimonialsJsonConnectionNameQueryString_2 | null;
  img?: testimonialsJsonConnectionImgQueryString_2 | null;
  twitter?: testimonialsJsonConnectionTwitterQueryString_2 | null;
  order?: testimonialsJsonConnectionOrderQueryInteger_2 | null;
  quoteHtml?: testimonialsJsonConnectionQuoteHtmlQueryString_2 | null;
  titleHtml?: testimonialsJsonConnectionTitleHtmlQueryString_2 | null;
  internal?: testimonialsJsonConnectionInternalInputObject_2 | null;
}

export interface testimonialsJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionImgQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface testimonialsJsonConnectionQuoteHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionTitleHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionInternalInputObject_2 {
  contentDigest?: testimonialsJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: testimonialsJsonConnectionInternalTypeQueryString_2 | null;
  owner?: testimonialsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface testimonialsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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
  notes?: coursesJsonConnectionNotesQueryList_2 | null;
  url?: coursesJsonConnectionUrlQueryString_2 | null;
  flavors?: coursesJsonConnectionFlavorsQueryList_2 | null;
  level?: coursesJsonConnectionLevelQueryInteger_2 | null;
  order?: coursesJsonConnectionOrderQueryInteger_2 | null;
  label?: coursesJsonConnectionLabelQueryString_2 | null;
  launchdate?: coursesJsonConnectionLaunchdateQueryString_2 | null;
  authors?: coursesJsonConnectionAuthorsQueryList_2 | null;
  products?: coursesJsonConnectionProductsQueryList_2 | null;
  publishedChapters?: coursesJsonConnectionPublishedChaptersQueryList_2 | null;
  chapters?: coursesJsonConnectionChaptersQueryList_2 | null;
  internal?: coursesJsonConnectionInternalInputObject_2 | null;
  publishingSchedule?: coursesJsonConnectionPublishingScheduleQueryList_2 | null;
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

export interface coursesJsonConnectionNotesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
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

export interface coursesJsonConnectionOrderQueryInteger_2 {
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

export interface coursesJsonConnectionPublishedChaptersQueryList_2 {
  eq?: number | null;
  ne?: number | null;
  in?: number[] | null;
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
  isPreview?: coursesJsonConnectionChaptersLessonsIsPreviewQueryBoolean_2 | null;
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

export interface coursesJsonConnectionChaptersLessonsIsPreviewQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
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

export interface coursesJsonConnectionPublishingScheduleQueryList_2 {
  in?: coursesJsonConnectionPublishingScheduleInputObject_2[] | null;
}

export interface coursesJsonConnectionPublishingScheduleInputObject_2 {
  id?: coursesJsonConnectionPublishingScheduleIdQueryInteger_2 | null;
  date?: coursesJsonConnectionPublishingScheduleDateQueryString_2 | null;
}

export interface coursesJsonConnectionPublishingScheduleIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface coursesJsonConnectionPublishingScheduleDateQueryString_2 {
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
  browserAPIs?: sitePluginConnectionBrowserApIsQueryList_2 | null;
  ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null;
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
  plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  siteUrl?: sitePluginConnectionPluginOptionsSiteUrlQueryString_2 | null;
  output?: sitePluginConnectionPluginOptionsOutputQueryString_2 | null;
  query?: sitePluginConnectionPluginOptionsQueryQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  linkImagesToOriginal?: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  maxWidth?: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null;
  showCaptions?: sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in?: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  linkImagesToOriginal?: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  showCaptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsSiteUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsOutputQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsQueryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
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
  atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null;
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
  description?: directoryConnectionInternalDescriptionQueryString_2 | null;
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

export interface directoryConnectionInternalDescriptionQueryString_2 {
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

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
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
  atimeMs?: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null;
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
  description?: fileConnectionInternalDescriptionQueryString_2 | null;
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

export interface fileConnectionInternalDescriptionQueryString_2 {
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

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
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

export interface DuotoneGradient {
  highlight?: string | null;
  shadow?: string | null;
  opacity?: number | null;
}

export interface Potrace {
  turnPolicy?: PotraceTurnPolicy | null;
  turdSize?: number | null;
  alphaMax?: number | null;
  optCurve?: boolean | null;
  optTolerance?: number | null;
  threshold?: number | null;
  blackOnWhite?: boolean | null;
  color?: string | null;
  background?: string | null;
}

export interface imageSharpConnectionSort {
  fields: ImageSharpConnectionSortByFieldsEnum[];
  order?: imageSharpConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterImageSharp {
  id?: imageSharpConnectionIdQueryString_2 | null;
  internal?: imageSharpConnectionInternalInputObject_2 | null;
  original?: originalTypeName_4 | null;
  resolutions?: resolutionsTypeName_4 | null;
  sizes?: sizesTypeName_4 | null;
  responsiveResolution?: responsiveResolutionTypeName_4 | null;
  responsiveSizes?: responsiveSizesTypeName_4 | null;
  resize?: resizeTypeName_4 | null;
}

export interface imageSharpConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest?: imageSharpConnectionInternalContentDigestQueryString_2 | null;
  type?: imageSharpConnectionInternalTypeQueryString_2 | null;
  owner?: imageSharpConnectionInternalOwnerQueryString_2 | null;
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface originalTypeName_4 {
  width?: originalWidthQueryFloat_4 | null;
  height?: originalHeightQueryFloat_4 | null;
  src?: originalSrcQueryString_4 | null;
}

export interface originalWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface originalHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface originalSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTypeName_4 {
  base64?: resolutionsBase64QueryString_4 | null;
  tracedSVG?: resolutionsTracedSvgQueryString_4 | null;
  aspectRatio?: resolutionsAspectRatioQueryFloat_4 | null;
  width?: resolutionsWidthQueryFloat_4 | null;
  height?: resolutionsHeightQueryFloat_4 | null;
  src?: resolutionsSrcQueryString_4 | null;
  srcSet?: resolutionsSrcSetQueryString_4 | null;
  srcWebp?: resolutionsSrcWebpQueryString_4 | null;
  srcSetWebp?: resolutionsSrcSetWebpQueryString_4 | null;
  originalName?: resolutionsOriginalNameQueryString_4 | null;
}

export interface resolutionsBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTypeName_4 {
  base64?: sizesBase64QueryString_4 | null;
  tracedSVG?: sizesTracedSvgQueryString_4 | null;
  aspectRatio?: sizesAspectRatioQueryFloat_4 | null;
  src?: sizesSrcQueryString_4 | null;
  srcSet?: sizesSrcSetQueryString_4 | null;
  srcWebp?: sizesSrcWebpQueryString_4 | null;
  srcSetWebp?: sizesSrcSetWebpQueryString_4 | null;
  sizes?: sizesSizesQueryString_4 | null;
  originalImg?: sizesOriginalImgQueryString_4 | null;
  originalName?: sizesOriginalNameQueryString_4 | null;
}

export interface sizesBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface sizesSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalImgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionTypeName_4 {
  base64?: responsiveResolutionBase64QueryString_4 | null;
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_4 | null;
  width?: responsiveResolutionWidthQueryFloat_4 | null;
  height?: responsiveResolutionHeightQueryFloat_4 | null;
  src?: responsiveResolutionSrcQueryString_4 | null;
  srcSet?: responsiveResolutionSrcSetQueryString_4 | null;
  originalName?: responsiveResolutionOriginalNameQueryString_4 | null;
}

export interface responsiveResolutionBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesTypeName_4 {
  base64?: responsiveSizesBase64QueryString_4 | null;
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_4 | null;
  src?: responsiveSizesSrcQueryString_4 | null;
  srcSet?: responsiveSizesSrcSetQueryString_4 | null;
  sizes?: responsiveSizesSizesQueryString_4 | null;
  originalImg?: responsiveSizesOriginalImgQueryString_4 | null;
  originalName?: responsiveSizesOriginalNameQueryString_4 | null;
}

export interface responsiveSizesBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveSizesSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesOriginalImgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTypeName_4 {
  src?: resizeSrcQueryString_4 | null;
  tracedSVG?: resizeTracedSvgQueryString_4 | null;
  width?: resizeWidthQueryInt_4 | null;
  height?: resizeHeightQueryInt_4 | null;
  aspectRatio?: resizeAspectRatioQueryFloat_4 | null;
  originalName?: resizeOriginalNameQueryString_4 | null;
}

export interface resizeSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeWidthQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeHeightQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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
  biolong?: authorsJsonConnectionBiolongQueryString_2 | null;
  title?: authorsJsonConnectionTitleQueryString_2 | null;
  twitter?: authorsJsonConnectionTwitterQueryString_2 | null;
  github?: authorsJsonConnectionGithubQueryString_2 | null;
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

export interface authorsJsonConnectionBiolongQueryString_2 {
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

export interface authorsJsonConnectionTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface authorsJsonConnectionGithubQueryString_2 {
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
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
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

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
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
  author?: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
  createdDate?: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;
  updatedDate?: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null;
  draft?: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
  tags?: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;
  image?: markdownRemarkConnectionFrontmatterImageQueryString_2 | null;
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

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
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
  slug?: sitePageConnectionContextSlugQueryString | null;
  prevPostPath?: sitePageConnectionContextPrevPostPathQueryString | null;
  nextPostPath?: sitePageConnectionContextNextPostPathQueryString | null;
  posts?: sitePageConnectionContextPostsInputObject | null;
  post?: sitePageConnectionContextPostQueryList | null;
  tag?: sitePageConnectionContextTagQueryString | null;
}

export interface sitePageConnectionContextCourseUrlQueryString {
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

export interface sitePageConnectionContextPrevPostPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextNextPostPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsInputObject {
  pandas?: sitePageConnectionContextPostsPandasQueryList | null;
  NativeScript?: sitePageConnectionContextPostsNativeScriptQueryList | null;
  Tips_and_Tricks?: sitePageConnectionContextPostsTipsAndTricksQueryList | null;
  Tutorial?: sitePageConnectionContextPostsTutorialQueryList | null;
  Video?: sitePageConnectionContextPostsVideoQueryList | null;
  Courses?: sitePageConnectionContextPostsCoursesQueryList | null;
  Angular?: sitePageConnectionContextPostsAngularQueryList | null;
  Styling?: sitePageConnectionContextPostsStylingQueryList | null;
  Core?: sitePageConnectionContextPostsCoreQueryList | null;
  Authentication?: sitePageConnectionContextPostsAuthenticationQueryList | null;
  Authorization?: sitePageConnectionContextPostsAuthorizationQueryList | null;
  Enterprise?: sitePageConnectionContextPostsEnterpriseQueryList | null;
  UI?: sitePageConnectionContextPostsUiQueryList | null;
  Cordova?: sitePageConnectionContextPostsCordovaQueryList | null;
  Tip?: sitePageConnectionContextPostsTipQueryList | null;
  JavaScript?: sitePageConnectionContextPostsJavaScriptQueryList | null;
  TypeScript?: sitePageConnectionContextPostsTypeScriptQueryList | null;
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
  createdDate?: sitePageConnectionContextPostsPandasFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsPandasFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsPandasFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsPandasFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsPandasFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsPandasFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsPandasFrontmatterUpdatedDateQueryString {
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

export interface sitePageConnectionContextPostsNativeScriptQueryList {
  in?: sitePageConnectionContextPostsNativeScriptInputObject[] | null;
}

export interface sitePageConnectionContextPostsNativeScriptInputObject {
  excerpt?: sitePageConnectionContextPostsNativeScriptExcerptQueryString | null;
  html?: sitePageConnectionContextPostsNativeScriptHtmlQueryString | null;
  id?: sitePageConnectionContextPostsNativeScriptIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsNativeScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsNativeScriptFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsNativeScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsNativeScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsNativeScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsNativeScriptFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsNativeScriptFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsNativeScriptFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsNativeScriptFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksQueryList {
  in?: sitePageConnectionContextPostsTipsAndTricksInputObject[] | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksInputObject {
  excerpt?: sitePageConnectionContextPostsTipsAndTricksExcerptQueryString | null;
  html?: sitePageConnectionContextPostsTipsAndTricksHtmlQueryString | null;
  id?: sitePageConnectionContextPostsTipsAndTricksIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsTipsAndTricksTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsTipsAndTricksFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsTipsAndTricksFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsTipsAndTricksFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsTipsAndTricksFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsTipsAndTricksFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipsAndTricksFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialQueryList {
  in?: sitePageConnectionContextPostsTutorialInputObject[] | null;
}

export interface sitePageConnectionContextPostsTutorialInputObject {
  excerpt?: sitePageConnectionContextPostsTutorialExcerptQueryString | null;
  html?: sitePageConnectionContextPostsTutorialHtmlQueryString | null;
  id?: sitePageConnectionContextPostsTutorialIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsTutorialTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsTutorialFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsTutorialExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsTutorialFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsTutorialFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsTutorialFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsTutorialFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsTutorialFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTutorialFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoQueryList {
  in?: sitePageConnectionContextPostsVideoInputObject[] | null;
}

export interface sitePageConnectionContextPostsVideoInputObject {
  excerpt?: sitePageConnectionContextPostsVideoExcerptQueryString | null;
  html?: sitePageConnectionContextPostsVideoHtmlQueryString | null;
  id?: sitePageConnectionContextPostsVideoIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsVideoTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsVideoFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsVideoExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsVideoFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsVideoFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsVideoFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsVideoFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsVideoFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsVideoFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesQueryList {
  in?: sitePageConnectionContextPostsCoursesInputObject[] | null;
}

export interface sitePageConnectionContextPostsCoursesInputObject {
  excerpt?: sitePageConnectionContextPostsCoursesExcerptQueryString | null;
  html?: sitePageConnectionContextPostsCoursesHtmlQueryString | null;
  id?: sitePageConnectionContextPostsCoursesIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsCoursesTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsCoursesFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsCoursesExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsCoursesFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsCoursesFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsCoursesFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsCoursesFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsCoursesFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoursesFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularQueryList {
  in?: sitePageConnectionContextPostsAngularInputObject[] | null;
}

export interface sitePageConnectionContextPostsAngularInputObject {
  excerpt?: sitePageConnectionContextPostsAngularExcerptQueryString | null;
  html?: sitePageConnectionContextPostsAngularHtmlQueryString | null;
  id?: sitePageConnectionContextPostsAngularIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsAngularTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsAngularFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsAngularExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsAngularFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsAngularFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsAngularFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsAngularFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsAngularFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAngularFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingQueryList {
  in?: sitePageConnectionContextPostsStylingInputObject[] | null;
}

export interface sitePageConnectionContextPostsStylingInputObject {
  excerpt?: sitePageConnectionContextPostsStylingExcerptQueryString | null;
  html?: sitePageConnectionContextPostsStylingHtmlQueryString | null;
  id?: sitePageConnectionContextPostsStylingIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsStylingTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsStylingFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsStylingExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsStylingFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsStylingFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsStylingFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsStylingFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsStylingFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsStylingFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreQueryList {
  in?: sitePageConnectionContextPostsCoreInputObject[] | null;
}

export interface sitePageConnectionContextPostsCoreInputObject {
  excerpt?: sitePageConnectionContextPostsCoreExcerptQueryString | null;
  html?: sitePageConnectionContextPostsCoreHtmlQueryString | null;
  id?: sitePageConnectionContextPostsCoreIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsCoreTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsCoreFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsCoreExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsCoreFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsCoreFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsCoreFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsCoreFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsCoreFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCoreFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationQueryList {
  in?: sitePageConnectionContextPostsAuthenticationInputObject[] | null;
}

export interface sitePageConnectionContextPostsAuthenticationInputObject {
  excerpt?: sitePageConnectionContextPostsAuthenticationExcerptQueryString | null;
  html?: sitePageConnectionContextPostsAuthenticationHtmlQueryString | null;
  id?: sitePageConnectionContextPostsAuthenticationIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsAuthenticationTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsAuthenticationFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsAuthenticationExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsAuthenticationFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsAuthenticationFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsAuthenticationFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsAuthenticationFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsAuthenticationFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthenticationFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationQueryList {
  in?: sitePageConnectionContextPostsAuthorizationInputObject[] | null;
}

export interface sitePageConnectionContextPostsAuthorizationInputObject {
  excerpt?: sitePageConnectionContextPostsAuthorizationExcerptQueryString | null;
  html?: sitePageConnectionContextPostsAuthorizationHtmlQueryString | null;
  id?: sitePageConnectionContextPostsAuthorizationIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsAuthorizationTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsAuthorizationFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsAuthorizationExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsAuthorizationFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsAuthorizationFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsAuthorizationFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsAuthorizationFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsAuthorizationFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsAuthorizationFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseQueryList {
  in?: sitePageConnectionContextPostsEnterpriseInputObject[] | null;
}

export interface sitePageConnectionContextPostsEnterpriseInputObject {
  excerpt?: sitePageConnectionContextPostsEnterpriseExcerptQueryString | null;
  html?: sitePageConnectionContextPostsEnterpriseHtmlQueryString | null;
  id?: sitePageConnectionContextPostsEnterpriseIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsEnterpriseTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsEnterpriseFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsEnterpriseExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsEnterpriseFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsEnterpriseFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsEnterpriseFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsEnterpriseFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsEnterpriseFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsEnterpriseFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiQueryList {
  in?: sitePageConnectionContextPostsUiInputObject[] | null;
}

export interface sitePageConnectionContextPostsUiInputObject {
  excerpt?: sitePageConnectionContextPostsUiExcerptQueryString | null;
  html?: sitePageConnectionContextPostsUiHtmlQueryString | null;
  id?: sitePageConnectionContextPostsUiIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsUiTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsUiFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsUiExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsUiFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsUiFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsUiFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsUiFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsUiFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsUiFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaQueryList {
  in?: sitePageConnectionContextPostsCordovaInputObject[] | null;
}

export interface sitePageConnectionContextPostsCordovaInputObject {
  excerpt?: sitePageConnectionContextPostsCordovaExcerptQueryString | null;
  html?: sitePageConnectionContextPostsCordovaHtmlQueryString | null;
  id?: sitePageConnectionContextPostsCordovaIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsCordovaTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsCordovaFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsCordovaExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsCordovaFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsCordovaFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsCordovaFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsCordovaFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsCordovaFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsCordovaFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipQueryList {
  in?: sitePageConnectionContextPostsTipInputObject[] | null;
}

export interface sitePageConnectionContextPostsTipInputObject {
  excerpt?: sitePageConnectionContextPostsTipExcerptQueryString | null;
  html?: sitePageConnectionContextPostsTipHtmlQueryString | null;
  id?: sitePageConnectionContextPostsTipIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsTipTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsTipFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsTipExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsTipFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsTipFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsTipFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsTipFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsTipFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTipFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptQueryList {
  in?: sitePageConnectionContextPostsJavaScriptInputObject[] | null;
}

export interface sitePageConnectionContextPostsJavaScriptInputObject {
  excerpt?: sitePageConnectionContextPostsJavaScriptExcerptQueryString | null;
  html?: sitePageConnectionContextPostsJavaScriptHtmlQueryString | null;
  id?: sitePageConnectionContextPostsJavaScriptIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsJavaScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsJavaScriptFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsJavaScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsJavaScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsJavaScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsJavaScriptFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsJavaScriptFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsJavaScriptFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsJavaScriptFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptQueryList {
  in?: sitePageConnectionContextPostsTypeScriptInputObject[] | null;
}

export interface sitePageConnectionContextPostsTypeScriptInputObject {
  excerpt?: sitePageConnectionContextPostsTypeScriptExcerptQueryString | null;
  html?: sitePageConnectionContextPostsTypeScriptHtmlQueryString | null;
  id?: sitePageConnectionContextPostsTypeScriptIdQueryString | null;
  timeToRead?: sitePageConnectionContextPostsTypeScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageConnectionContextPostsTypeScriptFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPostsTypeScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterInputObject {
  createdDate?: sitePageConnectionContextPostsTypeScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostsTypeScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostsTypeScriptFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostsTypeScriptFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostsTypeScriptFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostsTypeScriptFrontmatterTitleQueryString {
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
  createdDate?: sitePageConnectionContextPostFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageConnectionContextPostFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageConnectionContextPostFrontmatterTagsQueryList | null;
  path?: sitePageConnectionContextPostFrontmatterPathQueryString | null;
  title?: sitePageConnectionContextPostFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPostFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPostFrontmatterUpdatedDateQueryString {
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

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorIdQueryString | null;
  name?: sitePageConnectionPluginCreatorNameQueryString | null;
  version?: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  browserAPIs?: sitePageConnectionPluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: sitePageConnectionPluginCreatorParentQueryString | null;
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
  siteUrl?: sitePageConnectionPluginCreatorPluginOptionsSiteUrlQueryString | null;
  output?: sitePageConnectionPluginCreatorPluginOptionsOutputQueryString | null;
  query?: sitePageConnectionPluginCreatorPluginOptionsQueryQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
  showCaptions?: sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  in?: sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  showCaptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsSiteUrlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsOutputQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
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
  description?: sitePageConnectionInternalDescriptionQueryString | null;
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

export interface sitePageConnectionInternalDescriptionQueryString {
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

export interface testimonialsJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonImgQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface testimonialsJsonQuoteHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonTitleHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonInternalInputObject_2 {
  contentDigest?: testimonialsJsonInternalContentDigestQueryString_2 | null;
  type?: testimonialsJsonInternalTypeQueryString_2 | null;
  owner?: testimonialsJsonInternalOwnerQueryString_2 | null;
}

export interface testimonialsJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface testimonialsJsonInternalOwnerQueryString_2 {
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

export interface coursesJsonNotesQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
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

export interface coursesJsonOrderQueryInteger_2 {
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

export interface coursesJsonPublishedChaptersQueryList_2 {
  eq?: number | null;
  ne?: number | null;
  in?: number[] | null;
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
  isPreview?: coursesJsonChaptersLessonsIsPreviewQueryBoolean_2 | null;
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

export interface coursesJsonChaptersLessonsIsPreviewQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
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

export interface coursesJsonPublishingScheduleQueryList_2 {
  in?: coursesJsonPublishingScheduleInputObject_2[] | null;
}

export interface coursesJsonPublishingScheduleInputObject_2 {
  id?: coursesJsonPublishingScheduleIdQueryInteger_2 | null;
  date?: coursesJsonPublishingScheduleDateQueryString_2 | null;
}

export interface coursesJsonPublishingScheduleIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface coursesJsonPublishingScheduleDateQueryString_2 {
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
  plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null;
  siteUrl?: sitePluginPluginOptionsSiteUrlQueryString_2 | null;
  output?: sitePluginPluginOptionsOutputQueryString_2 | null;
  query?: sitePluginPluginOptionsQueryQueryString_2 | null;
  name?: sitePluginPluginOptionsNameQueryString_2 | null;
  path?: sitePluginPluginOptionsPathQueryString_2 | null;
  linkImagesToOriginal?: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  maxWidth?: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginPluginOptionsBackgroundColorQueryString_2 | null;
  showCaptions?: sitePluginPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in?: sitePluginPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  linkImagesToOriginal?: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  showCaptions?: sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsSiteUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsOutputQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsQueryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
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
  siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null;
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
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
  description?: directoryInternalDescriptionQueryString_2 | null;
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

export interface directoryInternalDescriptionQueryString_2 {
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

export interface directoryAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
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
  description?: fileInternalDescriptionQueryString_2 | null;
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

export interface fileInternalDescriptionQueryString_2 {
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

export interface fileAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
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

export interface imageSharpIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalInputObject_2 {
  contentDigest?: imageSharpInternalContentDigestQueryString_2 | null;
  type?: imageSharpInternalTypeQueryString_2 | null;
  owner?: imageSharpInternalOwnerQueryString_2 | null;
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface originalTypeName_3 {
  width?: originalWidthQueryFloat_3 | null;
  height?: originalHeightQueryFloat_3 | null;
  src?: originalSrcQueryString_3 | null;
}

export interface originalWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface originalHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface originalSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTypeName_3 {
  base64?: resolutionsBase64QueryString_3 | null;
  tracedSVG?: resolutionsTracedSvgQueryString_3 | null;
  aspectRatio?: resolutionsAspectRatioQueryFloat_3 | null;
  width?: resolutionsWidthQueryFloat_3 | null;
  height?: resolutionsHeightQueryFloat_3 | null;
  src?: resolutionsSrcQueryString_3 | null;
  srcSet?: resolutionsSrcSetQueryString_3 | null;
  srcWebp?: resolutionsSrcWebpQueryString_3 | null;
  srcSetWebp?: resolutionsSrcSetWebpQueryString_3 | null;
  originalName?: resolutionsOriginalNameQueryString_3 | null;
}

export interface resolutionsBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resolutionsSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTypeName_3 {
  base64?: sizesBase64QueryString_3 | null;
  tracedSVG?: sizesTracedSvgQueryString_3 | null;
  aspectRatio?: sizesAspectRatioQueryFloat_3 | null;
  src?: sizesSrcQueryString_3 | null;
  srcSet?: sizesSrcSetQueryString_3 | null;
  srcWebp?: sizesSrcWebpQueryString_3 | null;
  srcSetWebp?: sizesSrcSetWebpQueryString_3 | null;
  sizes?: sizesSizesQueryString_3 | null;
  originalImg?: sizesOriginalImgQueryString_3 | null;
  originalName?: sizesOriginalNameQueryString_3 | null;
}

export interface sizesBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface sizesSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalImgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionTypeName_3 {
  base64?: responsiveResolutionBase64QueryString_3 | null;
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_3 | null;
  width?: responsiveResolutionWidthQueryFloat_3 | null;
  height?: responsiveResolutionHeightQueryFloat_3 | null;
  src?: responsiveResolutionSrcQueryString_3 | null;
  srcSet?: responsiveResolutionSrcSetQueryString_3 | null;
  originalName?: responsiveResolutionOriginalNameQueryString_3 | null;
}

export interface responsiveResolutionBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveResolutionSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesTypeName_3 {
  base64?: responsiveSizesBase64QueryString_3 | null;
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_3 | null;
  src?: responsiveSizesSrcQueryString_3 | null;
  srcSet?: responsiveSizesSrcSetQueryString_3 | null;
  sizes?: responsiveSizesSizesQueryString_3 | null;
  originalImg?: responsiveSizesOriginalImgQueryString_3 | null;
  originalName?: responsiveSizesOriginalNameQueryString_3 | null;
}

export interface responsiveSizesBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface responsiveSizesSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesOriginalImgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface responsiveSizesOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTypeName_3 {
  src?: resizeSrcQueryString_3 | null;
  tracedSVG?: resizeTracedSvgQueryString_3 | null;
  width?: resizeWidthQueryInt_3 | null;
  height?: resizeHeightQueryInt_3 | null;
  aspectRatio?: resizeAspectRatioQueryFloat_3 | null;
  originalName?: resizeOriginalNameQueryString_3 | null;
}

export interface resizeSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeWidthQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeHeightQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface resizeOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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

export interface authorsJsonBiolongQueryString_2 {
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

export interface authorsJsonTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface authorsJsonGithubQueryString_2 {
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

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null;
  type?: markdownRemarkInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
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

export interface markdownRemarkInternalContentDigestQueryString_2 {
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
  author?: markdownRemarkFrontmatterAuthorQueryString_2 | null;
  createdDate?: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;
  updatedDate?: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null;
  draft?: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
  tags?: markdownRemarkFrontmatterTagsQueryList_2 | null;
  image?: markdownRemarkFrontmatterImageQueryString_2 | null;
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

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface markdownRemarkFrontmatterImageQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
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
  slug?: sitePageContextSlugQueryString | null;
  prevPostPath?: sitePageContextPrevPostPathQueryString | null;
  nextPostPath?: sitePageContextNextPostPathQueryString | null;
  posts?: sitePageContextPostsInputObject | null;
  post?: sitePageContextPostQueryList | null;
  tag?: sitePageContextTagQueryString | null;
}

export interface sitePageContextCourseUrlQueryString {
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

export interface sitePageContextPrevPostPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextNextPostPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsInputObject {
  pandas?: sitePageContextPostsPandasQueryList | null;
  NativeScript?: sitePageContextPostsNativeScriptQueryList | null;
  Tips_and_Tricks?: sitePageContextPostsTipsAndTricksQueryList | null;
  Tutorial?: sitePageContextPostsTutorialQueryList | null;
  Video?: sitePageContextPostsVideoQueryList | null;
  Courses?: sitePageContextPostsCoursesQueryList | null;
  Angular?: sitePageContextPostsAngularQueryList | null;
  Styling?: sitePageContextPostsStylingQueryList | null;
  Core?: sitePageContextPostsCoreQueryList | null;
  Authentication?: sitePageContextPostsAuthenticationQueryList | null;
  Authorization?: sitePageContextPostsAuthorizationQueryList | null;
  Enterprise?: sitePageContextPostsEnterpriseQueryList | null;
  UI?: sitePageContextPostsUiQueryList | null;
  Cordova?: sitePageContextPostsCordovaQueryList | null;
  Tip?: sitePageContextPostsTipQueryList | null;
  JavaScript?: sitePageContextPostsJavaScriptQueryList | null;
  TypeScript?: sitePageContextPostsTypeScriptQueryList | null;
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
  createdDate?: sitePageContextPostsPandasFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsPandasFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsPandasFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsPandasFrontmatterPathQueryString | null;
  title?: sitePageContextPostsPandasFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsPandasFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsPandasFrontmatterUpdatedDateQueryString {
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

export interface sitePageContextPostsNativeScriptQueryList {
  in?: sitePageContextPostsNativeScriptInputObject[] | null;
}

export interface sitePageContextPostsNativeScriptInputObject {
  excerpt?: sitePageContextPostsNativeScriptExcerptQueryString | null;
  html?: sitePageContextPostsNativeScriptHtmlQueryString | null;
  id?: sitePageContextPostsNativeScriptIdQueryString | null;
  timeToRead?: sitePageContextPostsNativeScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsNativeScriptFrontmatterInputObject | null;
}

export interface sitePageContextPostsNativeScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterInputObject {
  createdDate?: sitePageContextPostsNativeScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsNativeScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsNativeScriptFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsNativeScriptFrontmatterPathQueryString | null;
  title?: sitePageContextPostsNativeScriptFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsNativeScriptFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksQueryList {
  in?: sitePageContextPostsTipsAndTricksInputObject[] | null;
}

export interface sitePageContextPostsTipsAndTricksInputObject {
  excerpt?: sitePageContextPostsTipsAndTricksExcerptQueryString | null;
  html?: sitePageContextPostsTipsAndTricksHtmlQueryString | null;
  id?: sitePageContextPostsTipsAndTricksIdQueryString | null;
  timeToRead?: sitePageContextPostsTipsAndTricksTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsTipsAndTricksFrontmatterInputObject | null;
}

export interface sitePageContextPostsTipsAndTricksExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterInputObject {
  createdDate?: sitePageContextPostsTipsAndTricksFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsTipsAndTricksFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsTipsAndTricksFrontmatterPathQueryString | null;
  title?: sitePageContextPostsTipsAndTricksFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipsAndTricksFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialQueryList {
  in?: sitePageContextPostsTutorialInputObject[] | null;
}

export interface sitePageContextPostsTutorialInputObject {
  excerpt?: sitePageContextPostsTutorialExcerptQueryString | null;
  html?: sitePageContextPostsTutorialHtmlQueryString | null;
  id?: sitePageContextPostsTutorialIdQueryString | null;
  timeToRead?: sitePageContextPostsTutorialTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsTutorialFrontmatterInputObject | null;
}

export interface sitePageContextPostsTutorialExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsTutorialFrontmatterInputObject {
  createdDate?: sitePageContextPostsTutorialFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsTutorialFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsTutorialFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsTutorialFrontmatterPathQueryString | null;
  title?: sitePageContextPostsTutorialFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsTutorialFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsTutorialFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTutorialFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoQueryList {
  in?: sitePageContextPostsVideoInputObject[] | null;
}

export interface sitePageContextPostsVideoInputObject {
  excerpt?: sitePageContextPostsVideoExcerptQueryString | null;
  html?: sitePageContextPostsVideoHtmlQueryString | null;
  id?: sitePageContextPostsVideoIdQueryString | null;
  timeToRead?: sitePageContextPostsVideoTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsVideoFrontmatterInputObject | null;
}

export interface sitePageContextPostsVideoExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsVideoFrontmatterInputObject {
  createdDate?: sitePageContextPostsVideoFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsVideoFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsVideoFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsVideoFrontmatterPathQueryString | null;
  title?: sitePageContextPostsVideoFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsVideoFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsVideoFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsVideoFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesQueryList {
  in?: sitePageContextPostsCoursesInputObject[] | null;
}

export interface sitePageContextPostsCoursesInputObject {
  excerpt?: sitePageContextPostsCoursesExcerptQueryString | null;
  html?: sitePageContextPostsCoursesHtmlQueryString | null;
  id?: sitePageContextPostsCoursesIdQueryString | null;
  timeToRead?: sitePageContextPostsCoursesTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsCoursesFrontmatterInputObject | null;
}

export interface sitePageContextPostsCoursesExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsCoursesFrontmatterInputObject {
  createdDate?: sitePageContextPostsCoursesFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsCoursesFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsCoursesFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsCoursesFrontmatterPathQueryString | null;
  title?: sitePageContextPostsCoursesFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsCoursesFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsCoursesFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoursesFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularQueryList {
  in?: sitePageContextPostsAngularInputObject[] | null;
}

export interface sitePageContextPostsAngularInputObject {
  excerpt?: sitePageContextPostsAngularExcerptQueryString | null;
  html?: sitePageContextPostsAngularHtmlQueryString | null;
  id?: sitePageContextPostsAngularIdQueryString | null;
  timeToRead?: sitePageContextPostsAngularTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsAngularFrontmatterInputObject | null;
}

export interface sitePageContextPostsAngularExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsAngularFrontmatterInputObject {
  createdDate?: sitePageContextPostsAngularFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsAngularFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsAngularFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsAngularFrontmatterPathQueryString | null;
  title?: sitePageContextPostsAngularFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsAngularFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsAngularFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAngularFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingQueryList {
  in?: sitePageContextPostsStylingInputObject[] | null;
}

export interface sitePageContextPostsStylingInputObject {
  excerpt?: sitePageContextPostsStylingExcerptQueryString | null;
  html?: sitePageContextPostsStylingHtmlQueryString | null;
  id?: sitePageContextPostsStylingIdQueryString | null;
  timeToRead?: sitePageContextPostsStylingTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsStylingFrontmatterInputObject | null;
}

export interface sitePageContextPostsStylingExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsStylingFrontmatterInputObject {
  createdDate?: sitePageContextPostsStylingFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsStylingFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsStylingFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsStylingFrontmatterPathQueryString | null;
  title?: sitePageContextPostsStylingFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsStylingFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsStylingFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsStylingFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreQueryList {
  in?: sitePageContextPostsCoreInputObject[] | null;
}

export interface sitePageContextPostsCoreInputObject {
  excerpt?: sitePageContextPostsCoreExcerptQueryString | null;
  html?: sitePageContextPostsCoreHtmlQueryString | null;
  id?: sitePageContextPostsCoreIdQueryString | null;
  timeToRead?: sitePageContextPostsCoreTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsCoreFrontmatterInputObject | null;
}

export interface sitePageContextPostsCoreExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsCoreFrontmatterInputObject {
  createdDate?: sitePageContextPostsCoreFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsCoreFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsCoreFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsCoreFrontmatterPathQueryString | null;
  title?: sitePageContextPostsCoreFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsCoreFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsCoreFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCoreFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationQueryList {
  in?: sitePageContextPostsAuthenticationInputObject[] | null;
}

export interface sitePageContextPostsAuthenticationInputObject {
  excerpt?: sitePageContextPostsAuthenticationExcerptQueryString | null;
  html?: sitePageContextPostsAuthenticationHtmlQueryString | null;
  id?: sitePageContextPostsAuthenticationIdQueryString | null;
  timeToRead?: sitePageContextPostsAuthenticationTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsAuthenticationFrontmatterInputObject | null;
}

export interface sitePageContextPostsAuthenticationExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterInputObject {
  createdDate?: sitePageContextPostsAuthenticationFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsAuthenticationFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsAuthenticationFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsAuthenticationFrontmatterPathQueryString | null;
  title?: sitePageContextPostsAuthenticationFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthenticationFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationQueryList {
  in?: sitePageContextPostsAuthorizationInputObject[] | null;
}

export interface sitePageContextPostsAuthorizationInputObject {
  excerpt?: sitePageContextPostsAuthorizationExcerptQueryString | null;
  html?: sitePageContextPostsAuthorizationHtmlQueryString | null;
  id?: sitePageContextPostsAuthorizationIdQueryString | null;
  timeToRead?: sitePageContextPostsAuthorizationTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsAuthorizationFrontmatterInputObject | null;
}

export interface sitePageContextPostsAuthorizationExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterInputObject {
  createdDate?: sitePageContextPostsAuthorizationFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsAuthorizationFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsAuthorizationFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsAuthorizationFrontmatterPathQueryString | null;
  title?: sitePageContextPostsAuthorizationFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsAuthorizationFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseQueryList {
  in?: sitePageContextPostsEnterpriseInputObject[] | null;
}

export interface sitePageContextPostsEnterpriseInputObject {
  excerpt?: sitePageContextPostsEnterpriseExcerptQueryString | null;
  html?: sitePageContextPostsEnterpriseHtmlQueryString | null;
  id?: sitePageContextPostsEnterpriseIdQueryString | null;
  timeToRead?: sitePageContextPostsEnterpriseTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsEnterpriseFrontmatterInputObject | null;
}

export interface sitePageContextPostsEnterpriseExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterInputObject {
  createdDate?: sitePageContextPostsEnterpriseFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsEnterpriseFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsEnterpriseFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsEnterpriseFrontmatterPathQueryString | null;
  title?: sitePageContextPostsEnterpriseFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsEnterpriseFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiQueryList {
  in?: sitePageContextPostsUiInputObject[] | null;
}

export interface sitePageContextPostsUiInputObject {
  excerpt?: sitePageContextPostsUiExcerptQueryString | null;
  html?: sitePageContextPostsUiHtmlQueryString | null;
  id?: sitePageContextPostsUiIdQueryString | null;
  timeToRead?: sitePageContextPostsUiTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsUiFrontmatterInputObject | null;
}

export interface sitePageContextPostsUiExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsUiFrontmatterInputObject {
  createdDate?: sitePageContextPostsUiFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsUiFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsUiFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsUiFrontmatterPathQueryString | null;
  title?: sitePageContextPostsUiFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsUiFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsUiFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsUiFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaQueryList {
  in?: sitePageContextPostsCordovaInputObject[] | null;
}

export interface sitePageContextPostsCordovaInputObject {
  excerpt?: sitePageContextPostsCordovaExcerptQueryString | null;
  html?: sitePageContextPostsCordovaHtmlQueryString | null;
  id?: sitePageContextPostsCordovaIdQueryString | null;
  timeToRead?: sitePageContextPostsCordovaTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsCordovaFrontmatterInputObject | null;
}

export interface sitePageContextPostsCordovaExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsCordovaFrontmatterInputObject {
  createdDate?: sitePageContextPostsCordovaFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsCordovaFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsCordovaFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsCordovaFrontmatterPathQueryString | null;
  title?: sitePageContextPostsCordovaFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsCordovaFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsCordovaFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsCordovaFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipQueryList {
  in?: sitePageContextPostsTipInputObject[] | null;
}

export interface sitePageContextPostsTipInputObject {
  excerpt?: sitePageContextPostsTipExcerptQueryString | null;
  html?: sitePageContextPostsTipHtmlQueryString | null;
  id?: sitePageContextPostsTipIdQueryString | null;
  timeToRead?: sitePageContextPostsTipTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsTipFrontmatterInputObject | null;
}

export interface sitePageContextPostsTipExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsTipFrontmatterInputObject {
  createdDate?: sitePageContextPostsTipFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsTipFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsTipFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsTipFrontmatterPathQueryString | null;
  title?: sitePageContextPostsTipFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsTipFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsTipFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTipFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptQueryList {
  in?: sitePageContextPostsJavaScriptInputObject[] | null;
}

export interface sitePageContextPostsJavaScriptInputObject {
  excerpt?: sitePageContextPostsJavaScriptExcerptQueryString | null;
  html?: sitePageContextPostsJavaScriptHtmlQueryString | null;
  id?: sitePageContextPostsJavaScriptIdQueryString | null;
  timeToRead?: sitePageContextPostsJavaScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsJavaScriptFrontmatterInputObject | null;
}

export interface sitePageContextPostsJavaScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterInputObject {
  createdDate?: sitePageContextPostsJavaScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsJavaScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsJavaScriptFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsJavaScriptFrontmatterPathQueryString | null;
  title?: sitePageContextPostsJavaScriptFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsJavaScriptFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptQueryList {
  in?: sitePageContextPostsTypeScriptInputObject[] | null;
}

export interface sitePageContextPostsTypeScriptInputObject {
  excerpt?: sitePageContextPostsTypeScriptExcerptQueryString | null;
  html?: sitePageContextPostsTypeScriptHtmlQueryString | null;
  id?: sitePageContextPostsTypeScriptIdQueryString | null;
  timeToRead?: sitePageContextPostsTypeScriptTimeToReadQueryInteger | null;
  frontmatter?: sitePageContextPostsTypeScriptFrontmatterInputObject | null;
}

export interface sitePageContextPostsTypeScriptExcerptQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptHtmlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptTimeToReadQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterInputObject {
  createdDate?: sitePageContextPostsTypeScriptFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostsTypeScriptFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostsTypeScriptFrontmatterTagsQueryList | null;
  path?: sitePageContextPostsTypeScriptFrontmatterPathQueryString | null;
  title?: sitePageContextPostsTypeScriptFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterUpdatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterTagsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostsTypeScriptFrontmatterTitleQueryString {
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
  createdDate?: sitePageContextPostFrontmatterCreatedDateQueryString | null;
  updatedDate?: sitePageContextPostFrontmatterUpdatedDateQueryString | null;
  tags?: sitePageContextPostFrontmatterTagsQueryList | null;
  path?: sitePageContextPostFrontmatterPathQueryString | null;
  title?: sitePageContextPostFrontmatterTitleQueryString | null;
}

export interface sitePageContextPostFrontmatterCreatedDateQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPostFrontmatterUpdatedDateQueryString {
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

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null;
  id?: sitePagePluginCreatorIdQueryString | null;
  name?: sitePagePluginCreatorNameQueryString | null;
  version?: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
  browserAPIs?: sitePagePluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
  parent?: sitePagePluginCreatorParentQueryString | null;
  internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
  siteUrl?: sitePagePluginCreatorPluginOptionsSiteUrlQueryString | null;
  output?: sitePagePluginCreatorPluginOptionsOutputQueryString | null;
  query?: sitePagePluginCreatorPluginOptionsQueryQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  maxWidth?: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePagePluginCreatorPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
  showCaptions?: sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePagePluginCreatorPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
  in?: sitePagePluginCreatorPluginOptionsPluginsInputObject[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  maxWidth?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  showCaptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsSiteUrlQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsOutputQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsQueryQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDevDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: sitePagePluginCreatorInternalTypeQueryString | null;
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
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
  description?: sitePageInternalDescriptionQueryString | null;
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

export interface sitePageInternalDescriptionQueryString {
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
export interface AllTestimonialsJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: testimonialsJsonConnectionSort | null;
  filter?: filterTestimonialsJson | null;
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
export interface AllImageSharpRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: imageSharpConnectionSort | null;
  filter?: filterImageSharp | null;
}
export interface AllAuthorsJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: authorsJsonConnectionSort | null;
  filter?: filterAuthorsJson | null;
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: markdownRemarkConnectionSort | null;
  filter?: filterMarkdownRemark | null;
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePageConnectionSort | null;
  filter?: filterSitePage | null;
}
export interface TestimonialsJsonRootQueryTypeArgs {
  id?: testimonialsJsonIdQueryString_2 | null;
  name?: testimonialsJsonNameQueryString_2 | null;
  img?: testimonialsJsonImgQueryString_2 | null;
  twitter?: testimonialsJsonTwitterQueryString_2 | null;
  order?: testimonialsJsonOrderQueryInteger_2 | null;
  quoteHtml?: testimonialsJsonQuoteHtmlQueryString_2 | null;
  titleHtml?: testimonialsJsonTitleHtmlQueryString_2 | null;
  internal?: testimonialsJsonInternalInputObject_2 | null;
}
export interface CoursesJsonRootQueryTypeArgs {
  id?: coursesJsonIdQueryString_2 | null;
  title?: coursesJsonTitleQueryString_2 | null;
  subtitle?: coursesJsonSubtitleQueryString_2 | null;
  description?: coursesJsonDescriptionQueryString_2 | null;
  notes?: coursesJsonNotesQueryList_2 | null;
  url?: coursesJsonUrlQueryString_2 | null;
  flavors?: coursesJsonFlavorsQueryList_2 | null;
  level?: coursesJsonLevelQueryInteger_2 | null;
  order?: coursesJsonOrderQueryInteger_2 | null;
  label?: coursesJsonLabelQueryString_2 | null;
  launchdate?: coursesJsonLaunchdateQueryString_2 | null;
  authors?: coursesJsonAuthorsQueryList_2 | null;
  products?: coursesJsonProductsQueryList_2 | null;
  publishedChapters?: coursesJsonPublishedChaptersQueryList_2 | null;
  chapters?: coursesJsonChaptersQueryList_2 | null;
  internal?: coursesJsonInternalInputObject_2 | null;
  publishingSchedule?: coursesJsonPublishingScheduleQueryList_2 | null;
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
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null;
  id?: sitePluginIdQueryString_2 | null;
  name?: sitePluginNameQueryString_2 | null;
  version?: sitePluginVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
  browserAPIs?: sitePluginBrowserApIsQueryList_2 | null;
  ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
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
  atimeMs?: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
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
  atimeMs?: fileAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
  atime?: fileAtimeQueryString_2 | null;
  mtime?: fileMtimeQueryString_2 | null;
  ctime?: fileCtimeQueryString_2 | null;
  birthtime?: fileBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_3 | null;
}
export interface ImageSharpRootQueryTypeArgs {
  id?: imageSharpIdQueryString_2 | null;
  internal?: imageSharpInternalInputObject_2 | null;
  original?: originalTypeName_3 | null;
  resolutions?: resolutionsTypeName_3 | null;
  sizes?: sizesTypeName_3 | null;
  responsiveResolution?: responsiveResolutionTypeName_3 | null;
  responsiveSizes?: responsiveSizesTypeName_3 | null;
  resize?: resizeTypeName_3 | null;
}
export interface AuthorsJsonRootQueryTypeArgs {
  id?: authorsJsonIdQueryString_2 | null;
  name?: authorsJsonNameQueryString_2 | null;
  picture?: authorsJsonPictureQueryString_2 | null;
  bio?: authorsJsonBioQueryString_2 | null;
  biolong?: authorsJsonBiolongQueryString_2 | null;
  title?: authorsJsonTitleQueryString_2 | null;
  twitter?: authorsJsonTwitterQueryString_2 | null;
  github?: authorsJsonGithubQueryString_2 | null;
  types?: authorsJsonTypesQueryList_2 | null;
  internal?: authorsJsonInternalInputObject_2 | null;
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
export interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null;
  jsonName?: sitePageJsonNameQueryString | null;
  internalComponentName?: sitePageInternalComponentNameQueryString | null;
  path?: sitePagePathQueryString_2 | null;
  component?: sitePageComponentQueryString | null;
  componentChunkName?: sitePageComponentChunkNameQueryString | null;
  context?: sitePageContextInputObject | null;
  pluginCreator?: sitePagePluginCreatorInputObject | null;
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageComponentPathQueryString | null;
  id?: sitePageIdQueryString_2 | null;
  internal?: sitePageInternalInputObject_2 | null;
}
export interface DistinctTestimonialsJsonConnectionArgs {
  field?: testimonialsJsonDistinctEnum | null;
}
export interface GroupTestimonialsJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: testimonialsJsonGroupEnum | null;
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
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctBundlesJsonConnectionArgs {
  field?: bundlesJsonDistinctEnum | null;
}
export interface GroupBundlesJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: bundlesJsonGroupEnum | null;
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
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
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
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null;
}
export interface CreatedDateFrontmatter_2Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_2Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ResolutionsImageSharpArgs {
  width?: number | null;
  height?: number | null;
  jpegProgressive?: boolean | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface SizesImageSharpArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  grayscale?: boolean | null;
  jpegProgressive?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface ResponsiveResolutionImageSharpArgs {
  width?: number | null;
  height?: number | null;
  jpegProgressive?: boolean | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface ResponsiveSizesImageSharpArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  grayscale?: boolean | null;
  jpegProgressive?: boolean | null;
  duotone?: DuotoneGradient | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface ResizeImageSharpArgs {
  width?: number | null;
  height?: number | null;
  quality?: number | null;
  jpegProgressive?: boolean | null;
  pngCompressionLevel?: number | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  base64?: boolean | null;
  traceSVG?: Potrace | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface DistinctImageSharpConnectionArgs {
  field?: imageSharpDistinctEnum | null;
}
export interface GroupImageSharpConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: imageSharpGroupEnum | null;
}
export interface DistinctAuthorsJsonConnectionArgs {
  field?: authorsJsonDistinctEnum | null;
}
export interface GroupAuthorsJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: authorsJsonGroupEnum | null;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: markdownRemarkGroupEnum | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePageGroupEnum | null;
}
export interface CreatedDateFrontmatter_3Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_3Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_4Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_4Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_5Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_5Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_6Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_6Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_7Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_7Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_8Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_8Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_9Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_9Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_10Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_10Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_11Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_11Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_12Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_12Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_13Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_13Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_14Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_14Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_15Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_15Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_16Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_16Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_17Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_17Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_18Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_18Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_19Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_19Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CreatedDateFrontmatter_20Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface UpdatedDateFrontmatter_20Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}

export enum TestimonialsJsonConnectionSortByFieldsEnum {
  id = 'id',
  name = 'name',
  img = 'img',
  twitter = 'twitter',
  order = 'order',
  quoteHtml = 'quoteHtml',
  titleHtml = 'titleHtml',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum testimonialsJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum testimonialsJsonDistinctEnum {
  id = 'id',
  name = 'name',
  img = 'img',
  twitter = 'twitter',
  order = 'order',
  quoteHtml = 'quoteHtml',
  titleHtml = 'titleHtml',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum testimonialsJsonGroupEnum {
  id = 'id',
  name = 'name',
  img = 'img',
  twitter = 'twitter',
  order = 'order',
  quoteHtml = 'quoteHtml',
  titleHtml = 'titleHtml',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum CoursesJsonConnectionSortByFieldsEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  notes = 'notes',
  url = 'url',
  flavors = 'flavors',
  level = 'level',
  order = 'order',
  label = 'label',
  launchdate = 'launchdate',
  authors = 'authors',
  products = 'products',
  publishedChapters = 'publishedChapters',
  chapters = 'chapters',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  publishingSchedule = 'publishingSchedule'
}

export enum coursesJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum coursesJsonDistinctEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  notes = 'notes',
  url = 'url',
  flavors = 'flavors',
  level = 'level',
  order = 'order',
  label = 'label',
  launchdate = 'launchdate',
  authors = 'authors',
  products = 'products',
  publishedChapters = 'publishedChapters',
  chapters = 'chapters',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  publishingSchedule = 'publishingSchedule'
}

export enum coursesJsonGroupEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  notes = 'notes',
  url = 'url',
  flavors = 'flavors',
  level = 'level',
  order = 'order',
  label = 'label',
  launchdate = 'launchdate',
  authors = 'authors',
  products = 'products',
  publishedChapters = 'publishedChapters',
  chapters = 'chapters',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  publishingSchedule = 'publishingSchedule'
}

export enum BundlesJsonConnectionSortByFieldsEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  url = 'url',
  promototal = 'promototal',
  promoremaining = 'promoremaining',
  bundleLevel = 'bundleLevel',
  products = 'products',
  courseIds = 'courseIds',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum bundlesJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum bundlesJsonDistinctEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  url = 'url',
  promototal = 'promototal',
  promoremaining = 'promoremaining',
  bundleLevel = 'bundleLevel',
  products = 'products',
  courseIds = 'courseIds',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum bundlesJsonGroupEnum {
  id = 'id',
  title = 'title',
  subtitle = 'subtitle',
  description = 'description',
  url = 'url',
  promototal = 'promototal',
  promoremaining = 'promoremaining',
  bundleLevel = 'bundleLevel',
  products = 'products',
  courseIds = 'courseIds',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___optionalDependecies = 'packageJson___optionalDependecies',
  packageJson___bundledDependecies = 'packageJson___bundledDependecies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  children = 'children',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum sitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum sitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum sitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export enum directoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum directoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export enum directoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL'
}

export enum fileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

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

export enum fileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export enum fileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
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
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export enum ImageSharpConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
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
  responsiveResolution___base64 = 'responsiveResolution___base64',
  responsiveResolution___aspectRatio = 'responsiveResolution___aspectRatio',
  responsiveResolution___width = 'responsiveResolution___width',
  responsiveResolution___height = 'responsiveResolution___height',
  responsiveResolution___src = 'responsiveResolution___src',
  responsiveResolution___srcSet = 'responsiveResolution___srcSet',
  responsiveResolution___originalName = 'responsiveResolution___originalName',
  responsiveSizes___base64 = 'responsiveSizes___base64',
  responsiveSizes___aspectRatio = 'responsiveSizes___aspectRatio',
  responsiveSizes___src = 'responsiveSizes___src',
  responsiveSizes___srcSet = 'responsiveSizes___srcSet',
  responsiveSizes___sizes = 'responsiveSizes___sizes',
  responsiveSizes___originalImg = 'responsiveSizes___originalImg',
  responsiveSizes___originalName = 'responsiveSizes___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName'
}

export enum imageSharpConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum imageSharpDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum imageSharpGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum AuthorsJsonConnectionSortByFieldsEnum {
  id = 'id',
  name = 'name',
  picture = 'picture',
  bio = 'bio',
  biolong = 'biolong',
  title = 'title',
  twitter = 'twitter',
  github = 'github',
  types = 'types',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum authorsJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum authorsJsonDistinctEnum {
  id = 'id',
  name = 'name',
  picture = 'picture',
  bio = 'bio',
  biolong = 'biolong',
  title = 'title',
  twitter = 'twitter',
  github = 'github',
  types = 'types',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum authorsJsonGroupEnum {
  id = 'id',
  name = 'name',
  picture = 'picture',
  bio = 'bio',
  biolong = 'biolong',
  title = 'title',
  twitter = 'twitter',
  github = 'github',
  types = 'types',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner'
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  frontmatter___title = 'frontmatter___title',
  frontmatter___path = 'frontmatter___path',
  frontmatter___author = 'frontmatter___author',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___updatedDate = 'frontmatter___updatedDate',
  frontmatter___draft = 'frontmatter___draft',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___image = 'frontmatter___image',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___parent = 'frontmatter___parent',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath',
  html = 'html',
  headings = 'headings',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words'
}

export enum markdownRemarkConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum markdownRemarkDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  frontmatter___title = 'frontmatter___title',
  frontmatter___path = 'frontmatter___path',
  frontmatter___author = 'frontmatter___author',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___updatedDate = 'frontmatter___updatedDate',
  frontmatter___draft = 'frontmatter___draft',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___image = 'frontmatter___image',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___parent = 'frontmatter___parent',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath'
}

export enum markdownRemarkGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  frontmatter___title = 'frontmatter___title',
  frontmatter___path = 'frontmatter___path',
  frontmatter___author = 'frontmatter___author',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___updatedDate = 'frontmatter___updatedDate',
  frontmatter___draft = 'frontmatter___draft',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___image = 'frontmatter___image',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___parent = 'frontmatter___parent',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath'
}

export enum SitePageConnectionSortByFieldsEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  matchPath = 'matchPath',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___courseUrl = 'context___courseUrl',
  context___slug = 'context___slug',
  context___prevPostPath = 'context___prevPostPath',
  context___nextPostPath = 'context___nextPostPath',
  context___posts___pandas = 'context___posts___pandas',
  context___posts___NativeScript = 'context___posts___NativeScript',
  context___posts___Tips_and_Tricks = 'context___posts___Tips_and_Tricks',
  context___posts___Tutorial = 'context___posts___Tutorial',
  context___posts___Video = 'context___posts___Video',
  context___posts___Courses = 'context___posts___Courses',
  context___posts___Angular = 'context___posts___Angular',
  context___posts___Styling = 'context___posts___Styling',
  context___posts___Core = 'context___posts___Core',
  context___posts___Authentication = 'context___posts___Authentication',
  context___posts___Authorization = 'context___posts___Authorization',
  context___posts___Enterprise = 'context___posts___Enterprise',
  context___posts___UI = 'context___posts___UI',
  context___posts___Cordova = 'context___posts___Cordova',
  context___posts___Tip = 'context___posts___Tip',
  context___posts___JavaScript = 'context___posts___JavaScript',
  context___posts___TypeScript = 'context___posts___TypeScript',
  context___post = 'context___post',
  context___tag = 'context___tag',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  children = 'children',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner'
}

export enum sitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum sitePageDistinctEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___courseUrl = 'context___courseUrl',
  context___slug = 'context___slug',
  context___prevPostPath = 'context___prevPostPath',
  context___nextPostPath = 'context___nextPostPath',
  context___posts___pandas = 'context___posts___pandas',
  context___posts___NativeScript = 'context___posts___NativeScript',
  context___posts___Tips_and_Tricks = 'context___posts___Tips_and_Tricks',
  context___posts___Tutorial = 'context___posts___Tutorial',
  context___posts___Video = 'context___posts___Video',
  context___posts___Courses = 'context___posts___Courses',
  context___posts___Angular = 'context___posts___Angular',
  context___posts___Styling = 'context___posts___Styling',
  context___posts___Core = 'context___posts___Core',
  context___posts___Authentication = 'context___posts___Authentication',
  context___posts___Authorization = 'context___posts___Authorization',
  context___posts___Enterprise = 'context___posts___Enterprise',
  context___posts___UI = 'context___posts___UI',
  context___posts___Cordova = 'context___posts___Cordova',
  context___posts___Tip = 'context___posts___Tip',
  context___posts___JavaScript = 'context___posts___JavaScript',
  context___posts___TypeScript = 'context___posts___TypeScript',
  context___post = 'context___post',
  context___tag = 'context___tag',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner'
}

export enum sitePageGroupEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___courseUrl = 'context___courseUrl',
  context___slug = 'context___slug',
  context___prevPostPath = 'context___prevPostPath',
  context___nextPostPath = 'context___nextPostPath',
  context___posts___pandas = 'context___posts___pandas',
  context___posts___NativeScript = 'context___posts___NativeScript',
  context___posts___Tips_and_Tricks = 'context___posts___Tips_and_Tricks',
  context___posts___Tutorial = 'context___posts___Tutorial',
  context___posts___Video = 'context___posts___Video',
  context___posts___Courses = 'context___posts___Courses',
  context___posts___Angular = 'context___posts___Angular',
  context___posts___Styling = 'context___posts___Styling',
  context___posts___Core = 'context___posts___Core',
  context___posts___Authentication = 'context___posts___Authentication',
  context___posts___Authorization = 'context___posts___Authorization',
  context___posts___Enterprise = 'context___posts___Enterprise',
  context___posts___UI = 'context___posts___UI',
  context___posts___Cordova = 'context___posts___Cordova',
  context___posts___Tip = 'context___posts___Tip',
  context___posts___JavaScript = 'context___posts___JavaScript',
  context___posts___TypeScript = 'context___posts___TypeScript',
  context___post = 'context___post',
  context___tag = 'context___tag',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner'
}
