export const getResults = async(hashTag = 'Covid') => {
  const response = await fetch(`https://nsd-twitter-api.herokuapp.com/api/search/tweets/${hashTag}`);
  const twitts = response.json();

  return twitts;

}