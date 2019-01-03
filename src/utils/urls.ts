export function getAuthorImgSrc(authorImageName: string): string {
  return `/img/authors/${authorImageName}`;
}

export function isUrlExternal(url: string) {
  const windowGlobal = typeof window !== 'undefined' && window;
  const locationGlobal =
    typeof windowGlobal.location !== 'undefined' && windowGlobal.location;

  const host = locationGlobal.hostname;

  const linkHost = (function(url) {
    if (/^https?:\/\//.test(url)) {
      // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      const parser = document.createElement('a');
      parser.href = url;

      return parser.hostname;
    } else {
      // Relative URL.
      return locationGlobal.hostname;
    }
  })(url);

  return host !== linkHost;
}
