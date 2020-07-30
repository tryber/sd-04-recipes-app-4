const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function getPlanets() {
  return fetch(API).then((response) => response.json());
}
