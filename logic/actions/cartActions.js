import {
  ON_ADD,
  ON_DEC,
  ON_INC,
  ON_RES_QTY,
  ON_REMOVE,
  ON_TOGGLE_CART,
  ON_SHOW_CART,
  ON_HIDE_CART,
  RESET_CART
} from "./types";

export const onAdd = (product, quantity) => {
  return {
    type: ON_ADD,
    payload: { product, quantity },
  };
};

export const onRemove = (product) => {
  return {
    type: ON_REMOVE,
    payload: { product },
  };
};

export const setShowCart = () => {
  return {
    type: ON_SHOW_CART,
  };
};

export const setHideCart = () => {
  return {
    type: ON_HIDE_CART,
  };
};

export const toggleCartItemQuantity = (id, value) => {
  return {
    type: ON_TOGGLE_CART,
    payload: { id, value },
  };
};

export const incQty = () => {
  return {
    type: ON_INC,
  };
};

export const decQty = () => {
  return {
    type: ON_DEC,
  };
};

export const resQty = () => {
  return {
    type: ON_RES_QTY,
  };
};

export const resCart = () => {
  return {
    type: RESET_CART,
  };
};