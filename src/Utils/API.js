const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = "http://www.omdbapi.com/";

const getMoviesByName = async (search) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=batman`;
  try {
    const results = await fetch(url);
    const data = await results.json();
    console.log("data", data);
    return data.Search;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesByID = async (movieId) => {
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

getMoviesByName();
getMoviesByID();

export default { getMoviesByName, getMoviesByID };
