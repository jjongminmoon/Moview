import { TMDB_API } from "@/api/movies";

export const getMovieDetail = (movie_id: string) => {
  const url = `${TMDB_API}/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&`;

  return url;
};

export const getSimilarMovie = (movie_id: string) => {
  const url = `${TMDB_API}/movie/${movie_id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&`;

  return url;
};

export const getSearchResult = (title: string) => {
  const url = `${TMDB_API}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&query=${title}`;

  return url;
};
