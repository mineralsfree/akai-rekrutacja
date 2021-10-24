/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu
  pokemonów, masz do niej dostęp również w tym pliku.
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić
  w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje
   nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  pokemonsContainer.replaceChildren();
  pokemons.forEach(pokemon => {
    const container = document.createElement('div');
    container.classList.add('pokemon-container')
    const image = document.createElement('img');
    const name = document.createElement('p');
    name.classList.add('name')
    const typesContainer = document.createElement('div');
    typesContainer.classList.add('types-container')
    name.textContent = pokemon.name;
     image.src = pokemon.image
    container.appendChild(image);
    container.appendChild(name);
    pokemon.types.forEach(type => {
      const typeText = document.createElement('p');
      typeText.textContent = type;
      typesContainer.appendChild(typeText);
    })
    container.appendChild(typesContainer);
    pokemonsContainer.appendChild(container);

  })
  // uzupełnij tutaj
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  const included = []
  const inputs = [...document.getElementsByTagName('input')];
  const search = inputs.pop();
  inputs.forEach(input => {
    if (input.checked) {
      included.push(input.id);
    }
  })
  const searchStr = search.value;
  const filtered = pokemons.filter(pokemon => {
    for (let i = 0; i < pokemon.types.length; i++) {
      if (included.includes(pokemon.types[i])) {
        if (pokemon.name.toUpperCase().indexOf(searchStr.toUpperCase()) !== -1)
          return true;
      }
    }
  return false;
}

)
return filtered;
// uzupełnij tutaj
// zwróć odfiltrowaną tablicę pokemonów
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
