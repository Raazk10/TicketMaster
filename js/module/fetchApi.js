const API_KEY = "aLGf7LIEfrlaEtpVXyO5Oj9InyDNM8gN";
export default async function fetchApi(query) {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${API_KEY}&locale=en-us&keyword=${query}`
  );
  const data = await response.json();
  return data;
}
