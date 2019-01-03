export function getAuthorImgSrc(authorImageName: string): string {
  return `/img/authors/${authorImageName}`;
}

export function isUrlExternal(url: string): boolean {
  const internal = /^\/(?!\/)/.test(url);
  return !internal;
}

/*
export function isUrlExternal(url: string) {
  const windowGlobal = typeof window !== 'undefined' && window;
  const locationGlobal =
    typeof windowGlobal.location !== 'undefined' && windowGlobal.location;
  const documentGlobal = typeof document !== 'undefined' && document;
  const createElementGlobal =
    typeof documentGlobal.createElement !== 'undefined' &&
    documentGlobal.createElement;

  const host = locationGlobal.hostname;

  const linkHost = (function(url) {
    if (/^https?:\/\//.test(url)) {
      // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      const parser = createElementGlobal('a');
      parser.href = url;

      return parser.hostname;
    } else {
      // Relative URL.
      return locationGlobal.hostname;
    }
  })(url);

  return host !== linkHost;
}
*/
