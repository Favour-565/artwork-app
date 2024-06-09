export function generateImageURL(identifier) {
  return identifier
    ? `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`
    : null;
}
