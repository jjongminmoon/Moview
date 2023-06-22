export const TMDB_API = "https://api.themoviedb.org/3";
export const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDgwMDRjZDRkOTM0NjYxMDhiMmY1NzY0NzZkYmM4YiIsInN1YiI6IjYzZDc0NGFkNjA5NzUwMDA5ZGExMTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WeAMa62NaC7Al5JK27FqZJiph758tb53tSMmaJQ4XnQ"
  }
};

export const popularUrl = `${TMDB_API}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=1`;
export const upcomingUrl = `${TMDB_API}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=1`;
