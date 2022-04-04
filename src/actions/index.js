// TODO: add and export your own actions

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(res => res.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(res => res.json()).then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(res => res.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}
