import types from "./types";

export function setCustomer(customer) {
  return { type: types.SET_CUSTOMER, customer };
}

export function requestPizzarias() {
  return { type: types.REQUEST_PIZZARIA };
}

export function setPizzarias(pizzarias) {
  return { type: types.SET_PIZZARIAS, pizzarias };
}

export function setShopMapSelected(pizzaria) {
  return { type: types.SET_PIZZARIA_MAP_SELECTED, pizzaria };
}

export function setMapCenter(location) {
  return { type: types.SET_MAP_CENTER, location };
}

export function requestPizzaria(id) {
  return { type: types.REQUEST_PIZZARIA, id };
}

export function setPizzaria(pizzaria) {
  return { type: types.SET_PIZZARIA, pizzaria };
}

export function toggleCartProduct(product) {
  return { type: types.TOGGLE_CART_PRODUCT, product };
}

export function setTransaction(transaction) {
  return { type: types.SET_TRANSACTION, transaction };
}

export function makePurchase() {
  return { type: types.MAKE_PURCHASE };
}
