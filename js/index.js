const countriesApi = 'https://restcountries.eu/rest/v2/all'
fetch(countriesApi)
.then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))