import { FETCH_ALL_PRODUCTS, FETCH_MY_PRODUCTS, FILTER_PRODUCTS } from "../actions/products";

export default function (state = [], {type, payload}) {
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      return payload
    case FETCH_MY_PRODUCTS:
      return payload
    case FILTER_PRODUCTS:
      return payload
    default:
      return state
  }
}
