async function getCountryName(code) {
  let page = 1;
  let total_pages = 1;
  const countries = [];

  while (page <= total_pages) {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?page=${page}`
    );
    const json = await response.json();

    total_pages = json.total_pages;
    countries.push(...json.data);
    page++;
  }

  const country = countries.find((c) => c.alpha2Code === code);

  return country ? country.name : null;
}
