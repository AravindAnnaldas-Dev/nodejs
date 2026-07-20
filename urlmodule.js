import url from "url";

const urlString =
  "https://www.google.com/search?q=hello+world+program+in+javascript";

const urlObject = new URL(urlString);

console.log(urlObject);

console.log(url.format(urlObject));
