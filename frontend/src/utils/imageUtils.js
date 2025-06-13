export const getFallbackImage = index => {
  const fallbacks = [
    "/fallbacks/nature.jpg",
    "/fallbacks/food.jpg",
    "/fallbacks/travel.jpg",
    "/fallbacks/art.jpg",
    "/fallbacks/architecture.jpg"
  ];
  return fallbacks[index % fallbacks.length];
};

export const isValidImageUrl = url => {
  if (!url) return false;

  const invalidDomains = ["example.com", "example-domain", "placeholder.com"];

  return !invalidDomains.some(domain => url.includes(domain));
};
