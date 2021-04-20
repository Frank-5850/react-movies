const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = "http://www.omdbapi.com/";

export const getMoviesByName = async (search) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=${search}`;
  try {
    const results = await fetch(url);
    const data = await results.json();
    return data.Search;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByID = async (movieId) => {
  const url = `${baseUrl}?apikey=${apiKey}&i=tt1285016 `;
  try {
    const results = await fetch(url);
    const movie = await results.json();
    console.log("movie", movie);
    return movie;
  } catch (error) {
    console.log(error);
  }
};
