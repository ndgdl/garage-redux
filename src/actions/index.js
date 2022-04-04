const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}/${garage}/cars`)
    .then(res => res.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`${BASE_URL}/${garage}/cars`, {
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
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(res => res.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function deleteCar(history, car) {
  const request = fetch(`${BASE_URL}/cars/${car.id}`, {
    method: 'DELETE' })
    .then(res => res.json)
    .then(() => history.push(""));
  return {
    type: CAR_DELETED,
    payload: request
  };
}
