const BASE_ROUTE = 'https://mesto.nomoreparties.co/v1/cohort-28';
const TOKEN = '0760ddfd-b432-4756-af57-8cde608b855b';

export const AUTORIZATION_PARAMS = {
  baseRoute: BASE_ROUTE,
  headers: {
    authorization: TOKEN,
    'Content-Type': 'application/json'
  }
}
