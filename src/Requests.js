const API_KEY = "76deadecb4e996be0639c6b2a624a68c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchComedy: `/discover/tv?api_key=${API_KEY}&with_networks=210`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};
export default requests;
