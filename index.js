async function getInfo (link) {
  const response = await fetch(`${link}`)
  const data = await response.json()
  return data
}

//I/1. Request all the pokemons with fetch from the API.
const allPokemon = getInfo('https://majazocom.github.io/Data/pokemons.json')
  .then(data => {
    data.map(function (pokemon) {
      //2. Render the objects one and one in the console.
      console.log('POKEMON ', pokemon)

      //3. Render the name of the objects in the DOM instead of the console to make it visible for the user.
      let li = document.createElement('li')
      li.innerText = pokemon.name
      document.getElementById('pokemonUl').appendChild(li)
    })
  })
  .catch(err => console.log(err))

//II/1. Request all the dogs with fetch from the API.
const getDogs = getInfo('https://majazocom.github.io/Data/dogs.json')
  //2. Render the names of the dogs one and one in the console.
  .then(data => {
    data.map(function (dog) {
      //2. Render the names of the dogs one and one in the console.
      console.log('DOG ', dog.name)

      //3. Render them out in the DOM instead of the console.
      let li = document.createElement('li')
      li.innerText = dog.name
      document.getElementById('dogUl').appendChild(li)
    })
  })
  .catch(err => console.log(err))

//III/1. 1. Request all the books from the API.
const getBooks = getInfo('https://majazocom.github.io/Data/books.json')
  .then(data => {
    //2. Render all the books to the DOM that have less pages than 500.
    data
      .filter(book => book.pages < 500)
      .map(function (book) {
        let li = document.createElement('li')
        li.innerText = book.title
        document.getElementById('bookUl').appendChild(li)
      })
  })
  .catch(err => console.log(err))

//IV/1: Request all the visitors to a work-event from the API.
const getVisitors = getInfo('https://majazocom.github.io/Data/attendees.json')
  .then(data => {
    //2. Render only the ones that are attending to the DOM.
    data
      .filter(visitor => visitor.attending == true)
      .map(function (visitor) {
        let li = document.createElement('li')
        li.innerText = visitor.name
        document.getElementById('visitorAttendingUl').appendChild(li)
      })
  })
  .catch(err => console.log(err))

const getVisitorsWithAllergy = getInfo(
  'https://majazocom.github.io/Data/attendees.json'
)
  .then(data => {
    //3. Render only the ones that are attending and have some allergy to the DOM.
    data
      .filter(
        visitor => visitor.attending == true && visitor.allergies.length > 0
      )
      .map(function (visitor) {
        let li = document.createElement('li')
        li.innerText = visitor.name
        document.getElementById('visitorAttendingAllergyUl').appendChild(li)
      })
  })
  .catch(err => console.log(err))
