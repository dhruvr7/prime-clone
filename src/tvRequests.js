const API_KEY = "c59b5d146616d50e9b580d49a7193c10";

const tvrequests = [
  {
    title: "Discover TV Shows",
    url: `/discover/tv?api_key=${API_KEY}`,
    media: "tv",
  },
  {
    title: "Comedy TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    media: "tv",
  },
  {
    title: "Adventure TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=12`,
    media: "tv",
  },
  {
    title: "Popular in your Region TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&region=IN`,
    media: "tv",
  },
];
export default tvrequests;
