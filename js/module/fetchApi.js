const apiKey = "aLGf7LIEfrlaEtpVXyO5Oj9InyDNM8gN";
const baseurl = `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${apiKey}`;

export default async function fetchApi(query) {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(`${baseurl}&query=${query}`);
  const data = await response.json();

  return data;
}
