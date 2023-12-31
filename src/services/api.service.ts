const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;
const api_key = process.env.NEXT_PUBLIC_API_KEY as string;
export const API_REQUEST = {
  trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
  top_rated: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
  tv_top_rated: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US`,
  popular: `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=5`,
  documentary: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99&page=1`,
  comedy: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35&page=2`,
  family: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10751&page=3`,
  history: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=36&page=4`,
  products: `${PUBLIC_DOMAIN}/api/products`,
  subscription: `${PUBLIC_DOMAIN}/api/subscription`,
};
