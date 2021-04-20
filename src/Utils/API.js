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
  return [];
};

export const getMoviesByID = async (movieID) => {
  const url = `${baseUrl}?apikey=${apiKey}&i=${movieID} `;
  try {
    const results = await fetch(url);
    const movie = await results.json();
    return movie;
  } catch (error) {
    console.log(error);
  }
  return null;
};
