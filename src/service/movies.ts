import { TMDB_API } from "@/app/api/movies/movies";

export const getMovieDetail = (movie_id: string) => {
  const url = `${TMDB_API}/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&`;

  return url;
};

export const getMovieCredit = (movie_id: string) => {
  const url = `${TMDB_API}/movie/${movie_id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&`;

  return url;
};

export const getRecommendationssMovie = (movie_id: string) => {
  const url = `${TMDB_API}/movie/${movie_id}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&`;

  return url;
};

export const getMovieSearchResult = (title: string) => {
  const url = `${TMDB_API}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&query=${title}`;

  return url;
};
